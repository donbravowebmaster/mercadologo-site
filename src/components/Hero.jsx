export default function Hero() {
  return (
    <section className="relative py-20 sm:py-28 md:py-40 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight">
              Innovación en inteligencia de
              <span className="text-brand-red"> mercado</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 font-light leading-relaxed">
              Transforma datos en decisiones estratégicas. Conoce, entiende y anticipa el comportamiento de tu mercado.
            </p>

            {/* CTA */}
            <a
              href="#contacto"
              className="inline-block px-8 sm:px-10 py-4 bg-brand-red hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 text-lg hover:shadow-2xl"
            >
              Comienza ahora
            </a>
          </div>

          {/* Illustration */}
          <div className="hidden md:block">
            <img
              src="/images/adapted/mercadologo-site1.svg"
              alt="Market Intelligence Illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
