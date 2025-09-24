import React from "react";

interface Book {
    image: string;
    title: string;
    description: string;
    publicationDate: string;
}

export default function BookCard({ book, children }: { book: Book ; children?: React.ReactNode }) {
    return (
      <div className="w-50 border rounded-lg p-4 shadow-lg bg-[#1E1E1B] hover:scale-101">
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
            className={`leading-none font-semibold text-center text-white ${className}`}
            {...props}
        />
    );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
    return (
        <div
            data-slot="card-description"
            className={`text-muted-foreground text-sm ${className}`}
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
            className={`flex items-center gap-3 px-6 mt-4 ${className}`}
            {...props}
        />
    );
}

export { CardHeader, CardTitle, CardDescription, CardContent, CardFooter };