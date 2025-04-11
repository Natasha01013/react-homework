/**
 * @interface TopNewsItemProps
 * @property {string} icon - URL или имя класса иконки.
 * @property {string} text - Текст новости.
 * @property {string} link - URL ссылки на новость.
 */
export interface TopNewsItemProps {
  icon: string;
  text: string;
  link: string;
}

/**
 * @file Элемент списка актуальных новостей, принимает иконку, текст новости и ссылку через props.
 * @param {TopNewsItemProps} props - Объект с данными новости.
 */
function TopNewsItem({ icon, text, link }: TopNewsItemProps) {
  return (
    <div>
      <span>{icon}</span> <a href={link}>{text}</a>
    </div>
  );
}

export default TopNewsItem;