import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0 hover:opacity-70 transition">
            <img
              src="/images/logo-jjmercadologo-blanco-rojo.svg"
              alt="JJ Mercadólogo"
              className="h-10 sm:h-12 w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#oferta"
              className="text-sm font-medium text-gray-600 hover:text-brand-red transition duration-300"
            >
              Proceso
            </a>
            <a
              href="#soluciones"
              className="text-sm font-medium text-gray-600 hover:text-brand-red transition duration-300"
            >
              Soluciones
            </a>
            <a
              href="#contacto"
              className="text-sm font-medium text-brand-red hover:text-red-700 transition duration-300"
            >
              Contacto
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-gray-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200 space-y-2">
            <a
              href="#oferta"
              className="block py-3 px-2 text-gray-600 hover:text-brand-red rounded-lg transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Proceso
            </a>
            <a
              href="#soluciones"
              className="block py-3 px-2 text-gray-600 hover:text-brand-red rounded-lg transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Soluciones
            </a>
            <a
              href="#contacto"
              className="block py-3 px-2 text-brand-red rounded-lg transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Contacto
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
