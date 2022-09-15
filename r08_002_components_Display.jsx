import { useRecoilState } from 'recoil'; // 1
import { countState } from '../atoms/CountAtom' // 2
export const Display = () => {
  console.log('Displayレンダリング');
  const [ count ] = useRecoilState(countState); // 3
  return (
    <>
      <div>Display count:{count}</div> {/* 4 */}
    </>
  );
};