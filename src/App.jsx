import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import FeedbackContextProvider from './context/FeedbackContext';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';



const App = () => {
  return (
      <>
      <Header />
        <FeedbackContextProvider>
          <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/about' element={<AboutPage/>} />
          </Routes>
        </FeedbackContextProvider>
      </>
  );
}

export default App;
