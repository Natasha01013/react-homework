import React, { useState } from "react";

interface Entry {
  date: string;
  distance: number;
}

const WorkoutTracker: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>([]); //список записей о тренировках
  const [date, setDate] = useState(""); //дата с пустым начальным значением
  const [distance, setDistance] = useState(""); // количество пройденных км с пустым начальным значением

  //добавление или обновление записей о тренировках.
  const addOrUpdateEntry = () => {
    if (!date || !distance) return; //Если дата или расстояние пустые (""), то ничего не делаем

    const newEntries = [...entries]; // копия массива entries
    const existingIndex = newEntries.findIndex((entry) => entry.date === date); //Поиск существующей даты

    if (existingIndex !== -1) {//Если дата уже есть в массиве
      newEntries[existingIndex].distance += parseFloat(distance);//Прибавляем введённое расстояние к существующему. parseFloat(distance) — преобразует строку в число.
    } else { //Если даты нет в массиве 
      newEntries.push({ date, distance: parseFloat(distance) }); //пушим этот объект в массив и преобразуем строку в число
      newEntries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); //Сортировка по убыванию даты
    }

    setEntries(newEntries); //обновляет состояние entries, добавляя/изменяя запись
    setDate(""); //очищаем дату
    setDistance(""); // очищаем км
  };

  //Функция удаления записи
  const deleteEntry = (date: string) => {
    //создаем новый массив, отфильтровывая записи, у которых дата не совпадает с date
    setEntries(entries.filter((entry) => entry.date !== date));
  };

  //функция переноса существующей записи в форму ввода для редактирования
  const editEntry = (date: string, distance: number) => {
    setDate(date); //Заполняем поле ввода даты значением date
    setDistance(distance.toString()); //Заполняем поле ввода километража значением distance
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "auto" }}>
      <h2>Трекер тренировок</h2>
      <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <label style={{ marginBottom: '10px' }} htmlFor="date">Дата (ДД.ММ.ГГ)</label>
          <input style={{ marginBottom: '10px', height: '25px' }} id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <label style={{ marginBottom: '10px' }} htmlFor="distance">Пройдено км</label>
          <input style={{ marginBottom: '10px', height: '25px' }} id="distance" type="number" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="Км" />
        </div>
        
        <button onClick={addOrUpdateEntry} style={{ marginTop: "16px" }}>OK</button>
      </div>
      <table style={{ width: "100%", marginTop: 20, borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Дата (ДД.ММ.ГГ)</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Пройдено км</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Действия</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={entry.date}>
              <td style={{ border: "1px solid black", padding: "8px" }}>{entry.date}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{entry.distance}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                <button onClick={() => editEntry(entry.date, entry.distance)}>✎</button>
                <button onClick={() => deleteEntry(entry.date)} style={{ marginLeft: "8px" }}>✘</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkoutTracker;