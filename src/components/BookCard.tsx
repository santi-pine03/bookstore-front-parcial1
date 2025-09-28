import React from "react";
import { Book } from "@/types/book";

export default function BookCard({ book, children }: { book: Book ; children?: React.ReactNode }) {
    return (
      <div className="w-90 border rounded-lg p-8 shadow-lg bg-[#1E1E1B] hover:scale-101">
      {children}
    </div>
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-header"
            className={`relative grid auto-rows-min items-start gap-6 ${className}`}
            {...props}
        />
    );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-title"
            className={`leading-none font-semibold text-center py-4 text-white ${className}`}
            {...props}
        />
    );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-description"
            className={`text-justify text-sm text-white ${className}`}
            {...props}
        />
    );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-content"
            className={`px-6 ${className}`}
            {...props}
        />
    );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-footer"
            className={`flex items-center gap-3 px-6 mt-4 text-white ${className}`}
            {...props}
        />
    );
}

export { CardHeader, CardTitle, CardDescription, CardContent, CardFooter };