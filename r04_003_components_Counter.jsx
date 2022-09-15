export const Counter = (props) => { // 1
  console.log('Counter')
  return (
    <>
      <div>Counter</div>
      <input type="button" value="カウント" onClick={props.countUp} /> {/* 2 */}
    </>
  );
};