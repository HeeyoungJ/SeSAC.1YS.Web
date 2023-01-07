import React from 'react'

export default function MainHeader(props) {

    const { text, href, userID } = props;
    //구조분해 할당 중요!!

    // props = {
    //     text: "go naver",
    //     userID: "hiii",
    //     href: "http://naver.com"
    // }

  return (
    <div>
        <h1>{userID}님 반갑습니다!</h1>
        <a href={href}>{text}</a>
    </div>
  )
}
