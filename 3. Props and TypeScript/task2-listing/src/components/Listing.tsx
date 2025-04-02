import React from 'react';

//свойства объекта data из data.json, которые будем использовать
//Отражаем свойства не обязательными, т.к. их может нет быть в data
export interface ListingItem {
  listing_id: number; //уникальный идентификатор предложения
  url?: string; //ссылка на предложение из каталога
  MainImage?: { url_570xN?: string }; // информация об изображении, необходимо использовать свойство url_570xN для получения адреса главной картинки
  title?: string; //название предложения
  currency_code?: string; //код валюты
  price?: string; //цена
  quantity?: number; //доступное количество
}

// Определяем свойство items, которое является массивом ([]). 
// Каждый элемент этого массива должен соответствовать структуре, определенной интерфейсом ListingItem выше. 
// Т.е. компонент Listing будет получать массив объектов из предложений
//items — список предложений
interface ListingProps {
  items: ListingItem[];
}

//Listing - функциональный компонентом React (React.FC). 
// <ListingProps> берет свойства из интерфейса ListingProps
const Listing: React.FC<ListingProps> = ({ items }) => { 
  // Функция выводит цену (price) в зависимости от кода валюты (currencyCode)
  const formatPrice = (price: string | undefined, currencyCode: string | undefined): string => {
    if (!price || !currencyCode) {
      return '';  //добавляем заглушку в случае undefined
    }
    switch (currencyCode) {
      case 'USD':
        return `$${price}`;
      case 'EUR':
        return `€${price}`;
      default:
        return `${price} ${currencyCode}`;
    }
  };

  //Функция возвращает класс CSS для подсветки остатка
  const getQuantityClass = (quantity: number | undefined): string => {
    if (quantity === undefined) {
      return '';  //добавляем заглушку в случае undefined
    }
    if (quantity <= 10) {
      return 'level-low';
    } else if (quantity <= 20) {
      return 'level-medium';
    } else {
      return 'level-high';
    }
  };

  //Функция обрезает название предложения до 50 символов
  const truncateTitle = (title: string | undefined): string => {
    if (!title) {
      return ''; //добавляем заглушку в случае undefined
    }
    //Если название предложения превышает 50 символов, то необходимо выводить только первые 50 символов, и добавлять символ … в конце
    if (title.length > 50) {
      return title.substring(0, 50) + '...';
    }
    return title;
  };

  //Компонент создает на основе списка предложений следующий HTML-код
  return (
    <div className="item-list">
      {items.map((item) => ( //Для каждого элемента item в массиве вернем код
      //в key используется уникальный item.listing_id
        <div className="item" key={item.listing_id}> 
          <div className="item-image">
            <a href={item.url}>
              {/* Оператор ? предотвратит ошибку, если item.MainImage будет undefined. 
              Т.е. item.MainImage?.url_570xN вернет undefined, и изображение не будет отображено */}
              <img src={item.MainImage?.url_570xN} alt={item.title} />
            </a>
          </div>
          <div className="item-details">
            <p className="item-title">{truncateTitle(item.title)}</p>
            <p className="item-price">{formatPrice(item.price, item.currency_code)}</p>
            <p className={`item-quantity ${getQuantityClass(item.quantity)}`}>
              {item.quantity} left
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;