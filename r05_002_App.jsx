import React, { useState, Suspense } from 'react'; // 1
const Photo = React.lazy(() => import('./components/Photo')); // 2

export const App = () => {
  console.log('Appレンダリング');
  const [photoFlag, setPhotoFlag] = useState(false); // 3
  const chgPhoto = () => { // 4
    setPhotoFlag(
      prevPhotoFlag => !prevPhotoFlag
    )
  }
  return (
    <>
      <h1>App</h1>
      <input type="checkbox" onChange={chgPhoto} /> {/* 4 */}
      <Suspense> {/* 5 */}
        { photoFlag ? <Photo/> : <div></div>}
      </Suspense>
    </>
  );
};