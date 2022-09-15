import { useParams } from 'react-router-dom'; // 1

export const Content = () => {
  const { id, code } = useParams(); // 2
  return (
    <>
      <div>Content</div>
      <p>id:{ id === undefined ? "無し"  : id }</p> {/* 3 */}
      <p>code:{ code === undefined ? "無し"  : code }</p>
    </>
  );
}