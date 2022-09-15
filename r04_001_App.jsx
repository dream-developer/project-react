import { useState, useEffect } from 'react';

export const App = () => { // App start
  console.log('Appレンダリング'); 

  const [count, setCount] = useState(0);
  
  const dataFetch = () => { // 1
    console.log('データをフェッチ')
  };
 
  const logCount = () => { // 2
    console.log(`カウントのログ:${count}`)
  };

  const countUp = () => {  // 3
    setCount(
      prevCount => prevCount + 1
    )
  }

  useEffect(dataFetch, [])  // 4
  useEffect(logCount, [count])  // 5  

  return (
    <>
      <h1>App</h1>
      <p>count:{count}</p>
      <input type="button" value="カウント" onClick={countUp} /> {/* 3 */}
    </>
  );
}; // App end