import { Author } from "@/types/author";
import { Book } from "@/types/book";
import { prize } from "@/types/prize";
import { Review } from "@/types/review";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE as string;


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


export async function createBook(book: Omit<Book, "id" | "reviews" | "author">): Promise<Book> {
  const res = await fetch(`${BASE_URL}/api/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
    if (!res.ok) {
        throw new Error("Error al crear el libro");
    }

    return res.json() as Promise<Book>;
}

export async function createPrize(prize: Omit<prize, "id">): Promise<prize> {
    const res = await fetch(`${BASE_URL}/api/prizes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(prize),
    });
    if (!res.ok) {
        throw new Error("Error al crear el premio");
    }

    return res.json() as Promise<prize>;
}

export async function addBookAuthor (bookId: number, authorId: number): Promise<Book> {

    const res = await fetch(`${BASE_URL}/api/authors/${authorId}/books/${bookId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) {
        throw new Error("Error al agregar el libro al autor");
    }
    return res.json() as Promise<Book>;
}

export async function addPrizeAuthor (prizeId: number, authorId: number): Promise<prize> {
    const res = await fetch(`${BASE_URL}/api/prizes/${prizeId}/author/${authorId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json", 
        },
    });
    if (!res.ok) {
        throw new Error("Error al agregar el premio al autor");
    }
    return res.json() as Promise<prize>;
}

export async function getBooks(): Promise<Book[]> {
    const res = await fetch(`${BASE_URL}/api/books`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!res.ok) {
        throw new Error("Error al obtener los libros");
    }
    return res.json() as Promise<Book[]>;
}

export async function getBookById(id: number) {
  const res = await fetch(`${BASE_URL}/api/books/${id}`);
  if (!res.ok) throw new Error("No se pudo cargar el libro");
  return res.json();
}

export async function createReview(id: number, review: Omit<Review, "id">): Promise<Review> {
    const res = await fetch(`${BASE_URL}/api/books/${id}/reviews`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
    });
    if (!res.ok) {
        throw new Error("Error al crear la reseña");
    }
    return res.json() as Promise<Review>;
}
