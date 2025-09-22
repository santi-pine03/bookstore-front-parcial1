import { Author } from "@/types/author";

const BASE_URL = "http://127.0.0.1:8080";


export async function createAuthor(author: Omit<Author, "id">): Promise<Author> {
  const res = await fetch(`${BASE_URL}/api/authors`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(author),
  });

  if (!res.ok) {
    throw new Error("Error al crear el autor");
  }

  return res.json() as Promise<Author>;
}


export async function deleteAuthor(author: Author): Promise<void> {

    const res = await fetch(`${BASE_URL}/api/authors/${author.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        throw new Error("Error al eliminar el autor");
    }

    return; // Debe mandar un codigo 204 No Content, por eso aca no se retorna nada
}


export async function updateAuthor(id:number , author: Omit<Author,"id">): Promise<Author> {

    const res = await fetch(`${BASE_URL}/api/authors/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(author),
    });

    if (!res.ok) {
        throw new Error("Error al actualizar el autor");
    }

    return res.json() as Promise<Author>;
}

export async function getAuthors(): Promise<Author[]> {
    const res = await fetch(`${BASE_URL}/api/authors`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) {
        throw new Error("Error al obtener los autores");
    }
    return res.json() as Promise<Author[]>;
}

export async function getAuthorById(id: number) {
  const res = await fetch(`${BASE_URL}/api/authors/${id}`);
  if (!res.ok) throw new Error("No se pudo cargar el autor");
  return res.json();
}



