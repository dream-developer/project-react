import { CountProvider } from './providers/CountProvider'; // 1
import { CountArea } from './components/CountArea';

export const App = () => {
  console.log('Appレンダリング');
  return (
    <>
      <h1>App</h1>
      <CountProvider> {/* 1 */}
        <CountArea />
      </CountProvider>
    </>
  );
}