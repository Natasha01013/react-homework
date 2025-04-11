/**
 * @interface PopularItemProps
 * @property {string} text - Текст ссылки.
 * @property {string} [href] - URL ссылки (опционально).
 */

export interface PopularItemProps {
  text: string;
  href?: string;
}

/**
 * @file Элемент списка популярных запросов/разделов, принимает текст ссылки через props.
 * @param {PopularItemProps} props - Объект с данными популярного элемента.
 */

function PopularItem({ text, href }: PopularItemProps) {
  return (
    <div>
      <a href={href}>{text}</a>
    </div>
  );
}

export default PopularItem;