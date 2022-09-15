import { Outlet } from 'react-router-dom';

export const Content = () => {
  return (
    <>
      <h2>Content</h2>
      <Outlet />
    </>
  );
}