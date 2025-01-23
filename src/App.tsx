import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/main'
import Model from './pages/model'
import Result from './pages/result'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/model/:car' element={<Model />} />
      <Route path='/result' element={<Result />} />
    </Routes>
  )
}

export default App
