import { useContext} from 'react'
import { CountContext } from '../App'
import { Card } from './Card';

export const CountArea = () => {
  console.log('CountAreaレンダリング');
  const {count, setCount} = useContext(CountContext); // 1
  const countUp = () => { // 2
    setCount(
      prevCount => prevCount + 1
    )
  }
  return (
    <>
      <div>CountArea</div>
      <input type="button" value="カウント" onClick={countUp} /> {/* 2 */}
      <Card/>
    </>
  );
};