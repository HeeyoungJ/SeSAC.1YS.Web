import React, { useState } from 'react'

export default function ObjState() {
    const [state, setState] = useState({ teacher : "정희영"});
    console.log(state);

    // const { teacher } = state;
    //구조분해 할당 사용하고 싶을 경우
    //span태그안에 teacher만 사용가능

  return (
    <div>
        <button onClick={() => {
            state.teacher = 'tetz';
            const copyObj = {...state};
            setState(copyObj);
            console.log(state);
        }}
        >
            영어로!
            </button>
        <br />
        <span>{state.teacher}</span>
    </div>
  )
}
