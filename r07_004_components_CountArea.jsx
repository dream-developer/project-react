import { useContext} from 'react' 
import { CountContext } from '../providers/CountProvider' // 1
import { Card } from './Card';

export const CountArea = () => {
  console.log('CountAreaレンダリング');
  const {count, setCount} = useContext(CountContext); 
  const countUp = () => { 
    setCount(
      prevCount => prevCount + 1
    )
  }
  return (
    <>
      <div>CountArea</div>
      <input type="button" value="カウント" onClick={countUp} />
      <Card/>
    </>
  );
};