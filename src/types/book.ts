import { Author } from "./author";
import { Review } from "./review";

export interface Book {
    id: number;
    name: string;
    isbn: string;
    image: string;
    description: string;
    reviews: Review[];
    author: Author;
    publishingDate: string;
    editorial: {id: number};
}