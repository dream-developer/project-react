import { Card } from './Card'; // 1
export const CountArea = () => {
  console.log('CountAreaレンダリング'); // 2
  return (
    <>
      <div>CountArea</div> {/* 1 */}
      <Card/>
    </>
  );
};