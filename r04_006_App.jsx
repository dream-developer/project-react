import { useState, useMemo } from 'react'; // 1

export const App = () => {
  const [count, setCount] = useState(0);
  const countUp = () => { 
    setCount(
      prevCount => prevCount + 1
    )
  }

  const memoValue = useMemo( () => { // 2
    return '計算処理の結果' + Date.now();
  }, []) // 依存配列

  return (
    <>
      <h1>App</h1>
      <p>count:{count}</p>
      <input type="button" value="カウント" onClick={countUp} />
      <p>計算処理:{memoValue}</p> {/* 2 */}
     </>
  );
};