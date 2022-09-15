import { createContext } from 'react'; // 1
import { CountArea } from './components/CountArea';

export const CountContext = createContext() // 2

export const App = () => {
  console.log('Appレンダリング');
  const value = 0; // 3
  return (
    <>
      <h1>App</h1>
      <CountContext.Provider value={value}> {/* 4 */}
        <CountArea />
      </CountContext.Provider>
    </>
  );
}