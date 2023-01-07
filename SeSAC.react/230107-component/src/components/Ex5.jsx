import React from 'react'
import ChangeObj from './ChangeObj'


export default function Ex5() {
    const pororoObjArr = [
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
        age: '6',
        nickName: '장난꾸러기'
        },
        {
        name: '스펀지밥',
        age: '13',
        nickName: '뚱이친구'
        },
    ]

  return (
    <div>
        <ChangeObj objArr={pororoObjArr} />
    </div>
  )
}
