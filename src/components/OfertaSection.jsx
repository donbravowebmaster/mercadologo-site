const services = [
  {
    id: 1,
    number: "01",
    title: "Identificamos",
    description: "Detectamos oportunidades y tendencias en tu mercado",
    illustration: "/images/adapted/mercadologo-site2.svg",
    icon: "Market Research, Consumer Behavior, Data Analysis, Surveys, Market Trends.svg",
  },
  {
    id: 2,
    number: "02",
    title: "Entendemos",
    description: "Comprendemos el comportamiento de tu audiencia",
    illustration: "/images/adapted/mercadologo-site3.svg",
    icon: "Target Audience, Marketing Strategy, Customer Focus, Market Segmentation, Consumer Insights.svg",
  },
  {
    id: 3,
    number: "03",
    title: "Detonamos",
    description: "Activamos estrategias de crecimiento efectivas",
    illustration: "/images/adapted/mercadologo-site4.svg",
    icon: "Product Launch, Marketing Campaign, Advertising, Promotion, Product Introduction.svg",
  },
  {
    id: 4,
    number: "04",
    title: "Provocamos",
    description: "Generamos cambios positivos en tu negocio",
    illustration: "/images/adapted/mercadologo-site5.svg",
    icon: "Marketing Funnel, Sales Funnel, Customer Journey, Conversion Rate, Lead Generation.svg",
  },
  {
    id: 5,
    number: "05",
    title: "Diseñamos",
    description: "Creamos soluciones personalizadas para ti",
    illustration: "/images/adapted/mercadologo-site6.svg",
    icon: "Content Marketing, Blogging, Article Writing, Content Creation, Digital Strategy.svg",
  },
];

export default function OfertaSection() {
  return (
    <section id="oferta" className="bg-white py-24 sm:py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-24 sm:mb-32">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-8 leading-none">
            Nuestro proceso
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl font-light">
            Cinco pasos para transformar tu inteligencia de mercado en resultados
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col"
            >
              {/* Illustration */}
              <div className="mb-8 h-48 rounded-lg overflow-hidden bg-gray-50">
                <img
                  src={service.illustration}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Icon and Number */}
              <div className="flex items-end gap-4 mb-4">
                <div className="h-20 w-20 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                  <img
                    src={`/images/icons/Glyph/${service.icon}`}
                    alt={service.title}
                    className="h-16 w-16 object-contain"
                  />
                </div>
                <div className="text-4xl sm:text-5xl font-black text-brand-red">
                  {service.number}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-base font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
