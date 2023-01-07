import React from 'react'
import Test from './Test'

export default function TestItem({item, price, index}) {
  return (
    <div key={index}>
        <h1>{item}</h1>
        <p>{price}</p>
    </div>
  )
}