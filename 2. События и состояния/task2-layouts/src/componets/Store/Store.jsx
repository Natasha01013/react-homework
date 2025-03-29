import React, { useState } from 'react';

// Компонент для отображения иконки переключения вида
const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <div className="material-icons" onClick={onSwitch}>
      {icon}
    </div>
  );
};

// Компонент для отображения карточек товаров по 3 в ряд
const ShopCard = ({ product }) => {
  return (
    <div className="shop-card">
      <h2 className="shop-card__name">{product.name}</h2>
      <p className="shop-card__color">{product.color}</p>
      <img className="shop-card__image" src={product.img} alt={product.name} />
      <div className="shop-card__price">${product.price}</div>
    </div>
  );
};

// Компонент для отображения карточек товаров по 3 в ряд
const CardsView = ({ cards }) => {
  return (
    <div className="cards-view">
      {cards.map((product, index) => (
        //для каждого товара из массива cards создаем компонент ShopCard, которому передается информация о товаре 
        // и уникальный key, чтобы React правильно обновлял список
        <ShopCard key={index} product={product} />
      ))}
    </div>
  );
};

// Компонент для отображения элемента списка товаров в столбик
const ShopItem = ({ product }) => {
  return (
    <div className="shop-item">
      <img className="shop-item__image" src={product.img} alt={product.name} />
      <div className="shop-item__info">
        <h2 className="shop-item__name">{product.name}</h2>
        <p className="shop-item__color">{product.color}</p>
        <div className="shop-item__price">${product.price}</div>
      </div>
    </div>
  );
};

// Компонент для отображения списка товаров в столбик
const ListView = ({ items }) => {
  return (
    <div className="list-view">
      {items.map((product, index) => (
        <ShopItem key={index} product={product} />
      ))}
    </div>
  );
};

// Компонент Store, управляющий состоянием приложения
const Store = ({ products }) => {
  const [view, setView] = useState('cards'); // Начальное состояние - карточки

  const handleSwitch = () => {
    setView(view === 'cards' ? 'list' : 'cards');
  };

  //иконки view_list и view_module берем из библиотеки Material Icons, которую подключаем в CSS
  const icon = view === 'cards' ? 'view_list' : 'view_module'; 

  return (
    <div className="store">
      <IconSwitch icon={icon} onSwitch={handleSwitch} />
      {view === 'cards' ? <CardsView cards={products} /> : <ListView items={products} />}
    </div>
  );
};

export default Store;