// components/Layout.js
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <header className="bg-blue-900 text-white py-4">
        <nav className="max-w-5xl mx-auto flex space-x-4 px-4">
          <Link href="/" legacyBehavior>
            <a className="hover:underline">Home</a>
          </Link>
          <Link href="/pollutants" legacyBehavior>
            <a className="hover:underline">Pollutants</a>
          </Link>
          <Link href="/more-info" legacyBehavior>
            <a className="hover:underline">More Info</a>
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="bg-blue-900 text-white text-center py-4 mt-8">
        <p>© 2025 Air Pollution Survival Guide</p>
      </footer>
    </div>
  );
}
