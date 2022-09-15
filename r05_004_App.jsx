import { useState } from 'react';
import { useTransition } from 'react'; // 1

import { NowData } from './components/NowData';
import { NowCount } from './components/NowCount';

export const App = () => { // App start
  const [now, setNow] = useState('');
  const [count, setCount] = useState(0);
  const [isPending, startTransition] = useTransition(); // 2

  const doData = () => {
    setCount(
       prevCount => prevCount + 1
    )
    startTransition(() => {  // 3
      setNow(() => {
        const nowDate = new Date();
        while (new Date() - nowDate < 10000) {}
        return nowDate.toLocaleString();
      })  
    })
  };

  return (
    <>
      <h1>App</h1>
      <NowData now={now} isPending={isPending} /> {/* 4 */}
      <NowCount count={count}/>
      <input type="button" value="取得" onClick={doData} />
    </>
  );
}; // App end