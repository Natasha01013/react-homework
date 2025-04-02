import React from 'react';

interface StarProps {
  filled: boolean;
}

const Star: React.FC<StarProps> = ({ filled }) => {
  const fill = filled ? '#D3BCA2' : 'none';//Если filled = true, то fill (цвет звезды) - #D3BCA2. Если filled = false, то fill - без цвета

  return (
    <li>
      <svg fill={fill} height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg"> 
        {/* форма звезды */}
        <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" /> 
        <path d="M0 0h18v18H0z" fill="none" />
      </svg>
    </li>
  );
};

export default Star;