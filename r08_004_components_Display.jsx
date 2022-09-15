import { useRecoilValue } from 'recoil';
import { countState } from '../atoms/CountAtom'
import { doubleCountState } from '../selectors/DoubleCountSelector' // 1

export const Display = () => {
  console.log('Displayレンダリング');
  const count = useRecoilValue(countState);
  const doubleCount = useRecoilValue(doubleCountState); // 2
  return (
    <>
      <div>Display count:{count} doublecount:{doubleCount}</div> {/* 3 */}
    </>
  );
};