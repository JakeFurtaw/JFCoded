
import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import VirtualResume from './pages/Resume';
import ContactMe from './pages/ContactMe';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/resume' element={<VirtualResume/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<ContactMe/>} />
          {/* <Route path='/setup' element={<Setup/>} /> */}
          <Route path='/*' element={<h1>404 Error. This page doesnt exist!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
