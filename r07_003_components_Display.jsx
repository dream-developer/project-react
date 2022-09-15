import { useContext} from 'react'
import { CountContext } from '../App'

export const Display = () => {
  console.log('Displayレンダリング');
  const { count } = useContext(CountContext); // 1
  return (
    <>
      <div>Display count:{count}</div>
    </>
  );
};