import { memo } from 'react'; 
export const Hello = memo((props) => {// 1
  console.log('Helloレンダリング'); 
  return (
    <>
      <div>Hello</div>
      <input type="button" value="ハロー" onClick={props.logHello} /> {/* 2 */}
    </>
  );
});