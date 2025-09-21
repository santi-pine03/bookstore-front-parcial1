import {Author} from "@/types/author";

export default function AuthorCard({author, children}: {author: Author ; children?: React.ReactNode}) {

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
      className={
        `@container/card-header relative grid auto-rows-min grid-rows-[auto_auto] items-start gap-6 pl-6 pr-0.5 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6${className}`}
      {...props}
    />
  )
}
function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={`leading-none font-semibold text-center text-white ${className}`}
      {...props}
    />
  )
}
function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={`text-muted-foreground text-sm ${className}`}
      {...props}>
      </div>
  )
}
function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={`justify-self-end self-start ${className}`}
      {...props}
    />
  )
}
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={`px-6${className}`}
      {...props}
    />
  )
}
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={`flex items-center gap-3 px-6 mt-4 [.border-t]:pt-10 ${className}`}
      {...props}
    />
  )
}

export {
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}