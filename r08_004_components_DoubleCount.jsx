import { useSetRecoilState } from 'recoil';
import { doubleCountState } from '../selectors/DoubleCountSelector' // 1

export const DoubleCount = () => {
  console.log('DoubleCountレンダリング');
  const setDoubleCount = useSetRecoilState(doubleCountState); // 2
  const doubleCountUp = () => { // 3
    setDoubleCount( // 4
      prevDoubleCount => prevDoubleCount
    )
  }
  return (
    <>
      <div>CountArea</div>
      <input type="button" value="ダブルカウント" onClick={doubleCountUp} />{/* 3 */}      
    </>
  );
};