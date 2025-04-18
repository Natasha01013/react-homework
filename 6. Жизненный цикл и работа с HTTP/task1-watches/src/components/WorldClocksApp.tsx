import React, { useState } from 'react';
import Clock from './Clock';
import ClockForm from './ClockForm';

export interface ClockData {
  id: string;
  name: string;
  offset: number;
}

const WorldClocksApp: React.FC = () => {
  const [clocks, setClocks] = useState<ClockData[]>([]);

  const addClock = (name: string, offset: number) => {
    const newClock: ClockData = {
      id: Date.now().toString(),
      name,
      offset
    };
    setClocks(prev => [...prev, newClock]);
  };

  const removeClock = (id: string) => {
    setClocks(prev => prev.filter(clock => clock.id !== id));
  };

  return (
    <div className="world-clock-app">
      <h1>Мировые часы</h1>
      <ClockForm onAdd={addClock} />
      <div className="clock-list">
        {clocks.map(clock => (
          <Clock key={clock.id} {...clock} onRemove={removeClock} />
        ))}
      </div>
    </div>
  );
};

export default WorldClocksApp;