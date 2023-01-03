import App from "../App"
import logo from '../logo.svg';
import React, {Component} from 'react';

//클래스형

// class MainHeader extends Component {
// render() {
//     return (
//         <h1>Hello, Class component world!</h1>
//     )
// }
// }

// export default MainHeader;

//함수형

// function MainHeader() {
//     return (
//         <h1>Hello, Component world!</h1>
//     )
// }

// export default MainHeader;

//함수형 실습

function ImgComponent() {
    return (
        <img src={logo} alt="logo"/>
        //public 등 다른 곳의 이미지를 불러오려면 /파일명 으로 불러오면 됨.
    )
}

export default ImgComponent;