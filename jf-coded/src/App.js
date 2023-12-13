import './App.css';
import React from 'react';
import {BrowserRouter as Route} from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" element={<Homepage/>} />
      </BrowserRouter>
    </div>

  );
}

export default App;
