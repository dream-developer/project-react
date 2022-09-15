import { createContext } from 'react'; // 1
import { useState } from 'react'; // 2

export const CountContext = createContext() // 3 
export const CountProvider = (props) => { // 4
  const { children } = props;  // 5
  const [count, setCount] = useState(0); // 6
  const value = {// 7
    count,
    setCount
  }; 
  return (
    <CountContext.Provider value={value}> {/* 7 */}
      { children } {/* 5 */}
    </CountContext.Provider>
  );
}