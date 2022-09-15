import { useNavigate } from 'react-router-dom'; // 1

export const Home = () => {
    const navigate = useNavigate() // 2
    const state = {id:1, code:'test'} // 3
    const replace = true
    const goContent = () => { // 4
      navigate("/content")
    };
    const goContent2 = () => { // 5
      navigate("/content", { replace, state })
    };
    
    return (
      <>
        <div>Home</div>
        <input type="button" value="Content" onClick={goContent} />　{/* 6 */} 
        <input type="button" value="Content2" onClick={goContent2} />
      </>
    );
}