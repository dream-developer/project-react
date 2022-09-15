import { useNavigate, useLocation } from 'react-router-dom'; // 1

export const Content = () => {
  const navigate = useNavigate() // 2
  const location = useLocation() // 3
  console.log(location) // 4
  console.log(location.state) // 5
  return (
    <>
      <div>Content</div>
      <input type="button" value="navigate(-1)" onClick={()=>{navigate(-1)}} />{/* 6 */}
    </>
  );
}