import React, {useState} from 'react';

const ColorConverter: React.FC = () => {
  //const [переменная (хранящая текущее значение, введенное в поле; ошибку или цвет фона), функция для обновления состояния этой переменной] = useState(начальное значение в виде пустой строки)
  const [hexValue, setHexValue] = useState(''); 
  const [rgbValue, setRgbValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  //Функция преобразования HEX-кода в rgb
  const hexToRgb = (hex: string): string | null => {
    //если в параметре hex есть #, удаляем его с помощью slice
    const hexCleaned = hex.startsWith('#') ? hex.slice(1) : hex;
    if(!/^[0-9a-fA-F]{6}$/.test(hexCleaned)) {
      return null;
    }
    const r = parseInt(hexCleaned.slice(0, 2), 16);
    const g = parseInt(hexCleaned.slice(2, 4), 16);
    const b = parseInt(hexCleaned.slice(4, 6), 16);
    return `rgb(${r}, ${g}, ${b})`;
  }

  //функция будет обработчиком события изменения значения в поле ввода HEX
  //event — содержит информацию об изменение в поле ввода
  //событие Change произошло на HTML-элементе <input> типа HTMLInputElement
  const handleHexInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newHexValue = event.target.value;//значение элемента, на котором происходит событие (что в поле ввода HEX)
    setHexValue(newHexValue);

    if (newHexValue.length === 7) {
      const rgb = hexToRgb(newHexValue);
      setRgbValue(rgb || '');
      document.body.style.backgroundColor = rgb ? newHexValue : '';  
      setErrorMessage(rgb ? '' : 'Ошибка!');
    } else {
      setRgbValue('');
      document.body.style.backgroundColor = ''; 
      setErrorMessage('');
      }
  }

  return (
    <div>
      <div>
        <label htmlFor="hexInput"></label>
        <input
          type="text"
          id="hexInput"
          value={hexValue}
          onChange={handleHexInputChange}
          placeholder="#RRGGBB"
        />
      </div>
      <div className='form-grb'>
        <label htmlFor="rgbInput"></label>
        <input
          type="text"
          id="rgbInput"
          value={errorMessage || rgbValue} 
          readOnly
          style={{
            color: errorMessage ? 'red' : 'white', 
            // более темный фон формы с цветом rgb
            backgroundColor: rgbValue ? hexValue : '', 
            filter: rgbValue ? 'brightness(0.8)' : '',
          }}
        />
      </div>
    </div>
  );
};

export default ColorConverter;