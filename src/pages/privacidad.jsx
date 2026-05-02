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

export default function Privacidad() {
  return (
    <div>
      <HeaderModern />
      <main className="bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Header */}
          <div className="mb-12">
            <p className="text-sm font-semibold text-brand-red uppercase tracking-wider mb-3">Legal</p>
            <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4 leading-tight">
              Aviso de Privacidad
            </h1>
            <p className="text-gray-400 text-sm">Última actualización: 1 de mayo de 2026</p>
          </div>

          <Section title="I. Identidad y domicilio del Responsable">
            <p>
              <strong className="text-gray-800">JJ Mercadólogo</strong>, con domicilio en Anillo Periférico 1807 - L4, Col. Rincón de San Jerónimo, Monterrey, NL 64637,
              es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente.
            </p>
            <p>
              Para cualquier asunto relacionado con este aviso de privacidad puede contactarnos en:
              <br />
              <strong className="text-gray-800">Correo electrónico:</strong> info@mercadologo.com
              <br />
              <strong className="text-gray-800">Teléfono:</strong> +52 81 4445 4444
            </p>
          </Section>

          <Section title="II. Datos personales que recabamos">
            <p>Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Nombre completo</li>
              <li>Correo electrónico</li>
              <li>Número de teléfono</li>
              <li>Nombre y giro de la empresa</li>
              <li>Datos de navegación (cookies, dirección IP, tipo de navegador)</li>
            </ul>
            <p>
              No recabamos datos personales sensibles en el sentido del artículo 3, fracción VI de la Ley Federal de
              Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
            </p>
          </Section>

          <Section title="III. Finalidades del tratamiento">
            <p><strong className="text-gray-800">Finalidades primarias</strong> (necesarias para la relación jurídica):</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Atender solicitudes de información, cotización y contacto</li>
              <li>Proveer los servicios de inteligencia de mercado contratados</li>
              <li>Elaborar propuestas comerciales y presupuestos</li>
              <li>Cumplir obligaciones legales y fiscales derivadas de nuestra relación</li>
            </ul>
            <p><strong className="text-gray-800">Finalidades secundarias</strong> (puede negarse sin afectar la relación):</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Envío de información sobre nuevos servicios, promociones y actualizaciones</li>
              <li>Realización de encuestas de satisfacción</li>
              <li>Análisis estadísticos internos para mejora del servicio</li>
            </ul>
            <p>
              Si no desea que sus datos sean tratados para las finalidades secundarias, puede manifestarlo enviando un
              correo a <strong className="text-gray-800">info@mercadologo.com</strong> con el asunto "Opt-out finalidades secundarias".
            </p>
          </Section>

          <Section title="IV. Derechos ARCO">
            <p>
              Usted tiene derecho a <strong className="text-gray-800">Acceder</strong> a sus datos personales que poseemos,
              <strong className="text-gray-800"> Rectificarlos</strong> en caso de ser inexactos o incompletos,
              <strong className="text-gray-800"> Cancelarlos</strong> cuando considere que no se requieren para alguna de las
              finalidades señaladas, u <strong className="text-gray-800">Oponerse</strong> al tratamiento de los mismos para
              fines específicos.
            </p>
            <p>Para ejercer sus derechos ARCO deberá presentar su solicitud mediante:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Correo electrónico: <strong className="text-gray-800">info@mercadologo.com</strong> con el asunto "Solicitud ARCO"</li>
              <li>Indicar nombre completo y datos de contacto del titular</li>
              <li>Descripción clara del derecho que desea ejercer</li>
              <li>Cualquier elemento que facilite la localización de sus datos</li>
            </ul>
            <p>
              Responderemos su solicitud en un plazo máximo de <strong className="text-gray-800">20 días hábiles</strong> contados
              a partir de la fecha de recepción. La resolución adoptada será comunicada en un plazo de <strong className="text-gray-800">15 días hábiles</strong> adicionales.
            </p>
          </Section>

          <Section title="V. Transferencia de datos personales">
            <p>
              Sus datos personales no serán transferidos a terceros sin su consentimiento, salvo las excepciones previstas en
              el artículo 37 de la LFPDPPP, incluyendo:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Autoridades competentes cuando sea requerido por ley</li>
              <li>Proveedores de servicios tecnológicos que actúen como encargados del tratamiento bajo estrictas obligaciones de confidencialidad</li>
            </ul>
          </Section>

          <Section title="VI. Uso de cookies y tecnologías de rastreo">
            <p>
              Este sitio web utiliza cookies y tecnologías similares para mejorar su experiencia de navegación, analizar el
              tráfico y personalizar contenido. Las cookies empleadas son:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li><strong className="text-gray-800">Cookies técnicas:</strong> necesarias para el funcionamiento del sitio</li>
              <li><strong className="text-gray-800">Cookies analíticas:</strong> para medir el rendimiento y uso del sitio</li>
            </ul>
            <p>
              Puede deshabilitar el uso de cookies a través de la configuración de su navegador, aunque esto podría afectar
              la funcionalidad del sitio.
            </p>
          </Section>

          <Section title="VII. Medidas de seguridad">
            <p>
              Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales
              contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado, de conformidad
              con lo dispuesto en la LFPDPPP y su Reglamento.
            </p>
          </Section>

          <Section title="VIII. Modificaciones al aviso de privacidad">
            <p>
              Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso
              de privacidad. Estas modificaciones estarán disponibles a través del sitio web{' '}
              <strong className="text-gray-800">mercadologo.com</strong>. Le recomendamos revisar periódicamente esta página.
            </p>
            <p>
              El uso continuado de nuestros servicios tras la publicación de cambios constituirá su aceptación de dichos cambios.
            </p>
          </Section>

          <Section title="IX. Marco legal aplicable">
            <p>El presente aviso de privacidad se emite en cumplimiento de:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)</li>
              <li>Reglamento de la LFPDPPP</li>
              <li>Lineamientos del Aviso de Privacidad emitidos por el INAI</li>
            </ul>
            <p>
              Si considera que su derecho a la protección de datos personales ha sido lesionado, puede acudir al
              Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI)
              en <strong className="text-gray-800">www.inai.org.mx</strong>.
            </p>
          </Section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
