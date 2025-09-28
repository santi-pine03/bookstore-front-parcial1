import BookCard from "@/components/BookCard";
import { CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/BookCard";
import Image from "next/image";
import {Book} from "@/types/book";
import Link from "next/link";

type Props = {
  books: Book[];
};


const BooksList = ({ books }: Props) => {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 gap-x-15">
                {books.map((book) => (
                  <Link key={book.id} href={`/books/${book.id}`} passHref>
                    <BookCard key={book.id} book={book}>
                        <CardHeader>
                          <div className= "relative w-full aspect-[6/8] overflow-hidden rounded-lg">
                            <Image
                            src={book.image}
                            alt={book.name}
                            fill
                            unoptimized/>
                          </div>
                        </CardHeader>
                        <CardContent>
                        <CardTitle>{book.name}</CardTitle>
                        <CardDescription >
                            {book.description}
                        </CardDescription>
                        </CardContent>
                        <CardFooter>
                            Fecha de Publicación: {book.publishingDate}
                        </CardFooter>
                    </BookCard>
                  </Link>
                    ))}
            </div>


  );
}

export default BooksList;