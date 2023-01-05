// import { useState } from 'react';

// function Ex1() {
//   const [num, setnum] = useState(1);

//   return <div>문제풀기

//     <button onClick={() => setnum(num - 1)}>-</button>
//     <button onClick={() => setnum(num + 1)}>+</button>
//     <span>{num}</span>
//   </div>;
// }

// export default Ex1;

import React, { useState } from 'react';

export default function Ex1() {
  const [count, setCount] = useState(0);

  return <div>
    {count}
    <br />
    <button onClick={() => setCount(count - 1)}>-</button>
    <button onClick={() => setCount(count + 1)}>+</button>
  </div>;
}