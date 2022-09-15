import { useContext} from 'react' 
import { CountContext } from '../providers/CountProvider' // 1

export const Display = () => {
  console.log('Displayレンダリング');
  const { count } = useContext(CountContext);
  return (
    <>
      <div>Display count:{count}</div>
    </>
  );
};