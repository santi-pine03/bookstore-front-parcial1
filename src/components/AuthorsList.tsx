import AuthorCard from "@/components/AuthorCard";
import { CardAction, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/AuthorCard";
import Image from "next/image";
import {Author} from "@/types/author";
import Link from "next/link";

type Props = {
  authors: Author[];
  onDelete: (author: Author) => void;
};


const AuthorsList = ({ authors, onDelete }: Props) => {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-3 gap-x-2">
                {authors.map((author) => (
                    <AuthorCard key={author.id} author={author}>
                        <CardHeader>
                          <div className= "relative w-full aspect-[6/8] overflow-hidden rounded-lg">
                            <Image
                            src={author.image}
                            alt={author.name}
                            fill
                            unoptimized/>
                          </div> 
                        <CardAction>
                        {/*<button 
                        className="inline-flex items-center justify-center rounded-full bg-gray-100 p-0.5 text-gray-500 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gary-500 focus:ring-offset-2"
                        >⋮</button>*/}</CardAction>
                        </CardHeader>
                        <CardContent>
                        <CardTitle>{author.name}</CardTitle>
                        <CardDescription >
                        </CardDescription>
                        </CardContent>
                        <CardFooter>
                        <Link
                          href={`/authors/${author.id}/edit`} 
                          className="inline-flex items-center rounded-md bg-gray-100 px-1.5 py-0.5 text-xs text-gray-600 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-400"
                        >
                          Editar
                        </Link>
                        <button onClick={() => onDelete(author)}
                          className="ml-auto rounded-md bg-gray-400 px-1.5 py-0.5 text-xs text-white shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600"
                        >
                          Eliminar
                        </button>
                        </CardFooter>
                    </AuthorCard>
                    ))}
            </div>


  );
}

export default AuthorsList;