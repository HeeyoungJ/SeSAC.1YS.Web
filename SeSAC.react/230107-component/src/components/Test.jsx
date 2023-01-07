import React from 'react'
import TestItem from './TestItem';

export default function Test() {
    // const {item, price } = props;
    // 위 코드 사용하려면 함수괄호 안에 props넣어줘야함.
    const items = [
        {
            item: "PS5",
            price: "685,000원",
        },
        {
            item: "에어 프라이어",
            price: "50,000원",
        },
        {
            item: "사세 치킨윙",
            price: "11,500원",
        },
    ];

  return (
    <div>
        {items.map((el, index)=>{
        return <TestItem item={el.item} price={el.price} key={index} />
    }
    )}
    <hr />
    {items.map((el, index) => {
        return(
            <div key={index}>
                <h1>{el.item}</h1>
                <p>{el.price}</p>
            </div>
        )
    })}
    </div>
  )
}
