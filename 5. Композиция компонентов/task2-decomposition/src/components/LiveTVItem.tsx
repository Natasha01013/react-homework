/**
 * @interface LiveTVItemProps
 * @property {string} title - Название трансляции.
 * @property {string} href - URL трансляции.
 */

export interface LiveTVItemProps {
  title: string;
  href: string;
}

/**
 * @file Элемент списка онлайн-трансляций, принимает название и ссылку через props.
 * @param {LiveTVItemProps} props - Объект с данными трансляции.
 */

function LiveTVItem({ title, href }: LiveTVItemProps) {
  return (
    <div>
      <a href={href}>{title}</a>
    </div>
  );
}

export default LiveTVItem;