import React, { useState } from 'react'

export default function ArrState() {
    const [state, setState] = useState([0]);
    console.log("1:",state);

    return (
    <div>
        {state[0]}
        <br />
        <button onClick={() => {
            state[0] = 1;
            const copyArr = [...state];
            setState(copyArr);
            console.log("copy :",copyArr);
        }}>+1</button>
    </div>
  )
}
//복습?!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!