const services = [
  {
    id: 1,
    number: "01",
    title: "Identificamos",
    description: "Detectamos oportunidades y tendencias en tu mercado",
    icon: "Market Research, Consumer Behavior, Data Analysis, Surveys, Market Trends.svg",
  },
  {
    id: 2,
    number: "02",
    title: "Entendemos",
    description: "Comprendemos el comportamiento de tu audiencia",
    icon: "Target Audience, Marketing Strategy, Customer Focus, Market Segmentation, Consumer Insights.svg",
  },
  {
    id: 3,
    number: "03",
    title: "Detonamos",
    description: "Activamos estrategias de crecimiento efectivas",
    icon: "Product Launch, Marketing Campaign, Advertising, Promotion, Product Introduction.svg",
  },
  {
    id: 4,
    number: "04",
    title: "Provocamos",
    description: "Generamos cambios positivos en tu negocio",
    icon: "Marketing Funnel, Sales Funnel, Customer Journey, Conversion Rate, Lead Generation.svg",
  },
  {
    id: 5,
    number: "05",
    title: "Diseñamos",
    description: "Creamos soluciones personalizadas para ti",
    icon: "Content Marketing, Blogging, Article Writing, Content Creation, Digital Strategy.svg",
  },
];

const WHITE_FILTER = 'brightness(0) invert(1)';

export default function OfertaSection() {
  return (
    <section id="oferta" className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-20">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-6 leading-none">
            Nuestro proceso
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl font-light">
            Cinco pasos para transformar tu inteligencia de mercado en resultados
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((service) => (
            <div key={service.id} className="bg-brand-red rounded-2xl p-6 flex flex-col gap-4 shadow-md">
              <img
                src={`/images/icons/Glyph/${service.icon}`}
                alt={service.title}
                className="w-10 h-10 object-contain"
                style={{ filter: WHITE_FILTER }}
              />
              <h3 className="text-white text-lg font-bold leading-snug">
                {service.title}
              </h3>
              <p className="text-red-100 text-sm font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
