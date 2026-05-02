const colorMap = {
  // Red tones - map all to brand red
  '#ef4444': '#EC221F',
  '#b33333': '#EC221F',
  '#b3b3b3': '#EC221F',
  '#c43030': '#EC221F',
  '#d43c3c': '#EC221F',
  '#c13434': '#EC221F',
  '#bf3636': '#EC221F',

  // Keep skin tones as-is
  '#fc9a74': '#fc9a74',
  '#fcc0a9': '#fcc0a9',
  '#fdaf91': '#fdaf91',
  '#e88e6b': '#e88e6b',

  // Keep blues for visual interest
  '#0e1d73': '#0e1d73',
  '#2291f2': '#2291f2',
  '#0f7cce': '#0f7cce',
  '#1a6fba': '#1a6fba',
  '#1b3087': '#1b3087',
  '#203282': '#203282',
  '#445ef2': '#445ef2',
  '#091751': '#091751',
  '#081444': '#081444',
  '#1a3089': '#1a3089',
  '#0b1951': '#0b1951',
};

export function adaptSVGColor(svgContent) {
  let adapted = svgContent;

  Object.entries(colorMap).forEach(([oldColor, newColor]) => {
    const regex = new RegExp(oldColor, 'gi');
    adapted = adapted.replace(regex, newColor);
  });

  return adapted;
}
