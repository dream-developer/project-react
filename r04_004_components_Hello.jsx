import { memo } from 'react';
export const Hello = memo((props) => { 
  console.log('Helloレンダリング'); 
  return <div>Hello:{props.message}</div>;
});