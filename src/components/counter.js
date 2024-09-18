import React, { useState } from 'react';

function Counter() { // Fonksiyon ismini büyük harfle değiştirin
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>NUMBER : <strong><i>{count}</i></strong></p>
      <button onClick={() =>( setCount(count + 1))}>Increment</button>
      <button type='reset'onClick={() =>(setCount(0))} >Resetle</button>
    </div>
  );
}

export default Counter;
