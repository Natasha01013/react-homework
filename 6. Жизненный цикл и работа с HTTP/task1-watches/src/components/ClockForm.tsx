import React, { useState } from 'react';

interface ClockFormProps {
  onAdd: (name: string, offset: number) => void;
}

const ClockForm: React.FC<ClockFormProps> = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [offset, setOffset] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd(name, offset);
    setName('');
    setOffset(0);
  };

  return (
    <form onSubmit={handleSubmit} className="clock-form">
      <input
        type="text"
        placeholder="Название города"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="GMT"
        value={offset}
        onChange={e => setOffset(parseInt(e.target.value))}
        required
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default ClockForm;