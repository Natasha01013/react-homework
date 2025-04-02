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

export default ShopCard;