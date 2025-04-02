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

export default ShopItem;