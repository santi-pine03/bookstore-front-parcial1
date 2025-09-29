"use client";

import { useEffect, useState } from "react";
import {Book} from "@/types/book";
import { getBooks } from "@/lib/api";
import BookList from "@/components/BookList";
import Link from "next/link";

export default function AuthorPage() {

    const [books, setBooks] = useState<Book[]>([]) 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function fetchBooks() {
        setLoading(true);
        setError(null);
        try {
            const res = await getBooks(); //La lista de autores, usando la funcion en api
            setBooks(res);
        } catch (e) {
         if (e instanceof Error) {
            setError(e.message);
        } else {
            setError("Error inesperado");
        }
        }finally {
            setLoading(false);
        }
    }   


    useEffect(() => {fetchBooks(); }, []); //Se llama una sola vez al cargar la pagina

    return (
        <div className = "bg-[#4D5061] min-h-screen">
            <header className="mb-10 flex items-center justify-between border-b border-[#3D4B62] bg-[#404145] pb-6 px-6 py-6">
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
                    href="/authors"
                    className="ml-2 inline-flex items-center rounded-lg bg-[#1E1E1B] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#494A4F] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    >Ver autores</Link>
                    </nav>
            </header>
            <div className="max-w-full mx-auto px-6 text-center">
                <h1 className="mb-8 text-3xl font-bold tracking-tight text-white">Libros</h1>
            {loading && (
                <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-gray-500 border-solid">
                    </div>
                <p className="ml-4 text-white">Cargando la lista de libros...</p>
                </div>
            )}
            {error && <p style={{color: "red"}}>{error}</p>}
            {BookList.length === 0 && !loading && (
            <p className="text-white">No hay libros para mostrar</p>
            )}
            <BookList books={books} />
            </div>
        </div>
    );


}