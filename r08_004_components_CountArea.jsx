import { useSetRecoilState } from 'recoil';
import { countState } from '../atoms/CountAtom'
import { Card } from './Card';
import { DoubleCount } from './DoubleCount'; // 1
export const CountArea = () => {
  console.log('CountAreaレンダリング');
  const setCount = useSetRecoilState(countState); 
  const countUp = () => {
    setCount(
      prevCount => prevCount + 1
    )
  }
  return (
    <>
      <div>CountArea</div>
      <input type="button" value="カウント" onClick={countUp} />
      <DoubleCount/> {/* 2 */}
      <Card/>
    </>
  );
};