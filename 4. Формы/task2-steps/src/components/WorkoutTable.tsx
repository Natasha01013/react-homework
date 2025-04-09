import React from "react";

interface Entry {
  date: string;
  distance: number;
}

interface WorkoutTableProps {
  entries: Entry[];
  onDelete: (date: string) => void;
  onEdit: (date: string, distance: number) => void;
}

//таблица с данными после ввода
const WorkoutTable: React.FC<WorkoutTableProps> = ({ entries, onDelete, onEdit }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th className='table-header'>Дата (ДД.ММ.ГГ)</th>
          <th className='table-header'>Пройдено км</th>
          <th className='table-header'>Действия</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry) => (
          <tr key={entry.date}>
            <td className='table-row'>{entry.date}</td>
            <td className='table-row'>{entry.distance}</td>
            <td className='table-row'>
              <button onClick={() => onEdit(entry.date, entry.distance)}>✎</button>
              <button onClick={() => onDelete(entry.date)} className='button'>✘</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WorkoutTable;