import { Outlet } from 'react-router-dom'; // 1

export const Content = () => {
  return (
    <>
      <h2>Content</h2>
      <Outlet /> {/* 2 */}
    </>
  );
}