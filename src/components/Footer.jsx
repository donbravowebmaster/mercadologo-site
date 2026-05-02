import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-20 sm:py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 sm:gap-12 mb-16 sm:mb-20">
          {/* Logo */}
          <div>
            <img
              src="/images/isotipo-jjm-rojo.svg"
              alt="JJ Mercadólogo"
              className="h-12 w-auto mb-6"
            />
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Transformamos datos en inteligencia estratégica para tu negocio.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              Navegación
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#oferta"
                  className="text-gray-400 hover:text-brand-red transition duration-300 text-sm"
                >
                  Proceso
                </a>
              </li>
              <li>
                <a
                  href="#soluciones"
                  className="text-gray-400 hover:text-brand-red transition duration-300 text-sm"
                >
                  Soluciones
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-gray-400 hover:text-brand-red transition duration-300 text-sm"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-brand-red transition duration-300 text-sm"
                >
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-brand-red transition duration-300 text-sm"
                >
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a
                  href="/licenses"
                  className="text-gray-400 hover:text-brand-red transition duration-300 text-sm"
                >
                  Licencias
                </a>
              </li>
              <li>
                <a
                  href="/LICENSES.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand-red transition duration-300 text-sm"
                >
                  Certificado (Ilustraciones)
                </a>
              </li>
              <li>
                <a
                  href="/ICONS_LICENSE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-brand-red transition duration-300 text-sm"
                >
                  Certificado (Iconos)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">
              Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400 hover:text-brand-red transition duration-300">
                <Icon name="mail" size={18} color="currentColor" />
                <a href="mailto:info@mercadologo.com" className="text-sm hover:underline">
                  info@mercadologo.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-brand-red transition duration-300">
                <Icon name="phone" size={18} color="currentColor" />
                <a href="tel:+5281444544444" className="text-sm hover:underline">
                  +52 81 4445 4444
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400 hover:text-brand-red transition duration-300">
                <Icon name="map-pin" size={18} color="currentColor" />
                <span className="text-sm">Monterrey, Nuevo León, México</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 sm:pt-12">
          <p className="text-gray-500 text-center text-sm">
            © {new Date().getFullYear()} JJ Mercadólogo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
