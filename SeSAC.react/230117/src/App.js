import './App.css';
import InlineCss from './components/InlineCss';
import StyledApp from './components/StyledApp';
import TestCss from './components/TestCss';
import TestStyled from './components/TestStyled';
import UseEffectFetch from './components/UseEffectFetch';
import Image from './components/Image';
import FancyBorder from './components/FancyBorder';
import Profile from './components/Profile';
import Board from './components/Board';
import { Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import BoardDetail from './components/BoardDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Board" element={<Board />} />
        <Route path="/board/:boardID" element={<BoardDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <FancyBorder color="orange">
        <TestCss />
      </FancyBorder>
      <Image />
      <UseEffectFetch />
      <InlineCss />
      <TestCss />
      <TestStyled />
      <StyledApp />
    </div>
  );
}

export default App;
