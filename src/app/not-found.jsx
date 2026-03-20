import Link from 'next/link'

function NotFound() {
  return (
    <section className="flex h-[calc(100vh-4rem)] justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Not Found</h1>
        <p>Could not find requested resource</p>
        <Link href="/" className="text-blue-600 hover:underline">Volver al inicio</Link>
      </div>
    </section>
  );
}

export default NotFound;