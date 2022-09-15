import { useState } from 'react'; // 1
import { Sheet } from './components/Sheet';

export const App = () => {
  const lightStyle = { backgroundColor: 'lightgray' };
  const darkStyle = { backgroundColor: 'darkgray'};
  const [darkFlag, setDarkFlag] = useState(false); // 2
  
  const chgDark = () => {
    setDarkFlag(  // 3
      prevDarkFlag => !prevDarkFlag
    )
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