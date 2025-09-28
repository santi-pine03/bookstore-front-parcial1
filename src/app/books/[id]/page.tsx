"use client";

import { useEffect, useState } from "react";
import {Book} from "@/types/book";
import { getBookById } from "@/lib/api";
import BookDetail from "@/components/BookDetail";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function AuthorPage() {

    const { id } = useParams<{ id: string }>();
    const [book, setBook] = useState<Book>() 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function fetchBook( id : number) {
        setLoading(true);
        setError(null);
        try {
            const res = await getBookById(id); 
            setBook(res);
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


    useEffect(() => {
        if(id) {
            fetchBook(Number(id));
        }
        }, [id]); //Se llama una sola vez al cargar la pagina

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
                    href="/books"
                    className="inline-flex items-center rounded-lg bg-[#1E1E1B] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#494A4F] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    >Listado de Libros</Link>
                    </nav>
            </header>
            <div className="max-w-full mx-auto px-6 text-center">
            {loading && (
                <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-gray-500 border-solid">
                    </div>
                <p className="ml-4 text-white">Cargando el detalle del libro...</p>
                </div>
            )}
            {error && <p style={{color: "red"}}>{error}</p>}
            {BookDetail === null && !loading && (
            <p className="text-white">No se econtró el detalle del libro</p>
            )}
                {book && !loading && (
                    <>
                        <h1 className="mb-8 text-3xl font-bold tracking-tight text-white">
                            Libro: {book.name}
                        </h1>
                        <BookDetail book={book} />
                    </>
                )}
            </div>
        </div>
    );


}