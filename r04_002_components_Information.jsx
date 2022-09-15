import { useState } from 'react'; // 1

export const Information = () => {
  console.log('Information')
  const [info, setInfo] = useState(''); // 2
  const inputInfo = (e) => { // 3
    setInfo(
      () => e.target.value
    )
  }
  return (
    <>
      <div>Informaton</div>
      <p>info:{info}</p>
      <input type="text" onInput={inputInfo} />
    </>
  );
};