import React, { useState } from "react";
import WorkoutForm from "./WorkoutForm";
import WorkoutTable from "./WorkoutTable";

interface Entry {
  date: string;
  distance: number;
}

const WorkoutTracker: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>([]); //список записей о тренировках
  const [editingEntry, setEditingEntry] = useState<Entry | null>(null);

  //добавление или обновление записей о тренировках.
  const addOrUpdateEntry = (newDate: string, newDistance: number, originalDate?: string) => {
    const newEntries = [...entries]; 
    const existingIndex = newEntries.findIndex((entry) => entry.date === (originalDate || newDate));

    if (existingIndex !== -1) {
      // Если дата уже существует и это не редактирование (originalDate отсутствует) - суммируем
      if (!originalDate) {
          newEntries[existingIndex].distance += newDistance;
      } else {
          newEntries[existingIndex].date = newDate;
          newEntries[existingIndex].distance = newDistance;
      }
     } else { 
        newEntries.push({ date: newDate, distance: newDistance });
        newEntries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    setEntries(newEntries); //обновляет состояние entries, добавляя/изменяя запись
    setEditingEntry(null); // Сбрасываем состояние редактирования
  };

  //Функция удаления записи
  const deleteEntry = (date: string) => {
    //создаем новый массив, отфильтровывая записи, у которых дата не совпадает с date
    setEntries(entries.filter((entry) => entry.date !== date));
  };

  //функция переноса существующей записи в форму ввода для редактирования
  const editEntry = (date: string, distance: number) => {
    setEditingEntry({ date, distance });
  };

  return (
    <div className='treker'>
      <h2>Трекер тренировок</h2>
      <WorkoutForm
        key={editingEntry?.date || 'new'} // ключ для сброса состояния формы
        onAddOrUpdate={addOrUpdateEntry}
        initialDate={editingEntry?.date}
        initialDistance={editingEntry?.distance}
      />
      <WorkoutTable entries={entries} onDelete={deleteEntry} onEdit={editEntry} />
    </div>
  );
};

export default WorkoutTracker;