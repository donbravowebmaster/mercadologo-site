# 📦 Activos y Licencias - JJ Mercadólogo

## Descripción General

Este documento proporciona información completa sobre todos los activos (ilustraciones, iconos, imágenes) utilizados en mercadologo.com, junto con sus licencias y términos de uso.

---

## 🎨 Activos Utilizados

### 1. **Ilustraciones SVG** - Envato Elements

#### Información General
- **Producto:** Marketing Strategy Illustrations
- **Autor:** hoangpts
- **Fuente:** Envato Elements
- **Código de Licencia:** YQDR2NZXUE
- **Licenciado a:** Ricardo Bravo
- **Proyecto:** mercadologo.com
- **Fecha de Licencia:** 1 de mayo de 2026
- **Tipo de Licencia:** No-exclusiva, comercial, mundial

#### Archivos Incluidos
```
public/images/
├── adapted/
│   ├── mercadologo-site1.svg (Hero - Analytics/Dashboard)
│   ├── mercadologo-site2.svg (Oferta - Paso 1)
│   ├── mercadologo-site3.svg (Oferta - Paso 2)
│   ├── mercadologo-site4.svg (Oferta - Paso 3)
│   ├── mercadologo-site5.svg (Oferta - Paso 4)
│   ├── mercadologo-site6.svg (Oferta - Paso 5)
│   ├── mercadologo-site7.svg (Solutions - Cuantitativos)
│   ├── mercadologo-site8.svg (Solutions - Cualitativos)
│   └── mercadologo-site9.svg (Solutions - Inteligencia)
├── NPHH_M76_09.svg (ContactForm - People/Communication)
└── LICENSES.pdf (Certificado oficial)
```

#### Términos de Uso

✅ **PERMITIDO:**
- Uso en el sitio web mercadologo.com
- Materiales de marketing online
- Presentaciones comerciales internas
- Documentos de negocios
- Redes sociales corporativas
- Campañas publicitarias digitales

❌ **NO PERMITIDO:**
- Vender las ilustraciones por separado
- Usar en otros proyectos sin licencia adicional
- Revender o redistribuir los archivos
- Remover información de derechos de autor
- Usar fuera del contexto de mercadologo.com comercialmente

#### Adaptaciones de Color
Todas las ilustraciones han sido adaptadas a la paleta de colores de marca de Mercadólogo:
- **Colores Originales:** Incluían reds (#ef4444), blues, grays, skin tones
- **Colores Adaptados:** 
  - Reds → #EC221F (Brand Red)
  - Otros colores: Mantenidos para coherencia visual
- **Skin Tones:** Preservados sin cambios
- **Blues/Accents:** Mantenidos como colores complementarios

#### Localización de Uso en el Sitio
- `src/components/Hero.jsx` → site1.svg
- `src/components/OfertaSection.jsx` → site2-6.svg
- `src/components/SolutionsSection.jsx` → site7-9.svg
- `src/components/ContactForm.jsx` → NPHH_M76_09.svg

#### Documentación
- Certificado oficial: `public/LICENSES.pdf`
- Detalles: `public/ATTRIBUTION.md`
- Página web: `/licenses` (en el sitio)

**Referencia Oficial:** https://elements.envato.com/license-terms

---

### 2. **Iconos** - Feather Icons

#### Información General
- **Librería:** Feather Icons
- **Autor:** Cole Bemis
- **Licencia:** MIT
- **GitHub:** https://github.com/feathericons/feather
- **Instalación:** `npm install feather-icons`

#### Iconos Utilizados
```
mail       → Footer: Email de contacto
phone      → Footer: Teléfono de contacto
map-pin    → Footer: Ubicación
bar-chart-2 → SolutionsSection: Estudios Cuantitativos
users      → SolutionsSection: Estudios Cualitativos
activity   → SolutionsSection: Sistemas de Inteligencia
```

#### Términos de Uso (MIT License)

✅ **PERMITIDO:**
- Uso comercial
- Modificación del código
- Distribución
- Uso privado
- Incluir en proyectos propietarios

**Condición principal:**
- Incluir aviso de licencia MIT
- Incluir atribución a Cole Bemis
- Documentar cambios realizados (si los hay)

#### Componente de Implementación
```javascript
// Ubicación: src/components/Icon.jsx
import Icon from './components/Icon';

// Uso:
<Icon name="mail" size={24} color="#EC221F" />
```

#### Localización de Uso
- `src/components/Footer.jsx` → Iconos de contacto
- `src/components/SolutionsSection.jsx` → Iconos de soluciones

---

### 3. **Iconos de Marketing** - Envato Elements

#### Información General
- **Producto:** Marketing Icons
- **Autor:** Haca_Studio
- **Fuente:** Envato Elements
- **Código de Licencia:** MZ32Q4TBHR
- **Licenciado a:** Ricardo Bravo
- **Proyecto:** mercadologo.com
- **Fecha de Licencia:** 2 de mayo de 2026
- **Tipo de Licencia:** No-exclusiva, comercial, mundial

#### Archivos Incluidos
```
public/images/icons/
├── Glyph/
│   ├── Advertising, Online Ads, Promotion, Brand Message, Media Buying.svg
│   ├── Affiliate Marketing, Partner Program, Referral, Commission, Affiliate Network.svg
│   ├── Brand Awareness, Brand Building, Reputation, Logo Design, Corporate Identity.svg
│   ├── Content Marketing, Blogging, Article Writing, Content Creation, Digital Strategy.svg
│   ├── Customer Retention, Loyalty Program, Repeat Business, Customer Service, Retention Strategy.svg
│   ├── Email Marketing, Campaign, Newsletter, Subscriber List, Email Blast.svg
│   ├── Influencer Marketing, Social Media, Influencer, Brand Ambassador, Digital Promotion.svg
│   ├── Lead Generation, Sales Funnel, Customer Acquisition, Digital Marketing, B2B Marketing.svg
│   ├── Market Research, Consumer Behavior, Data Analysis, Surveys, Market Trends.svg
│   ├── Marketing Funnel, Sales Funnel, Customer Journey, Conversion Rate, Lead Generation.svg
│   ├── PPC, Online Ads, Pay-Per-Click, Digital Advertising, Web Traffic.svg
│   ├── Product Launch, Marketing Campaign, Advertising, Promotion, Product Introduction.svg
│   ├── SEO, Search Engine, Web Ranking, Optimization, Organic Traffic.svg
│   ├── Social Media, Online Marketing, Facebook, Instagram, Twitter.svg
│   ├── Target Audience, Marketing Strategy, Customer Focus, Market Segmentation, Consumer Insights.svg
│   └── Video Marketing, YouTube Ads, Video Content, Viral Video, Social Media.svg
└── Outline/
    └── (16 iconos en estilo outline)
```

#### Términos de Uso

✅ **PERMITIDO:**
- Uso en el sitio web mercadologo.com
- Materiales de marketing online
- Redes sociales corporativas
- Presentaciones comerciales
- Documentos de negocios
- Campañas publicitarias digitales

❌ **NO PERMITIDO:**
- Vender los iconos por separado
- Usar en otros proyectos sin licencia adicional
- Revender o redistribuir los archivos
- Remover información de derechos de autor

#### Disponibilidad
- **Estilos:** Glyph (relleno) y Outline (contorno)
- **Cantidad:** 16 iconos en 2 estilos = 32 variantes
- **Formato:** SVG (escalable, sin pérdida de calidad)
- **Aplicación:** Perfectos para secciones de marketing, beneficios, servicios

#### Documentación
- Certificado oficial: `public/ICONS_LICENSE.pdf`
- Detalles en: `public/ATTRIBUTION.md`
- Referencia: https://elements.envato.com/license-terms

---

## 📋 Matriz de Permisos

| Activo | Uso Comercial | Modificación | Redistribución | Multi-proyecto |
|--------|--------------|--------------|----------------|----------------|
| Ilustraciones (Envato) | ✅ | ✅ (colores) | ❌ | ❌ |
| Iconos (Feather) | ✅ | ✅ | ✅ | ✅ |
| Adaptaciones de Color | ✅ | N/A | ❌ | ❌ |

---

## 🔍 Verificación de Licencias

### Documentos a Revisar

1. **LICENSES.pdf** 
   - Certificado oficial de Envato Elements
   - Código: YQDR2NZXUE
   - Ubicación: `/public/LICENSES.pdf`
   - Contiene: Términos exactos, autor, fechas, código de licencia

2. **ATTRIBUTION.md**
   - Resumen estructurado de todas las licencias
   - Información de contacto
   - Ubicación: `/public/ATTRIBUTION.md`

3. **Esta Guía (ASSETS_AND_LICENSES.md)**
   - Documentación técnica completa
   - Ubicación en el proyecto
   - Términos de uso expandidos

4. **Página Web de Licencias**
   - URL: `/licenses`
   - Componente: `src/pages/licenses.jsx`
   - Información visual y interactiva

---

## 📂 Estructura de Archivos

```
mercadologo.com/
├── public/
│   ├── images/
│   │   ├── adapted/
│   │   │   ├── mercadologo-site1.svg → site9.svg
│   │   │   └── (SVGs con colores adaptados)
│   │   ├── NPHH_M76_09.svg
│   │   └── isotipo-jjm-rojo.svg (logo)
│   ├── LICENSES.pdf (certificado oficial)
│   └── ATTRIBUTION.md (atribuciones)
├── src/
│   ├── components/
│   │   ├── Icon.jsx (componente reutilizable)
│   │   ├── Hero.jsx (usa site1.svg)
│   │   ├── OfertaSection.jsx (usa site2-6.svg)
│   │   ├── SolutionsSection.jsx (usa site7-9.svg + iconos)
│   │   ├── ContactForm.jsx (usa NPHH_M76_09.svg)
│   │   └── Footer.jsx (usa iconos)
│   ├── pages/
│   │   ├── index.jsx (página principal)
│   │   └── licenses.jsx (página de licencias)
│   └── ...
├── ASSETS_AND_LICENSES.md (este archivo)
└── ...
```

---

## 🎯 Flujo de Conformidad

### Para Usar los Activos en Nuevas Áreas del Sitio:

1. **Verificar licencia:**
   - ¿Es Envato? → Requiere autorización adicional para nuevos proyectos
   - ¿Es Feather Icons? → MIT permite reutilización libremente

2. **Documentar uso:**
   - Actualizar esta guía
   - Actualizar ATTRIBUTION.md si es necesario
   - Agregar comentarios en el código

3. **Atribución:**
   - Iconos: Incluir comentario con "Feather Icons by Cole Bemis"
   - Ilustraciones: Solo uso en mercadologo.com según licencia

---

## 🔗 Enlaces de Referencia

**Envato Elements:**
- Términos: https://elements.envato.com/license-terms
- Soporte: https://help.elements.envato.com/hc/en-us/requests/new

**Feather Icons:**
- Repositorio: https://github.com/feathericons/feather
- Sitio web: https://feathericons.com/
- Licencia MIT: https://opensource.org/licenses/MIT

**Mercadólogo:**
- Contacto: lricardobravo@gmail.com
- Página de Licencias: /licenses
- Certificado: /LICENSES.pdf

---

## 📝 Notas Importantes

- **Validez:** La licencia de Envato es válida de por vida para mercadologo.com, incluso si la suscripción termina
- **Adaptaciones:** Las adaptaciones de color respetan los derechos originales
- **Atribución:** Los derechos de autor deben mantenerse intactos
- **Comercialización:** El sitio puede venderse, pero solo como entidad completa (mercadologo.com)

---

## 🆘 Contacto para Consultas de Licencias

**Ricardo Bravo**
- Email: lricardobravo@gmail.com
- Proyecto: mercadologo.com
- Fecha de Actualización: 1 de mayo de 2026

---

*Última actualización: 1 de mayo de 2026*
*Versión: 1.0*
