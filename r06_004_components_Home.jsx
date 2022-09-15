import { Link, createSearchParams } from 'react-router-dom';

export const Home = () => {
  const params = createSearchParams({
    kind: "popular",
    sortby: "asc"
  }).toString();
  return (
    <>
      <div>Home</div>
      <Link to={`/content?${params}`}>Content</Link>
    </>
  );
}