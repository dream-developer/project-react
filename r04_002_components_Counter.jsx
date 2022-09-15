import { useState } from 'react'; // 1

export const Counter = () => {
  console.log('Counter')
  const [count, setCount] = useState(0); // 2
  const countUp = () => { // 3
    setCount(
      prevCount => prevCount + 1
    )
  }
  return (
    <>
      <div>Counter</div>
      <p>count:{count}</p>
      <input type="button" value="カウント" onClick={countUp} />
    </>
  );
};