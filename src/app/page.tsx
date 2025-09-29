import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-[#4D5061]">
      <header className="flex items-center justify-between border-b border-[#3D4B62] bg-[#404145] pb-6 px-6 py-6">
        <div>
          <nav>
            <Link
            href="/"
            className="text-2xl font-bold text-white"
            >Bookstore</Link>
            </nav>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center">
        <section className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white">Bienvenido</h1>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link
              href="/authors"
              className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10">
              <h2 className="text-lg font-semibold text-white">Ver listado de autores</h2>
            </Link>

            <Link
              href="/crear"
              className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10">
              <h2 className="text-lg font-semibold text-white">Crear un nuevo autor</h2>
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1">
            <Link
              href="/books"
              className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10">
              <h2 className="text-lg font-semibold text-white">Ver listado de libros</h2>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}