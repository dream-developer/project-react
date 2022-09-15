import { useContext } from 'react' // １
import { CountContext } from '../App' // 2

export const Display = () => {
  console.log('Displayレンダリング');
  const count = useContext(CountContext); // 3
  return (
    <>
      <div>Display count:{count}</div> {/* 4 */}
    </>
  );
};