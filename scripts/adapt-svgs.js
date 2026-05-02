const fs = require('fs');
const path = require('path');

const colorMap = {
  '#ef4444': '#EC221F',
  '#b33333': '#EC221F',
  '#c43030': '#EC221F',
  '#d43c3c': '#EC221F',
  '#c13434': '#EC221F',
  '#bf3636': '#EC221F',
};

const inputDir = './public/images';
const outputDir = './public/images/adapted';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const svgFiles = fs.readdirSync(inputDir).filter(f => f.startsWith('mercadologo-site') && f.endsWith('.svg'));

svgFiles.forEach(file => {
  const inputPath = path.join(inputDir, file);
  let content = fs.readFileSync(inputPath, 'utf-8');

  Object.entries(colorMap).forEach(([oldColor, newColor]) => {
    const regex = new RegExp(oldColor, 'gi');
    content = content.replace(regex, newColor);
  });

  const outputPath = path.join(outputDir, file);
  fs.writeFileSync(outputPath, content, 'utf-8');
  console.log(`✓ Adapted ${file}`);
});

console.log(`\nAdapted ${svgFiles.length} SVG files to public/images/adapted/`);
