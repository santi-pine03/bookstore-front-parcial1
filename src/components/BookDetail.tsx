import Image from "next/image";
import { Book } from "@/types/book";

type Props = {
  book: Book;
};

const BooksDetail = ({ book }: Props) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative w-3/4 md:w-60 aspect-[6/8] overflow-hidden rounded-lg mx-30 border-white border-2 hover:scale-101">
          <Image src={book.image} alt={book.name} fill unoptimized />
        </div>

        <div className="text-white text-left">
          <p className="mb-4">{book.description}</p>
          <p className="mb-4">Fecha de Publicación: {book.publishingDate}</p>
          <p className="mb-4">ISBN: {book.isbn}</p>
        </div>
      </div>
    </div>
  );
};

export default BooksDetail;