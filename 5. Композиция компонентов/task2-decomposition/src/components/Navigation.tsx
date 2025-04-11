import NavigationItem, { NavigationItemProps } from './NavigationItem';

/**
 * @file Навигационная панель с ссылками на различные разделы Яндекса.
 */

const navItems: NavigationItemProps[] = [
  { text: 'Видео', href: '#' },
  { text: 'Картинки', href: '#' },
  { text: 'Новости', href: '#' },
  { text: 'Карты', href: '#' },
  { text: 'Маркет', href: '#' },
  { text: 'Переводчик', href: '#' },
  { text: 'Эфир', href: '#' },
  { text: 'ещё', href: '#' },
];

function Navigation() {
  return (
    <nav>
      {navItems.map((item, index) => (
        <NavigationItem key={index} {...item} />
      ))}
    </nav>
  );
}

export default Navigation;