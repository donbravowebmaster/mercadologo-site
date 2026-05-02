import { useState, useRef, useEffect } from 'react';

const countryCodes = [
  // América
  { code: '+1', abbr: 'US', flag: '🇺🇸', country: 'Estados Unidos' },
  { code: '+1', abbr: 'CA', flag: '🇨🇦', country: 'Canadá' },
  { code: '+52', abbr: 'MX', flag: '🇲🇽', country: 'México' },
  { code: '+53', abbr: 'CU', flag: '🇨🇺', country: 'Cuba' },
  { code: '+55', abbr: 'BR', flag: '🇧🇷', country: 'Brasil' },
  { code: '+54', abbr: 'AR', flag: '🇦🇷', country: 'Argentina' },
  { code: '+57', abbr: 'CO', flag: '🇨🇴', country: 'Colombia' },
  { code: '+56', abbr: 'CL', flag: '🇨🇱', country: 'Chile' },
  { code: '+58', abbr: 'VE', flag: '🇻🇪', country: 'Venezuela' },
  { code: '+51', abbr: 'PE', flag: '🇵🇪', country: 'Perú' },
  { code: '+593', abbr: 'EC', flag: '🇪🇨', country: 'Ecuador' },
  { code: '+591', abbr: 'BO', flag: '🇧🇴', country: 'Bolivia' },
  { code: '+506', abbr: 'CR', flag: '🇨🇷', country: 'Costa Rica' },
  { code: '+507', abbr: 'PA', flag: '🇵🇦', country: 'Panamá' },
  { code: '+598', abbr: 'UY', flag: '🇺🇾', country: 'Uruguay' },
  { code: '+595', abbr: 'PY', flag: '🇵🇾', country: 'Paraguay' },
  // Europa
  { code: '+34', abbr: 'ES', flag: '🇪🇸', country: 'España' },
  { code: '+49', abbr: 'DE', flag: '🇩🇪', country: 'Alemania' },
  { code: '+33', abbr: 'FR', flag: '🇫🇷', country: 'Francia' },
  { code: '+39', abbr: 'IT', flag: '🇮🇹', country: 'Italia' },
  { code: '+44', abbr: 'GB', flag: '🇬🇧', country: 'Reino Unido' },
  { code: '+7', abbr: 'RU', flag: '🇷🇺', country: 'Rusia' },
  { code: '+380', abbr: 'UA', flag: '🇺🇦', country: 'Ucrania' },
  { code: '+48', abbr: 'PL', flag: '🇵🇱', country: 'Polonia' },
  { code: '+40', abbr: 'RO', flag: '🇷🇴', country: 'Rumania' },
  { code: '+31', abbr: 'NL', flag: '🇳🇱', country: 'Países Bajos' },
  { code: '+32', abbr: 'BE', flag: '🇧🇪', country: 'Bélgica' },
  { code: '+30', abbr: 'GR', flag: '🇬🇷', country: 'Grecia' },
  { code: '+351', abbr: 'PT', flag: '🇵🇹', country: 'Portugal' },
  { code: '+46', abbr: 'SE', flag: '🇸🇪', country: 'Suecia' },
  { code: '+47', abbr: 'NO', flag: '🇳🇴', country: 'Noruega' },
  // Asia
  { code: '+86', abbr: 'CN', flag: '🇨🇳', country: 'China' },
  { code: '+91', abbr: 'IN', flag: '🇮🇳', country: 'India' },
  { code: '+81', abbr: 'JP', flag: '🇯🇵', country: 'Japón' },
  { code: '+82', abbr: 'KR', flag: '🇰🇷', country: 'Corea del Sur' },
  { code: '+62', abbr: 'ID', flag: '🇮🇩', country: 'Indonesia' },
  { code: '+90', abbr: 'TR', flag: '🇹🇷', country: 'Turquía' },
  { code: '+63', abbr: 'PH', flag: '🇵🇭', country: 'Filipinas' },
  { code: '+66', abbr: 'TH', flag: '🇹🇭', country: 'Tailandia' },
  { code: '+84', abbr: 'VN', flag: '🇻🇳', country: 'Vietnam' },
  { code: '+60', abbr: 'MY', flag: '🇲🇾', country: 'Malasia' },
  { code: '+65', abbr: 'SG', flag: '🇸🇬', country: 'Singapur' },
  { code: '+92', abbr: 'PK', flag: '🇵🇰', country: 'Pakistán' },
  { code: '+880', abbr: 'BD', flag: '🇧🇩', country: 'Bangladesh' },
  // Oriente Medio
  { code: '+98', abbr: 'IR', flag: '🇮🇷', country: 'Irán' },
  { code: '+964', abbr: 'IQ', flag: '🇮🇶', country: 'Irak' },
  { code: '+962', abbr: 'JO', flag: '🇯🇴', country: 'Jordania' },
  { code: '+961', abbr: 'LB', flag: '🇱🇧', country: 'Líbano' },
  { code: '+965', abbr: 'KW', flag: '🇰🇼', country: 'Kuwait' },
  { code: '+971', abbr: 'AE', flag: '🇦🇪', country: 'Emiratos Árabes Unidos' },
  { code: '+968', abbr: 'OM', flag: '🇴🇲', country: 'Omán' },
  { code: '+974', abbr: 'QA', flag: '🇶🇦', country: 'Qatar' },
  { code: '+973', abbr: 'BH', flag: '🇧🇭', country: 'Bahréin' },
  { code: '+967', abbr: 'YE', flag: '🇾🇪', country: 'Yemen' },
  { code: '+966', abbr: 'SA', flag: '🇸🇦', country: 'Arabia Saudita' },
  // África
  { code: '+20', abbr: 'EG', flag: '🇪🇬', country: 'Egipto' },
  { code: '+27', abbr: 'ZA', flag: '🇿🇦', country: 'Sudáfrica' },
  { code: '+234', abbr: 'NG', flag: '🇳🇬', country: 'Nigeria' },
  { code: '+254', abbr: 'KE', flag: '🇰🇪', country: 'Kenia' },
  { code: '+212', abbr: 'MA', flag: '🇲🇦', country: 'Marruecos' },
  { code: '+213', abbr: 'DZ', flag: '🇩🇿', country: 'Argelia' },
  { code: '+256', abbr: 'UG', flag: '🇺🇬', country: 'Uganda' },
  { code: '+233', abbr: 'GH', flag: '🇬🇭', country: 'Ghana' },
  { code: '+237', abbr: 'CM', flag: '🇨🇲', country: 'Camerún' },
  { code: '+225', abbr: 'CI', flag: '🇨🇮', country: 'Costa de Marfil' },
  { code: '+221', abbr: 'SN', flag: '🇸🇳', country: 'Senegal' },
  { code: '+255', abbr: 'TZ', flag: '🇹🇿', country: 'Tanzania' },
  { code: '+249', abbr: 'SD', flag: '🇸🇩', country: 'Sudán' },
  { code: '+218', abbr: 'LY', flag: '🇱🇾', country: 'Libia' },
  { code: '+216', abbr: 'TN', flag: '🇹🇳', country: 'Túnez' },
  // Oceanía
  { code: '+61', abbr: 'AU', flag: '🇦🇺', country: 'Australia' },
  { code: '+64', abbr: 'NZ', flag: '🇳🇿', country: 'Nueva Zelanda' },
  { code: '+679', abbr: 'FJ', flag: '🇫🇯', country: 'Fiyi' },
  { code: '+675', abbr: 'PG', flag: '🇵🇬', country: 'Papúa Nueva Guinea' },
  { code: '+676', abbr: 'TO', flag: '🇹🇴', country: 'Tonga' },
];

function CountrySelector({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const selected = countryCodes.find((c) => c.code === value);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full sm:w-40" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red text-base bg-white text-left flex items-center justify-between hover:border-gray-400 transition"
      >
        <span>
          {selected && (
            <>
              <span className="text-2xl mr-2">{selected.flag}</span>
              <span className="text-sm">{selected.code}</span>
            </>
          )}
        </span>
        <svg
          className={`w-4 h-4 transition ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-64 overflow-y-auto">
          {countryCodes.map((country) => (
            <button
              key={country.code + country.abbr}
              onClick={() => {
                onChange(country.code);
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-3 hover:bg-gray-100 transition border-b border-gray-100 last:border-b-0 flex items-center gap-3"
            >
              <span className="text-2xl">{country.flag}</span>
              <div className="flex-1">
                <div className="font-medium text-gray-900">{country.abbr}</div>
                <div className="text-xs text-gray-600">{country.country}</div>
              </div>
              <span className="text-gray-600 text-sm font-medium">{country.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    correo: '',
    confirmarCorreo: '',
    codigoPais: '+52',
    telefono: '',
    empresa: '',
    mensaje: '',
    privacyConsent: false,
  });

  const emailsMatch = formData.correo && formData.confirmarCorreo && formData.correo === formData.confirmarCorreo;
  const emailsEmpty = !formData.correo || !formData.confirmarCorreo;
  const emailsDontMatch = !emailsEmpty && !emailsMatch;

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.correo !== formData.confirmarCorreo) {
      setError('Los correos no coinciden');
      return;
    }

    if (!formData.privacyConsent) {
      setError('Debes aceptar el aviso de privacidad para continuar');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('https://contact-form-handler.lricardobravo.workers.dev/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombres: formData.nombres,
          apellidos: formData.apellidos,
          correo: formData.correo,
          telefono: `${formData.codigoPais} ${formData.telefono}`,
          empresa: formData.empresa,
          mensaje: formData.mensaje,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ nombres: '', apellidos: '', correo: '', confirmarCorreo: '', codigoPais: '+52', telefono: '', empresa: '', mensaje: '', privacyConsent: false });
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        setError('Hubo un error al enviar el formulario. Intenta de nuevo.');
      }
    } catch (err) {
      setError('Error de conexión. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="bg-white py-24 sm:py-32 md:py-40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Illustration */}
          <div className="hidden md:block order-2">
            <img
              src="/images/NPHH_M76_09.svg"
              alt="Contact Illustration"
              className="w-full h-auto"
            />
          </div>

          {/* Form Section */}
          <div className="order-1 md:order-1">
            {/* Header */}
            <div className="mb-12 sm:mb-16">
              <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6 leading-tight">
                Contáctanos
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 font-light">
                Cuéntanos sobre tu proyecto. Nos encantaría ayudarte.
              </p>
            </div>

        {/* Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Nombres y Apellidos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="nombres" className="block text-sm font-medium text-gray-900 mb-2">
                  Nombre(s)
                </label>
                <input
                  type="text"
                  id="nombres"
                  name="nombres"
                  value={formData.nombres}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red text-base bg-white"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="apellidos" className="block text-sm font-medium text-gray-900 mb-2">
                  Apellidos
                </label>
                <input
                  type="text"
                  id="apellidos"
                  name="apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red text-base bg-white"
                  placeholder="Tus apellidos"
                />
              </div>
            </div>

            {/* Correo con validación doble */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label htmlFor="correo" className="block text-sm font-medium text-gray-900 mb-2">
                  Correo
                </label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red text-base bg-white"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="confirmarCorreo" className="block text-sm font-medium text-gray-900 mb-2">
                  Confirmar Correo
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="confirmarCorreo"
                    name="confirmarCorreo"
                    value={formData.confirmarCorreo}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 sm:py-4 border rounded-lg focus:outline-none focus:ring-1 text-base bg-white transition ${
                      emailsEmpty ? 'border-gray-300 focus:border-brand-red focus:ring-brand-red' :
                      emailsMatch ? 'border-green-500 focus:border-green-600 focus:ring-green-500' :
                      'border-red-500 focus:border-red-600 focus:ring-red-500'
                    }`}
                    placeholder="Confirma tu email"
                  />
                  {!emailsEmpty && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2">
                      {emailsMatch ? (
                        <span className="text-green-600 font-bold">✓</span>
                      ) : (
                        <span className="text-red-600 font-bold">✗</span>
                      )}
                    </div>
                  )}
                </div>
                {emailsDontMatch && (
                  <p className="text-red-600 text-xs mt-1">Los correos no coinciden</p>
                )}
              </div>
            </div>

            {/* Teléfono con Código de País */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Teléfono
              </label>
              <div className="flex gap-3">
                {/* Código de País */}
                <CountrySelector
                  value={formData.codigoPais}
                  onChange={(code) =>
                    setFormData((prev) => ({
                      ...prev,
                      codigoPais: code,
                    }))
                  }
                />

                {/* Número */}
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="flex-1 px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red text-base bg-white"
                  placeholder="1234567890"
                />
              </div>
            </div>

            {/* Empresa */}
            <div>
              <label htmlFor="empresa" className="block text-sm font-medium text-gray-900 mb-2">
                Empresa
              </label>
              <input
                type="text"
                id="empresa"
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red text-base bg-white"
                placeholder="Nombre de tu empresa"
              />
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-900 mb-2">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red text-base bg-white resize-none"
                placeholder="Cuéntanos sobre tu proyecto..."
              />
            </div>

            {/* Privacy Consent Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="privacyConsent"
                name="privacyConsent"
                checked={formData.privacyConsent}
                onChange={handleChange}
                className="w-5 h-5 mt-1 border border-gray-300 rounded accent-brand-red cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-1"
              />
              <label htmlFor="privacyConsent" className="text-sm text-gray-700 cursor-pointer flex-1">
                He leído y acepto el{' '}
                <a href="/privacidad" className="text-brand-red hover:underline font-medium">
                  Aviso de Privacidad
                </a>
                {' '}y los{' '}
                <a href="/terminos" className="text-brand-red hover:underline font-medium">
                  Términos
                </a>
                {' '}de JJ Mercadólogo.
              </label>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || emailsDontMatch}
              className="w-full py-4 bg-brand-red hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all duration-300 text-lg"
            >
              {loading ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        ) : (
          <div className="text-center py-12">
            <div className="text-5xl mb-6">✓</div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              ¡Mensaje enviado!
            </h3>
            <p className="text-gray-600">
              Gracias por contactarnos. Pronto nos pondremos en contacto.
            </p>
          </div>
        )}
          </div>
        </div>
      </div>
    </section>
  );
}
