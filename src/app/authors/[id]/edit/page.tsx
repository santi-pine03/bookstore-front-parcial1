"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getAuthorById, updateAuthor } from "@/lib/api";
import type { Author } from "@/types/author";
import Link from "next/link";

export default function EditAuthorPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [author, setAuthor] = useState<Author>({} as Author);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAuthorById(Number(id)).then((data) => {
      setAuthor(data);
      setLoading(false);
    });
  }, [id]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!author) return;
    await updateAuthor(author.id, author); // función que esta en api
    router.push("/authors"); // volver a la lista
  }

  if (loading) return <p>Cargando...</p>;

  return (
    <div className="h-screen flex flex-col bg-[#4D5061]">
      <header className="flex items-center justify-between border-b border-[#3D4B62] bg-[#404145] pb-6 px-6 py-6">
        <div>
          <nav>
            <Link
            href="/"
            className="text-2xl font-bold text-white"
            >Bookstore</Link>
            </nav>
        </div>
      </header>
      <div className="flex-1 flex items-center justify-center"> 
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-white p-6 rounded-lg shadow-md w-full max-w-md"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              value={author.name}
              onChange={(e) => setAuthor({ ...author, name: e.target.value })}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">
              Fecha de nacimiento
            </label>
            <input
              id="birthDate"
              type="text"
              value={author.birthDate}
              onChange={(e) => setAuthor({ ...author, birthDate: e.target.value })}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">
              Imagen (URL)
            </label>
            <input
              id="image"
              type="text"
              value={author.image}
              onChange={(e) => setAuthor({ ...author, image: e.target.value })}
              placeholder="URL de la imagen"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Descripción
            </label>
            <textarea
              id="description"
              value={author.description}
              onChange={(e) => setAuthor({ ...author, description: e.target.value })}
              rows={4}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-2 pt-2">
            <button
              type="submit"
              className="inline-flex items-center rounded-lg bg-gray-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-gray-700"
            >
              Guardar cambios
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex items-center rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-300"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
