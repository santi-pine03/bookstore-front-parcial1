"use client";

import { useEffect, useState } from "react";
import {Author} from "@/types/author";
import { getAuthors, deleteAuthor } from "@/lib/api";
import AuthorsList from "@/components/AuthorsList";
import Link from "next/link";


export default function AuthorPage() {

    const [authors, setAuthors] = useState<Author[]>([]) 
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function fetchAuthors() {
        setLoading(true);
        setError(null);
        try {
            const res = await getAuthors(); //La lista de autores, usando la funcion en api
            setAuthors(res);
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

    async function handleDeleteAuthor(author: Author) {
        
        try{
            const ok = window.confirm(`¿Eliminar a "${author.name}"? Esta acción no se puede deshacer.`);
            if (!ok) return;
            setAuthors(authors.filter(function (a) {
                return a.id !== author.id;
            }));

            await deleteAuthor(author);
        }
        catch(e){
            if (e instanceof Error) {
                setError(e.message);
                fetchAuthors(); //Se vuelve a cargar la lista de autores si hay un error al eliminar
            } else {
                setError("Error inesperado");
            }
        }   
    }

    useEffect(() => {fetchAuthors(); }, []); //Se llama una sola vez al cargar la pagina

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
                href="/crear"
                className="inline-flex items-center rounded-lg bg-[#1E1E1B] px-4 py-2 text-sm font-semibold text-white shadow hover:bg-[#494A4F] focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >Crear autor</Link>
                </nav>
            </header>
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="mb-8 text-3xl font-bold tracking-tight text-white">Autores</h1>
            {loading && (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-gray-500 border-solid"></div>
              <p className="ml-4 text-white">Cargando la lista de autores...</p>
            </div>
            )}
            {error && <p style={{color: "red"}}>{error}</p>}
            {authors.length === 0 && !loading && (
            <p className="text-white">No hay autores para mostrar</p>
            )}
            <AuthorsList authors={authors} onDelete={handleDeleteAuthor}/>
            </div>
        </div>

        
    );


}