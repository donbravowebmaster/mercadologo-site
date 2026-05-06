import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="bg-brand-red text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top row: logo + contacto */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-10">
          <img
            src="/images/logo-mercadologo-nav.svg"
            alt="JJ Mercadólogo"
            style={{ width: '180px', height: 'auto' }}
            className="brightness-0 invert"
          />
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-white/80">
            <a href="mailto:info@mercadologo.com" className="flex items-center gap-2 hover:text-white transition">
              <Icon name="mail" size={15} color="currentColor" />
              info@mercadologo.com
            </a>
            <a href="tel:+5281444544444" className="flex items-center gap-2 hover:text-white transition">
              <Icon name="phone" size={15} color="currentColor" />
              +52 81 4445 4444
            </a>
            <span className="flex items-center gap-2 text-white/80">
              <Icon name="map-pin" size={15} color="currentColor" />
              Anillo Periférico 1807 - L4, Col. Rincón de San Jerónimo, Monterrey, NL 64637
            </span>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          {/* 2 columnas en móvil, 4 en desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-3">Navegación</h3>
              <ul className="space-y-2">
                <li><a href="#oferta" className="text-white/70 hover:text-white text-sm transition">Proceso</a></li>
                <li><a href="#soluciones" className="text-white/70 hover:text-white text-sm transition">Soluciones</a></li>
                <li><a href="#contacto" className="text-white/70 hover:text-white text-sm transition">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-3">Legal</h3>
              <ul className="space-y-2">
                <li><a href="/privacidad" className="text-white/70 hover:text-white text-sm transition">Privacidad</a></li>
                <li><a href="/terminos" className="text-white/70 hover:text-white text-sm transition">Términos</a></li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-2">
              <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-3">Acerca de</h3>
              <p className="text-white/70 text-sm font-light leading-relaxed">
                Transformamos datos en inteligencia estratégica para ayudarte a conocer, entender y anticipar tu mercado.
              </p>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6">
            <p className="text-white/50 text-center text-xs">
              © {new Date().getFullYear()} JJ Mercadólogo. Todos los derechos reservados.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
