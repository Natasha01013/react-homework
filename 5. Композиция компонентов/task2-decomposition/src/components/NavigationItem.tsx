/**
 * @interface NavigationItemProps
 * @property {string} text - Текст ссылки.
 * @property {string} href - URL ссылки.
 */

export interface NavigationItemProps {
  text: string;
  href: string;
}

/**
 * @file Элемент навигационной панели, принимает текст ссылки и URL через props.
 * @param {NavigationItemProps} props - Объект с данными ссылки.
 */

function NavigationItem({ text, href }: NavigationItemProps) {
  return (
    <a href={href}>{text}</a>
  );
}

export default NavigationItem;