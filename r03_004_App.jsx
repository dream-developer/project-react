import { Sheet } from './components/Sheet';

export const App = () => {
  // CSS定義オブジェクト
  const lightStyle = { backgroundColor: 'lightgray' };
  const darkStyle = { backgroundColor: 'darkgray'};
  let darkFlag = false; // 1
  const chgDark = (e) => { // 2
    darkFlag = e.target.checked ? true : false
    console.log(darkFlag)
  }
  return (
    <>
      <h1>App</h1>
      <input type="checkbox" onChange={chgDark} />
      <Sheet sheetStyle = {darkFlag?darkStyle:lightStyle}>
        Sheet
      </Sheet>
    </>
  );
};