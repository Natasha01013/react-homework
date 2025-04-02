import ShopCard from './ShopCard';

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

export default CardsView;