import { Link } from 'react-router-dom';

export const Home = () => {
    return (
      <>
        <div>Home</div>
        <Link to="content">Content</Link>
      </>
    );
}