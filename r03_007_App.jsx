import { useState } from 'react';

export const App = () => { // App start
  const originItems = 
    [ // idは一意なものにする
      { id:0, name:'要素１' },
      { id:1, name:'要素２' },
      { id:2, name:'要素３' } ] 

  const [items, setItem] = useState(originItems);

  const deleteItem = () => {
    setItem((prevItems) => {
      const newItems = [...prevItems];
      newItems.splice(0, 1);
      return newItems;
    });
  };

  return (
    <>
      <ul>
      {items.map(item => (
        <li key={item.id}>
          <input type="checkbox" />{item.name}
        </li>
      ))}
      </ul>
      <input type="button" value="削除" onClick={deleteItem} />
    </>
  );
}; // App end