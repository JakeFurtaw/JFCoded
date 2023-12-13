import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Homepage} />
    </BrowserRouter>
  );
}

export default App;
