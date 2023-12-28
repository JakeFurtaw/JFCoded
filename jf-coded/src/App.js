
import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Employer from './pages/Employer';
import Projects from '../src/components/Projects';
import AboutMe from '../src/pages/AboutMe';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Employer' element={<Employer/>} />
          <Route path='/Projects' element={<Projects/>} />
          <Route path='/About' element={<AboutMe/>} />
          <Route path='/*' element={<h1>Under Construction. Come Back Soon!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
