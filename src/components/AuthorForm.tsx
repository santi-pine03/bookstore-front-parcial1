import { Author } from "@/types/author";

type Props = {
  author: Omit<Author, "id" | "books" | "prizes">;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const AuthorForm = ({ author, onChange }: Props) => {
  return (
    <div className="space-y-4 bg-gray-200 p-4 rounded-lg shadow-md w-full max-w-md">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          value={author.name}
          onChange={onChange}
          required
          placeholder="Ej: J.K. Rowling"
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
          value={author.image}
          onChange={onChange}
          required
          placeholder="https://ejemplo.com/foto.jpg"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">
          Fecha de nacimiento
        </label>
        <input
          id="birthDate"
          name="birthDate"
          type="date"
          value={author.birthDate}
          onChange={onChange}
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
          value={author.description}
          onChange={onChange}
          required
          rows={6}
          placeholder="Breve descripción del autor…"
          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default AuthorForm;