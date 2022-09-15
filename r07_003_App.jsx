import { createContext } from 'react';
import { useState } from 'react'; // 1
import { CountArea } from './components/CountArea';

export const CountContext = createContext()

export const App = () => {
  console.log('Appレンダリング');
  const [count, setCount] = useState(0); // 2 
  const value = { // 3
    count,
    setCount
  }; 
  return (
    <>
      <h1>App</h1>
      <CountContext.Provider value={value}>
        <CountArea />
      </CountContext.Provider>
    </>
  );
}