import { Link } from 'react-router-dom';

export const ContentIndex = () => {
  return (
    <>
      <h3>ContentIndex</h3>
      <p>パターン1</p>
      <Link to="article">article</Link> ｜
      <Link to="notice">notice</Link>
      <p>パターン2</p>
      <Link to="content/article">content/article</Link> ｜
      <Link to="content/notice">content/notice</Link>
      <p>パターン3</p>
      <Link to="/content/article">/content/article</Link> ｜
      <Link to="/content/notice">/content/notice</Link>
    </>
  );
}