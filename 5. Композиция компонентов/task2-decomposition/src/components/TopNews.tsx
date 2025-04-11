import TopNewsItem, { TopNewsItemProps } from './TopNewsItem';

/**
 * @file Компонент, отображающий блок актуальных новостей в СМИ.
 */

const newsData: TopNewsItemProps[] = [
  { icon: '#', text: 'Путин упростил получение автомобильных номеров', link: '#' },
  { icon: '#', text: 'В команде Зеленского раскрыли план реформ на Украине', link: '#' },
  { icon: '#', text: '"Турпомощь" прокомментировала гибель десятков россиян в Анталье', link: '#' },
  { icon: '#', text: 'Суд закрыл дело департамента США против России', link: '#' },
  { icon: '#', text: 'На Украине призвали создать ракеты для удара по Москве', link: '#' },
];

function TopNews() {
  return (
    <div className='div-topnews'>
      <h3>Сейчас в СМИ</h3>
      <ul>
        {newsData.map((news, index) => (
          <li key={index}>
            <TopNewsItem {...news} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopNews;