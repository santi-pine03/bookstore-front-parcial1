import { Book } from "./book";
import {prize } from "./prize";
export interface Author {
    id: number;
    birthDate: string;
    description: string;
    image: string;
    name: string;
    books: Book[];
    prizes: prize[];
}