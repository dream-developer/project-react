import { useRecoilValue } from 'recoil'; // 1
import { countState } from '../atoms/CountAtom' // 2
export const Display = () => {
  console.log('Displayレンダリング');
  const count = useRecoilValue(countState); // 3
  return (
    <>
      <div>Display count:{count}</div>
    </>
  );
};