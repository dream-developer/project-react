import React, { Suspense } from 'react'; // 1

const mySleep = () => {return new Promise(resolve => setTimeout(resolve, 3000))}; // 2
const Photo = React.lazy(() => mySleep().then(() => import('./components/Photo'))); // 3
export const App = () => {
  console.log('Appレンダリング');
  return (
    <>
      <h1>App</h1>
      <Suspense fallback={<p>Loading...</p>}> {/* 4 */}
        <Photo />
      </Suspense>
    </>
  );
};