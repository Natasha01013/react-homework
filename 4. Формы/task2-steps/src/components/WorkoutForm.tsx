import React, { useState } from "react";

interface WorkoutFormProps {
  onAddOrUpdate: (date: string, distance: number, originalDate?: string) => void;
  initialDate?: string;
  initialDistance?: number;
}

//Форма для ввода данных
const WorkoutForm: React.FC<WorkoutFormProps> = ({onAddOrUpdate, initialDate = "", initialDistance = '' }) => {
  const [date, setDate] = useState(initialDate);
  const [distance, setDistance] = useState(initialDistance.toString());

  const handleSubmit = () => {
    if (!date || !distance) return;
    onAddOrUpdate(date, parseFloat(distance), initialDate);
    setDate("");
    setDistance("");
  };

  return (
    <div className='dataEntry'>
      <div className='date'>
        <label className='label-date' htmlFor="date">Дата (ДД.ММ.ГГ)</label>
        <input className='input-date' id="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>

      <div className='distance'>
        <label className='label-distance' htmlFor="distance">Пройдено км</label>
        <input className='input-distance' id="distance" type="number" value={distance} onChange={(e) => setDistance(e.target.value)} placeholder="Км" />
      </div>

      <button className='button' onClick={handleSubmit}>OK</button>
    </div>
  );
};

export default WorkoutForm;