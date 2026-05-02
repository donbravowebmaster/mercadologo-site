export default function HeroModern() {
  return (
    <section className="relative pt-8 pb-12 sm:pb-16 md:pb-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content - Left Side */}
          <div className="z-10">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-6 sm:mb-8 leading-none">
              Inteligencia de
              <span className="text-brand-red"> mercado</span>
              {' '}en tiempo real
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 font-light leading-relaxed max-w-xl">
              Transforma datos en decisiones estratégicas. Conoce, entiende y anticipa el comportamiento de tu mercado con nuestro proceso probado.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="#contacto"
                className="inline-block px-8 sm:px-10 py-3.5 bg-brand-red hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 text-base hover:shadow-xl hover:scale-105 text-center"
              >
                Comienza ahora
              </a>
              <a
                href="#soluciones"
                className="inline-block px-8 sm:px-10 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-full transition-all duration-300 text-base text-center"
              >
                Explorar soluciones
              </a>
            </div>

          </div>

          {/* Illustration - Right Side */}
          <div className="relative block">
            {/* Curved Background Shape */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-brand-red to-red-600 rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-10 right-0 w-80 h-80 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full opacity-20 blur-3xl"></div>

            {/* Image Container */}
            <div className="relative z-10">
              <img
                src="/images/adapted/mercadologo-site1.svg"
                alt="Market Intelligence"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
    </section>
  );
}
