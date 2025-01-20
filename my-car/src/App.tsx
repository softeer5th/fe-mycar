import './App.css'
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom'
import Done from './pages/Done.tsx'
import Option from './pages/Option.tsx'
import ModelSelection from './pages/ModelSelection.tsx'

function App() {


  return (
    <Router>
      <Routes>
      <Route path = {"/"} element = {<ModelSelection/>}></Route>
      <Route path = {"/option"} element = {<Option/>}></Route>
      <Route path = {"/done"} element = {<Done/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
