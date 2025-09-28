import { Book } from "@/types/book";

type Props = {
  book: Omit<Book, "id" | "reviews" | "author">;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const BookForm = ({ book, onChange }: Props) => {
  return (
    <div className="space-y-4 bg-gray-200 p-4 rounded-lg shadow-md w-full max-w-md">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          value={book.name}
          onChange={onChange}
          required
          placeholder="Ej: El señor de los anillos"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="isbn" className="block text-sm font-medium text-gray-700">
          ISBN
        </label>
        <input
          id="isbn"
          name="isbn"
          value={book.isbn}
          onChange={onChange}
          required
          placeholder="Ej: 978-3-16-148410-0"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Imagen (URL)
        </label>
        <input
          id="image"
          name="image"
          value={book.image}
          onChange={onChange}
          required
          placeholder="https://ejemplo.com/imagen.jpg"
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
          value={book.description}
          onChange={onChange}
          required
          rows={4}
          placeholder="Breve descripción del libro…"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="publishingDate" className="block text-sm font-medium text-gray-700">
          Fecha de publicación
        </label>
        <input
          id="publishingDate"
          name="publishingDate"
          type="date"
          value={book.publishingDate}
          onChange={onChange}
          required
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default BookForm;