import { useState } from 'react';

export const App = () => {
  console.log('Appレンダリング')
  const originFruits =  ['リンゴ', 'ミカン', 'バナナ']
  const [fruits, setFruits] = useState(originFruits);

  const addFruit = () => {
    setFruits((prevFruits) => {
      const newFruits = [...prevFruits]; // 1
      newFruits.push('イチゴ'); // 2
      return newFruits; // 3
    });
    console.log(fruits) // 4
  };

  return (
    <>
      <ul>
      {fruits.map(fruit => (
        <li>{fruit}</li>
      ))}
      </ul>
      <input type="button" value="追加" onClick={addFruit} />
    </>
  );
};