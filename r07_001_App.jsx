import { CountArea } from './components/CountArea'; // 1

export const App = () => {
  console.log('Appレンダリング'); // 2
  return (
    <>
      <h1>App</h1>
      <CountArea />
    </>
  );
};