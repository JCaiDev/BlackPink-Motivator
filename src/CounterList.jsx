import { useState } from 'react';

let initialCounters = [
  0, 0, 0
];

export default function CounterList() {
  const [counters, setCounters] = useState(
    initialCounters
  );

  function handleIncrementClick(index) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        // Increment the clicked counter
        return c + 1;
      } else {
        // The rest haven't changed
        return c;
      }
    });
    setCounters(nextCounters);
  }

  function handleDecreaseClick(index) {
    const nextCounters = counters.map((c, i) =>{
      return i === index ? c-1 : c
    })
    setCounters(nextCounters)
  }


  return (
    <ul>
      {counters.map((counter, i) => (
        <li key={i}>
          <button onClick={() => {
            handleIncrementClick(i);
            }}>+1
          </button>

          <button onClick={() => {
            handleDecreaseClick(i);
            }}>-1
          </button>
          {' '}{counter}
        </li>
      ))}
    </ul>
  );
}