import { Counter } from './Counter';

export const Sheet = (props) => { // 1
  console.log('Sheet')
  return (
    <>
      <div>Sheet</div>
      <Counter countUp={props.countUp} /> {/* 2 */}
    </>
  );
};