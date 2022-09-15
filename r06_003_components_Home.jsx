import { Link } from 'react-router-dom'; // 1

export const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link to="/content">content</Link> ｜
      <Link to="/content/1">content/1</Link> ｜
      <Link to="/content/2/test">content/2/test</Link>
    </>
  );
}