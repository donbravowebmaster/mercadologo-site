import HeaderModern from '../components/HeaderModern';
import Footer from '../components/Footer';

function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">{title}</h2>
      <div className="text-gray-600 text-base font-light leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function Terminos() {
  return (
    <div>
      <HeaderModern />
      <main className="bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Header */}
          <div className="mb-12">
            <p className="text-sm font-semibold text-brand-red uppercase tracking-wider mb-3">Legal</p>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 leading-tight">
              Términos de Servicio
            </h1>
            <p className="text-gray-400 text-sm">Última actualización: 1 de mayo de 2026</p>
          </div>

          <Section title="I. Aceptación de los términos">
            <p>
              Al acceder y utilizar el sitio web <strong className="text-gray-800">mercadologo.com</strong> y los servicios
              ofrecidos por <strong className="text-gray-800">JJ Mercadólogo</strong>, usted acepta quedar vinculado por los
              presentes Términos de Servicio. Si no está de acuerdo con alguno de estos términos, le pedimos que se abstenga
              de utilizar nuestro sitio y servicios.
            </p>
            <p>
              Nos reservamos el derecho de modificar estos términos en cualquier momento. El uso continuado del sitio
              tras la publicación de cambios constituirá su aceptación de los mismos.
            </p>
          </Section>

          <Section title="II. Descripción de los servicios">
            <p>
              JJ Mercadólogo ofrece servicios profesionales de inteligencia de mercado, entre los que se incluyen:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Investigación y análisis de mercado</li>
              <li>Estudios de comportamiento del consumidor</li>
              <li>Reportes y dashboards personalizados</li>
              <li>Consultoría en estrategia de marketing basada en datos</li>
              <li>Segmentación y perfilamiento de audiencias</li>
            </ul>
            <p>
              Los alcances específicos, entregables, tiempos y condiciones de cada proyecto se establecen mediante
              propuesta comercial y/o contrato de servicios firmado entre las partes.
            </p>
          </Section>

          <Section title="III. Uso permitido del sitio">
            <p>Usted se compromete a utilizar este sitio únicamente para fines lícitos y de conformidad con estos términos. Queda prohibido:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Reproducir, duplicar o copiar contenido del sitio sin autorización escrita</li>
              <li>Usar el sitio para transmitir material ilegal, difamatorio o fraudulento</li>
              <li>Intentar acceder sin autorización a sistemas o redes vinculadas al sitio</li>
              <li>Utilizar herramientas automatizadas para extraer datos del sitio (scraping)</li>
              <li>Suplantar la identidad de JJ Mercadólogo o de terceros</li>
            </ul>
          </Section>

          <Section title="IV. Propiedad intelectual">
            <p>
              Todo el contenido publicado en este sitio web — incluyendo textos, imágenes, ilustraciones, logotipos,
              íconos, diseño visual y código — es propiedad de <strong className="text-gray-800">JJ Mercadólogo</strong> o
              de sus respectivos titulares, y se encuentra protegido por las leyes mexicanas e internacionales de
              propiedad intelectual.
            </p>
            <p>
              Se autoriza la visualización y descarga temporal de materiales del sitio exclusivamente para uso
              personal y no comercial, siempre que no se eliminen los avisos de propiedad intelectual.
            </p>
            <p>
              Los activos gráficos utilizados en este sitio cuentan con las licencias correspondientes. Puede
              consultarlas en la sección de <a href="/licenses" className="text-brand-red hover:underline">Licencias</a>.
            </p>
          </Section>

          <Section title="V. Confidencialidad">
            <p>
              Toda información que el cliente comparta con JJ Mercadólogo en el contexto de un proyecto o negociación
              comercial será tratada con estricta confidencialidad. Dicha información no será divulgada a terceros
              sin consentimiento previo y por escrito del cliente.
            </p>
            <p>
              Esta obligación de confidencialidad permanecerá vigente durante la relación comercial y por un periodo
              de <strong className="text-gray-800">dos años</strong> posteriores a la conclusión de la misma.
            </p>
          </Section>

          <Section title="VI. Condiciones de pago">
            <p>
              Las condiciones económicas de cada proyecto se establecen en la propuesta comercial correspondiente.
              Con carácter general:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Los precios se expresan en pesos mexicanos (MXN) salvo pacto en contrario</li>
              <li>Se requiere anticipo para dar inicio a cualquier proyecto</li>
              <li>Los pagos son no reembolsables una vez iniciados los trabajos acordados</li>
              <li>Las facturas se emiten conforme a la legislación fiscal mexicana vigente</li>
            </ul>
          </Section>

          <Section title="VII. Limitación de responsabilidad">
            <p>
              JJ Mercadólogo no garantiza que el sitio web esté libre de errores, interrupciones o virus. El uso del
              sitio es bajo su propio riesgo.
            </p>
            <p>
              En ningún caso JJ Mercadólogo será responsable por daños indirectos, incidentales o consecuentes
              derivados del uso o imposibilidad de uso del sitio o de los servicios prestados, salvo en los casos
              expresamente previstos en el contrato de servicios firmado entre las partes.
            </p>
            <p>
              Los resultados derivados de los estudios e investigaciones de mercado son orientativos y están basados
              en metodologías estadísticas. JJ Mercadólogo no garantiza resultados comerciales específicos derivados
              de la aplicación de sus recomendaciones.
            </p>
          </Section>

          <Section title="VIII. Ley aplicable y jurisdicción">
            <p>
              Los presentes Términos de Servicio se rigen por las leyes de los
              <strong className="text-gray-800"> Estados Unidos Mexicanos</strong>. Para cualquier controversia derivada
              de la interpretación o cumplimiento de estos términos, las partes se someten a la jurisdicción de los
              tribunales competentes de la ciudad de <strong className="text-gray-800">Monterrey, Nuevo León, México</strong>,
              renunciando a cualquier otro fuero que pudiera corresponderles.
            </p>
          </Section>

          <Section title="IX. Contacto">
            <p>Para cualquier duda o aclaración respecto a estos Términos de Servicio:</p>
            <ul className="list-none space-y-1 pl-2">
              <li><strong className="text-gray-800">Correo:</strong> info@mercadologo.com</li>
              <li><strong className="text-gray-800">Teléfono:</strong> +52 81 4445 4444</li>
              <li><strong className="text-gray-800">Domicilio:</strong> Anillo Periférico 1807 - L4, Col. Rincón de San Jerónimo, Monterrey, NL 64637</li>
            </ul>
          </Section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
