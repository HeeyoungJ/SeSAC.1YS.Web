// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import ClassState from './components/ClassState';
import Condition from './components/Condition';
import Ex1 from './components/Ex1';
import Ex2 from './components/Ex2';
import StateAndVariable from './components/StateAndVariable';
import ArrayState from './components/ArrayState';
import ObjState from './components/ObjState';

function App() {
  let [teacher, setTeacher] = useState('뽀로로');

  function customSetTeacher(name) {
    setTeacher(name);
    console.log(teacher);
  }

  // function inEnglish() {
  //   const spanEl = document.querySelector('.App > span');
  //   spanEl.innerHTML = 'tetz';
  //   teacher = 'tetz';
  //   console.log(teacher);
  // }

  return (
    <div className="App">
      {/* <button onClick={() => customSetTeacher('PORORO')}>영어로!</button>
      <br />
      <span>{teacher}</span> */}

      {/* <Ex1 /> */}
      {/* <Condition /> */}
      <Ex2 />
      <br />
      <ClassState />
      <br />
      <StateAndVariable />
      <br />
      <ArrayState />
      <br />
      <ObjState />
    </div>

  );
}

export default App;
