import React from 'react';
import { useState } from 'react';

export default function Ex2() {
  const [count, setCount] = useState(0);

  return (
    <div>
    {/* <button onClick={() => setCount(count - 1)}>-</button>
    <button onClick={() => setCount(count + 1)}>+</button> */}
    <br />
    <span onClick={() => setCount(count + 1)}>{ count > 10 ? '👍' : '😭'}</span>
    {count}
    </div>
  );
}