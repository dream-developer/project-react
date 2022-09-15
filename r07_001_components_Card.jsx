import { Display } from './Display'; // 1
export const Card = () => {
  console.log('Cardレンダリング') // 2
  return (
    <>
      <div>Card</div>
      <Display/> {/* 1 */}
    </>
  );
};