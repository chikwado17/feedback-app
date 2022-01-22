import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';



const App = () => {
  return (
      <>
      <Header />
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/about' element={<AboutPage/>} />
        </Routes>
      </>
  );
}

export default App;
