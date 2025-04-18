import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { ClockData } from './WorldClocksApp';

interface ClockProps extends ClockData {
  onRemove: (id: string) => void;
}

const Clock: React.FC<ClockProps> = ({ id, name, offset, onRemove }) => {
  const [time, setTime] = useState(() => moment.utc().utcOffset(offset * 60).format('HH:mm:ss'));

  useEffect(() => {
    const getTime = () => moment.utc().utcOffset(offset * 60).format('HH:mm:ss');

    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [offset]);

  return (
    <div className="clock">
      <div className="clock-name">{name}</div>
      <div className="clock-time">{time}</div>
      <button className="remove-button" onClick={() => onRemove(id)}>
        ✖
      </button>
    </div>
  );
};

export default Clock;