// components/Header.js
'use client'
import Link from 'next/link';

const Header = () => (
  <header className="bg-primary text-white shadow-md sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      <div className="text-2xl font-semibold">Benson Muzarakuza</div>
      <nav>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-secondary">Home</Link></li>
          <li><Link href="/about" className="hover:text-secondary">About</Link></li>
          <li><Link href="/projects" className="hover:text-secondary">Projects</Link></li>
          <li><Link href="/contact" className="hover:text-secondary">Contact</Link></li>
        </ul>
      </nav>
    </div>

    <style jsx>{`
      header {
        background-color: #1F2937; /* Primary color */
      }
      .hover:text-secondary:hover {
        color: #3B82F6; /* Secondary color */
      }
    `}</style>
  </header>
);

export default Header;
