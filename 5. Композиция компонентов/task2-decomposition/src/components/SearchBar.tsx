/**
 * @file Строка поиска с полем ввода и кнопкой "Найти".
 */

function SearchBar() {
  return (
    <div className='div-searchbar'>
      <input
        type="text"
      />
      <button>Найти</button>
      <div>Найдётся всё. Например, фаза луны сегодня</div>
    </div>
  );
}

export default SearchBar;