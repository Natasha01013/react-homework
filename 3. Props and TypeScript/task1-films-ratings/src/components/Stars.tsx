import React from 'react';
import Star from './Star';

interface StarsProps {
  count?: number;
}

const Stars: React.FC<StarsProps> = ({ count = 0 }) => {
  if (typeof count !== 'number' || count < 1 || count > 5) { //count - не число, <1, >5
    return null; //ничего не будет отображаться
  }

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    //Атрибут filled передается компоненту Star и определяет, должна ли звезда быть заполненной.
    //i <= count возвращает true, если текущая звезда (i) должна быть заполнена
    stars.push(<Star key={i} filled={i <= count} />);  
  }

  return <ul className="card-body-stars u-clearfix">{stars}</ul>;
};

export default Stars;