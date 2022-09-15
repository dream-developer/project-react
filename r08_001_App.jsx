import { RecoilRoot } from 'recoil'; // 1
import { CountArea } from './components/CountArea';

export const App = () => {
  console.log('Appレンダリング');
  return (
    <>
      <h1>App</h1>
      <RecoilRoot> {/* 2 */}
        <CountArea />
      </RecoilRoot>
    </>
  );
}