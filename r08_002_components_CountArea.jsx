import { useRecoilState } from 'recoil'; // 1
import { countState } from '../atoms/CountAtom' // 2
import { Card } from './Card';
export const CountArea = () => {
  console.log('CountAreaレンダリング');
  const [count, setCount] = useRecoilState(countState); // 3
  const countUp = () => { // 4
    setCount(
      prevCount => prevCount + 1
    )
  }
  return (
    <>
      <div>CountArea</div>
      <input type="button" value="カウント" onClick={countUp} />{/* 4 */}
      <Card/>
    </>
  );
};