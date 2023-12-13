
import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Employer from './pages/Employer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Employer.jsx' name='Employer' element={<Employer/>} />
          <Route path='/*' element={<h1>404 Error. Page not found....</h1>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
