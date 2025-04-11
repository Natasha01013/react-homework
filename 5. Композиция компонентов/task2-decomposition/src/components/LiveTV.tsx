import LiveTVItem, { LiveTVItemProps } from './LiveTVItem';

/**
 * @file Блок с виджетами онлайн-трансляций (Эфир).
 */

const liveTVData: LiveTVItemProps[] = [
  { title: 'Управление как искусство', href: '#' },
  { title: 'Ночь. Мир в это время', href: '#' },
  { title: 'Андрей Возн...', href: '#' },
];

function LiveTV() {
  return (
    <div className='div-livetv'>
      <h3>Эфир</h3>
      <ul>
        {liveTVData.map((item, index) => (
          <li key={index}>
            <LiveTVItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LiveTV;