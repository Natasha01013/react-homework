import PopularItem, { PopularItemProps } from './PopularItem';

/**
 * @file Блок с информацией о популярных запросах или разделах.
 */

const popularData: PopularItemProps[] = [
  { text: 'Недвижимость — о сталинках', href: '#' },
  { text: 'Маркет — люстры и светильники', href: '#' },
  { text: 'Авто.ру — привод 4х4 до 500 000', href: '#' },
];

function Popular() {
  return (
    <div className='div-popular'>
      <h3>Посещаемое</h3>
      <ul>
        {popularData.map((item, index) => (
          <li key={index}>
            <PopularItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Popular;