import logo from './logo.svg';
import './App.css';
import BtnToNaver from './components/BtnToNaver';
import ImgComponent from './components/MainHeader';

// function App() {
//   const str = 'Hello, react world';

//   function amazingJSX() {
//     return 'amazingJSX';
//   }

//   const test = 'test';

//   return <div className="App">{str}</div>;
// }

// function App() {
//   return (
//     <div className="App">
//       <span
//         onClick={() => {
//           let num = 10;
//           num += 5;
//           console.log(num);
//         }}
//       >
//         클릭
//       </span>
//     </div>
//   );
// }

// export default App;

// function App() {
//   function printConsole() {
//     console.log('콘솔 출력');
//   }

//   return (
//     <div className="App">
//       <span
//         onClick={
//           () => {
//             let num = 10;
//             console.log(num);
//           }
//           // 자바스크립트 형식으로 쓸 때는 화살표 함수 꼭 필요
//         }
//       >
//         클릭
//       </span>
//     </div>
//   );
// }

// export default App;

// =============================실습=========================================
// function App() {
//   const helloStr = 'Hello, first exercise';
//   return (
//     <div className="App">
//       <div
//         style={{ marginTop: '32px', backgroundColor: 'skyblue' }}
//         onClick={() => {
//           alert('클릭됨');
//         }}
//       >
//         {helloStr}
//       </div>
//     </div>
//   );
// }

// export default App;

// =============================답=========================================

// function App() {
//   const helloStr = 'Hello, first exercise';
//   const inlineStyle = { marginTop: '32px', backgroundColor: 'skyblue' };

//   return (
//     <div className="App">
//       <div
//         style={inlineStyle}
//         onClick={() => {
//           alert('클릭됨');
//         }}
//       >
//         {helloStr}
//       </div>
//     </div>
//   );
// }

// export default App;

// =============================component============================================================

// function App() {
//   // 컴포넌트는 PascalCae 사용
//   return (
//     <div className="App">
//       <ImgComponent />
//       <BtnToNaver />
//     </div>
//   );
// }

// export default App;
