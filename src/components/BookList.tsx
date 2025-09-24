import React from "react";
import BookCard from "./BookCard";

interface Book {
    id: string;
    image: string;
    title: string;
    description: string;
    publicationDate: string;
}

export default function BookList({ books }: { books: Book[] }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
                <BookCard
                    key={book.id}
                    book={{
                        image: book.image,
                        title: book.title,
                        description: book.description,
                        publicationDate: book.publicationDate,
                    }}
                />
            ))}
        </div>
    );
}