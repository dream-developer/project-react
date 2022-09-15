import { Sheet } from './components/Sheet';

export const App = () => {
  const successStyle = {
    backgroundColor: 'green',
    color: 'white',
    margin: 20
  };
  const errorStyle = {
      backgroundColor: 'red',
      color: 'white',
      margin: 20
    };
  return (
    <>
      <h1>App</h1>
      <Sheet sheetStyle = {successStyle}>成功しました</Sheet>
      <Sheet sheetStyle = {errorStyle}>失敗しました</Sheet>
    </>
  );
};