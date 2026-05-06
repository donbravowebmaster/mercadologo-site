import Icon from './Icon';

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: 'Análisis en Tiempo Real',
      description: 'Obtén insights inmediatos sobre tendencias de mercado y comportamiento del consumidor',
      icon: 'activity',
      bgGradient: 'from-blue-50 to-blue-100',
    },
    {
      id: 2,
      title: 'Reportes Personalizados',
      description: 'Recibe dashboards y reportes adaptados a tus necesidades específicas',
      icon: 'bar-chart-2',
      bgGradient: 'from-purple-50 to-purple-100',
    },
    {
      id: 3,
      title: 'Soporte 24/7',
      description: 'Nuestro equipo experto siempre disponible para ayudarte a maximizar resultados',
      icon: 'phone',
      bgGradient: 'from-red-50 to-red-100',
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 md:py-40 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24">
          <span className="inline-block text-sm font-semibold text-brand-red uppercase tracking-wider mb-4">
            Por qué elegirnos
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Ventajas de nuestro servicio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Herramientas y expertise que transforman datos en decisiones estratégicas
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`group relative bg-gradient-to-br ${feature.bgGradient} rounded-3xl p-8 sm:p-10 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer`}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex items-center justify-center h-14 w-14 bg-white rounded-2xl group-hover:bg-brand-red transition-all duration-300">
                  <Icon
                    name={feature.icon}
                    size={24}
                    color={feature.id === 3 ? '#fff' : '#EC221F'}
                    className={feature.id === 3 ? '' : 'text-brand-red'}
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-red transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 font-light leading-relaxed">
                {feature.description}
              </p>

              {/* Arrow Icon */}
              <div className="mt-6 inline-block text-brand-red opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
                <Icon name="arrow-right" size={20} color="#EC221F" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-brand-red opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-brand-red opacity-5 rounded-full blur-3xl"></div>
    </section>
  );
}
