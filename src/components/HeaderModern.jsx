import { useState, useEffect, useRef } from 'react';
import Icon from './Icon';

export default function HeaderModern() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 80) {
        setVisible(true);
      } else if (currentY > lastScrollY.current) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const show = visible || hovered;

  return (
    <>
      {/* Floating Pill Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 pt-6 md:pt-16 transition-all duration-300"
        style={{
          opacity: show ? 1 : 0,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">

          {/* Red pill — perfectly rounded */}
          <div className="relative bg-brand-red rounded-full shadow-xl px-5 md:px-10 flex items-center justify-between" style={{ height: '58px' }}>

            {/* Logo — isotipo en móvil, logo completo en desktop */}
            <a href="/" className="flex items-center pl-1 md:pl-0">
              <img
                src="/images/isotipo-jjm-negro.svg"
                alt="Mercadólogo"
                style={{ height: '44px', width: 'auto' }}
                className="brightness-0 invert md:hidden"
              />
              <img
                src="/images/logo-mercadologo-nav.svg"
                alt="Mercadólogo"
                style={{ width: '220px', height: 'auto' }}
                className="brightness-0 invert hidden md:block"
              />
            </a>

            {/* Desktop links — absolutely centered in the pill */}
            <div className="hidden md:flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
              <a href="#oferta" className="text-white font-semibold text-sm hover:text-white/80 transition">
                Proceso
              </a>
              <a href="#soluciones" className="text-white font-semibold text-sm hover:text-white/80 transition">
                Soluciones
              </a>
              <a href="#contacto" className="text-white font-semibold text-sm hover:text-white/80 transition">
                Contacto
              </a>
            </div>

            {/* CTA Button */}
            <a
              href="#contacto"
              className="hidden md:inline-block px-5 py-2 bg-white text-brand-red font-bold rounded-full transition-all duration-300 hover:bg-gray-100 text-sm"
            >
              Comienza ahora
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden pr-1"
            >
              <Icon name={isOpen ? "x" : "menu"} size={28} color="white" strokeWidth={2.5} />
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
            style={{ maxHeight: isOpen ? '200px' : '0px', opacity: isOpen ? 1 : 0 }}
          >
            <div className="bg-brand-red rounded-3xl px-6 py-4 space-y-1 shadow-xl mt-2">
              <a href="#oferta" className="block text-white/80 hover:text-white font-medium py-2 transition">
                Proceso
              </a>
              <a href="#soluciones" className="block text-white/80 hover:text-white font-medium py-2 transition">
                Soluciones
              </a>
              <a href="#contacto" className="block text-white/80 hover:text-white font-medium py-2 transition">
                Contacto
              </a>
            </div>
          </div>

        </div>
      </nav>

      {/* Spacer */}
      <div className="h-20 md:h-64"></div>
    </>
  );
}
