// Компонент Toolbar c набором кнопок фильтров без состояния 
const Toolbar = ({ filters, selected, onSelectFilter }) => { //от Portfolio мы передаём три свойства в функциональный компонент
  return (
    <div>
      {filters.map((filter) => ( //используем метод map для итерации по массиву filters
        <button
          key={filter} //уникальный ключ, необходимый React для эффективного обновления списка кнопок
          onClick={() => onSelectFilter(filter)}
          className={ selected === filter ? 'selected-filter' : 'normal-filter' }>
          {filter} {/*текст кнопки, который отображает название фильтра */}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;