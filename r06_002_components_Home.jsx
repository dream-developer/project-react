import { Link } from 'react-router-dom'; // 1

export const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link to="/content">Content</Link> | 
      <Link to="/about">About</Link> {/* 2 */}
    </>
  );
}