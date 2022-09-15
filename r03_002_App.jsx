import { Sheet } from './components/Sheet'; // 1

export const App = () => {
  const successStyle = { // 2
    backgroundColor: 'green',
    color: 'white',
    margin: 20
  };
  const errorStyle = { // 2
      backgroundColor: 'red',
      color: 'white',
      margin: 20
    };
  return (
    <>
      <h1>App</h1>
      <Sheet message = "成功しました" sheetStyle = {successStyle} />
      <Sheet message = "失敗しました" sheetStyle = {errorStyle} />
    </>
  );
}