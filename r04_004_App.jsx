import { useState } from 'react';
import { Hello } from './components/Hello';

export const App = () => { // App start
  console.log('Appレンダリング')
  const [count, setCount] = useState(0); // 1
  const [message, setMessage] = useState(''); // 2
  const countUp = () => { // 1
    setCount(
      prevCount => prevCount + 1
    )
  }
  const inputMessage = (e) => { //  2
    setMessage(
      () => e.target.value
    )
  }

  return (
    <>
      <h1>App</h1>
      <p>count:{count}</p>
      <input type="button" value="カウント" onClick={countUp} /> {/* 1 */}
      <p>入力してください</p>
      <input type="text" onInput={inputMessage} />
      <Hello message={message} /> {/* 2 */}
    </>
  );
}; // App end