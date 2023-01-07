import React from 'react'
import CustomObj from './CustomObj'
import { useState } from 'react';

export default function CallCustomObj() {
    
    const pororoObj = [
        {
        name: '뽀로로',
        age: '5',
        nickName: '사고뭉치'
        },
        {
        name: '루피',
        age: '4',
        nickName: '공주님'
        },
        {
        name: '크롱이',
        age: '5',
        nickName: '장난꾸러기'
        },
];
const [num, setNum] = useState(0);
if(num < 3){

  return (
    <div>
        <CustomObj obj={pororoObj[num]} />
        <button onClick={() => {setNum(num + 1)}}>프로필 변경하기</button>
    </div>
  )
}
else {
    let num = 0;

    return (
        <div>
            <CustomObj obj={pororoObj[num]} />
            <button onClick={() => {setNum(num + 1)}}>프로필 변경하기</button>
        </div>
      )
    }
}
