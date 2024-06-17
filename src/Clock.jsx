import React, { useState, useEffect } from 'react';


export default function Clock() {
  const [time, setTime] = useState(new Date());
  const hours = time.getHours();
  const className = hours > 21 || hours <= 6 ? 'night' : 'day';

  function formateDate(date) {
    return date.toLocaleDateString('en-US', { weekday: 'long' });
  }

  // updates the time every second
  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <h1 id="time" className={className}>
      Today is {formateDate(time)}, {time.toLocaleTimeString()}
    </h1>
  );
}