import { useState } from 'react'; // 1
import { Information } from './components/Information';
import { Sheet } from './components/Sheet';

export const App = () => { // App start
  console.log('App')
  const [info, setInfo] = useState('');  // 2
  const [count, setCount] = useState(0);
  const inputInfo = (e) => { // 3
    setInfo(
      () => e.target.value
    )
  }
  const countUp = () => {
    setCount(
      prevCount => prevCount + 1
    )
  }
  return (
    <>
      <h1>App</h1>
      <p>info:{info}</p>
      <p>count:{count}</p> {/* 4 */}
      <Information inputInfo={inputInfo} /> {/* 5 */}
      <Sheet countUp={countUp} />
    </>
  );
}; // App end