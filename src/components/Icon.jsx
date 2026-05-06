import * as FeatherIcons from 'feather-icons';

export default function Icon({ name, size = 24, color = 'currentColor', strokeWidth = 2, className = '' }) {
  const icon = FeatherIcons.icons[name];

  if (!icon) {
    console.warn(`Icon "${name}" not found in Feather Icons`);
    return null;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`feather feather-${name} ${className}`}
      dangerouslySetInnerHTML={{ __html: icon.contents }}
    />
  );
}
