import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom'
import Hi from '../src/pages/hi.tsx'
function App() {


  return (
    <Router>
      <Routes>
      <Route path = {"/"} element = {<Hi/>}></Route>
      </Routes>
      
    </Router>
  )
}

export default App
