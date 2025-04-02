import React, { useState } from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

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