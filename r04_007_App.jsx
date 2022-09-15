import { useState, useRef } from 'react'; // 1

export const App = () => { // App start
  console.log('Appレンダリング');
  const [count, setCount] = useState(0); 
  const countRef = useRef(0); // 2

  const countUp = () => {
    setCount(
      prevCount => prevCount + 1
    )
  }

  const countRefUp = () => { // 3
    countRef.current++;
  }

  const logCountRef = () => { // 4
     console.log(countRef.current)
  }

  return (
    <>
      <h1>App</h1>
      <p>count:{count}</p>
      <input type="button" value="カウント" onClick={countUp} /> 
      <p>countRef:{countRef.current}</p>{/* 2 */}
      <input type="button" value="カウントRef" onClick={countRefUp} />{/* 3 */}
      <input type="button" value="カウントRefのログ" onClick={logCountRef} />{/* 4 */}
    </>
  );
}; // App end