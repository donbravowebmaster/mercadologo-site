const solutions = [
  {
    id: 1,
    title: "Estudios Cuantitativos",
    description: "Datos precisos y medibles para decisiones basadas en evidencia",
    items: [
      "Encuestas Presenciales",
      "Encuestas Digitales",
      "Análisis de Datos",
      "Modelado Predictivo",
    ],
    illustration: "/images/adapted/mercadologo-site7.svg",
  },
  {
    id: 2,
    title: "Estudios Cualitativos",
    description: "Entendimiento profundo de motivaciones y comportamientos",
    items: [
      "Entrevistas Semi-Profundas",
      "Focus Groups",
      "Estudios Etnográficos",
      "Misiones de Consumo",
    ],
    illustration: "/images/adapted/mercadologo-site8.svg",
  },
  {
    id: 3,
    title: "Sistemas de Inteligencia",
    description: "Plataformas inteligentes para monitoreo continuo del mercado",
    items: [
      "Monitoreo de Tendencias",
      "Análisis Competitivo",
      "Inteligencia de Consumidor",
      "Dashboards Personalizados",
    ],
    illustration: "/images/adapted/mercadologo-site9.svg",
  },
];

import Icon from './Icon';

export default function SolutionsSection() {
  return (
    <section id="soluciones" className="bg-gray-50 py-24 sm:py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-24 sm:mb-32">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 mb-8 leading-none">
            Soluciones
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 max-w-2xl font-light">
            Tres enfoques que se adaptan a los desafíos únicos de tu mercado
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {solutions.map((solution, idx) => (
            <div
              key={solution.id}
              className="bg-white p-12 sm:p-14"
              style={{
                borderLeft: `4px solid #EC221F`,
              }}
            >
              {/* Illustration */}
              <div className="mb-8 h-56 rounded-lg overflow-hidden bg-gray-50">
                <img
                  src={solution.illustration}
                  alt={solution.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <div className="flex items-center gap-3 mb-4">
                <Icon
                  name={
                    solution.id === 1 ? 'bar-chart-2' :
                    solution.id === 2 ? 'users' :
                    'activity'
                  }
                  size={24}
                  color="#EC221F"
                />
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {solution.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-base font-light leading-relaxed mb-8">
                {solution.description}
              </p>

              {/* Items List */}
              <ul className="space-y-4">
                {solution.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start text-gray-700 text-base">
                    <span className="text-brand-red font-black mr-3 text-lg">−</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section - Apple Style */}
        <div className="mt-24 sm:mt-32 pt-24 sm:pt-32 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="text-5xl sm:text-6xl font-black text-brand-red mb-4">500+</div>
              <p className="text-gray-600 text-base font-light">Proyectos Completados</p>
            </div>
            <div>
              <div className="text-5xl sm:text-6xl font-black text-brand-red mb-4">15+</div>
              <p className="text-gray-600 text-base font-light">Años de Experiencia</p>
            </div>
            <div>
              <div className="text-5xl sm:text-6xl font-black text-brand-red mb-4">50+</div>
              <p className="text-gray-600 text-base font-light">Industrias Servidas</p>
            </div>
            <div>
              <div className="text-5xl sm:text-6xl font-black text-brand-red mb-4">98%</div>
              <p className="text-gray-600 text-base font-light">Satisfacción Cliente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
