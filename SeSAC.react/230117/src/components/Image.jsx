import React from 'react';
import dogImg from '../images/dog.jpg';

export default function Image() {
  return (
    <>
    <img src="/images/dog.jpg" alt="강아지" />
    <img src={dogImg} alt="강아지" />
    </>
  );
}
