"use client";

import { useState } from "react";
import AuthorForm from "@/components/AuthorForm";
import BookForm from "@/components/BookForm";
import PrizeForm from "@/components/PrizeForm";
import { Author } from "@/types/author";
import { Book } from "@/types/book";
import { prize } from "@/types/prize";
import { createAuthor, createBook, createPrize } from "@/lib/api";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CreateAuthor() {
  const [author, setAuthor] = useState<Omit<Author, "id">>({
    name: "",
    image: "",
    birthDate: "",
    description: "",
  });
  const [book, setBook] = useState<Omit<Book, "id" | "reviews" | "author">>({
    name: "",
    isbn: "",
    image: "",
    description: "",
    publishingDate: "",
    editorial: {name:"Editorial Base"}
  });
  const [prize, setPrize] = useState<Omit<prize, "id">>({
    premiationDate: "",
    name: "",
    description: "",
    organization: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  let submitLabel = "Crear nuevo Autor";
    if (loading) {
      submitLabel = "Creando...";
    }

  function handleAuthorChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setAuthor((prevAuthor) => ({
      ...prevAuthor,
      [name]: value,
    }));
  }

  function handleBookChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  }

    function handlePrizeChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setPrize((prevPrize) => ({
      ...prevPrize,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await createAuthor(author);
      await createBook(book);
      await createPrize(prize);

      router.push("/authors"); // Al crear el autor con las demas cosas, vuelve a la lista de autores
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
      <div className="min-h-screen flex flex-col bg-[#4D5061]">
        <header className="flex items-center justify-between border-b border-[#3D4B62] bg-[#404145] pb-6 px-6 py-6">
          <div>
            <nav>
              <Link href="/" className="text-2xl font-bold text-white">
                Bookstore
              </Link>
            </nav>
          </div>
          <nav>
            <Link
              href="/authors"
              className="inline-flex items-center rounded-lg bg-[#1E1E1B] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#494A4F] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Ver autores
            </Link>
          </nav>
        </header>

        <div className="container mx-auto px-2 py-5">
          <h1 className="text-3xl font-bold text-white text-center mb-3">Crea un nuevo autor, con un libro y premio</h1>

          {/* Contenedor de tres columnas */}
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Formulario del autor */}
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-700 mb-1 text-center">Formulario de Autor</h2>
              <AuthorForm author={author} onChange={handleAuthorChange} />
            </div>

            {/* Formulario del libro */}
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-700 mb-1 text-center">Formulario de Libro</h2>
              <BookForm book={book} onChange={handleBookChange} />
            </div>

            {/* Formulario del premio */}
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-gray-700 mb-1 text-center">Formulario de Premio</h2>
              <PrizeForm prize={prize} onChange={handlePrizeChange} />
            </div>

            {/* Botón de envío */}
            <div className="col-span-1 md:col-span-3 text-center">
              {error && (
                <p className="mt-1 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700 border border-red-200">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="mt-1 inline-flex items-center rounded-lg bg-gray-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-gray-700 disabled:opacity-60"
              >
                {submitLabel}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}