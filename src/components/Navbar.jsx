import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white px-8 py-4 flex justify-between items-center shadow-md">
      
      {/* Logo */}
      <Link href="/" className="text-xl font-bold hover:text-blue-400 transition">
        NextCRUD
      </Link>

      {/* Links */}
      <ul className="flex gap-6 items-center">
        <li>
          <Link
            href="/new"
            className="hover:text-blue-400 transition"
          >
            New
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-blue-400 transition"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;