import { useSetRecoilState } from 'recoil'; // 1
import { countState } from '../atoms/CountAtom' // 2
import { Card } from './Card';
export const CountArea = () => {
  console.log('CountAreaレンダリング');
  const setCount = useSetRecoilState(countState); // 3
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