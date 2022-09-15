import { useState, useCallback } from 'react'; // 1
import { Hello } from './components/Hello';

export const App = () => {
  console.log('Appレンダリング');  

  const [count, setCount] = useState(0);

  const countUp = () => { 
    setCount(
      prevCount => prevCount + 1
    )
  }
  const logHello = useCallback( () => { // 2
    console.log('Helloのログ');
  }, [] )
  
  return (
    <>
      <h1>App</h1>
      <p>count:{count}</p>
      <input type="button" value="カウント" onClick={countUp} />
      <Hello logHello={logHello} />
    </>
  );
};