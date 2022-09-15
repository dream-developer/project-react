import { Link, NavLink, Outlet } from 'react-router-dom'; // 1

export const Home = () => {
  const css = `
    .active {
      color: red;
    };`;
   return (
    <>
      <style>{css}</style>{/* 2 */}
      <div>Home</div>
      <p>Link</p>{/* 3 */}
      <Link to="content">Content</Link> | 
      <Link to="about">About</Link> 
      <p>NavLink</p>{/* 4 */}
      <NavLink
        style={({ isActive }) => (isActive ? { color: "red" } : undefined)}
        to="content">Content</NavLink> |
      <NavLink
        className={({ isActive }) => (isActive ? "active" : undefined)}
        to="about">About</NavLink>
      <Outlet /> {/* 5 */}
    </>
  );
}