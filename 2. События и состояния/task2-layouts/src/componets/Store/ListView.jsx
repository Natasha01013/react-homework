import ShopItem from './ShopItem';

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

export default ListView;