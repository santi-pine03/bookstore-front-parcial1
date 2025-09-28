"use client";

import { useState} from "react";
import { Review } from "@/types/review";
import { createReview } from "@/lib/api";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

export default function CreateReview() {
    const { id } = useParams<{ id: string }>(); // Esto hace que se tome el id de la URL
    const [review, setReview] = useState<Omit<Review, "id">>({
            name: "",
            source: "",
            description:""});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();



    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        if (name in review) {
            setReview((prevReview) => ({
                ...prevReview,
                [name]: value,
            }));
        }
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            await createReview(Number(id), review);
            router.push(`/books/${id}`);  //Esto es lo que manda al usuario al detalle del libro
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            } else {
                setError("Error inesperado");
            }
        } finally {
            setLoading(false);
        }
    }

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
        <nav>
          <Link
          href="/books"
          className="inline-flex items-center rounded-lg bg-[#1E1E1B] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#494A4F] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >Ver libros</Link>
          </nav>
      </header>

      <div className="container mx-auto px-2 py-8 text-center">
      <h1 className = "mb-2 text-3xl font-bold tracking-tight text-white">Crea una reseña</h1>
      <div className="flex-1 flex items-center justify-center">
        <form 
          onSubmit={handleSubmit}
          className="space-y-4 bg-gray-200 p-4 rounded-lg shadow-md w-full max-w-md"
        >
          {error && (
            <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700 border border-red-200">
              {error}
            </p>
          )}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              value={review.name}
              onChange={handleChange}
              required
              placeholder="Ej: J.K. Rowling"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="source" className="block text-sm font-medium text-gray-700">
              source
            </label>
            <input
              id="source"
              name="source"
              type="string"
              value={review.source}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              value={review.description}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Breve reseña…"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-2 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center rounded-lg bg-gray-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-gray-700 disabled:opacity-60"
            >
              {loading ? "Creando…" : "Crear"}
            </button>
            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex items-center rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-300"
            >Cancelar</button>
          </div>
        </form>
        </div>
      </div>
    </div>
  );
}