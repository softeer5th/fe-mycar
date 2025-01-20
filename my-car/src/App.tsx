import { useState } from 'react';

import './App.css';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom';
import Hi from '../src/pages/hi.tsx';
import Done from './pages/done.tsx';
import Option from './pages/option.tsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Hi />}></Route>
        <Route path={'/option'} element={<Option />}></Route>
        <Route path={'/done'} element={<Done />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
