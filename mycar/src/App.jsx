import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SelectModel from './pages/SelectModel';
import SelectOption from './pages/SelectOption';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectModel />} />
        <Route path="/select-option/:carName" element={<SelectOption />} />
      </Routes>
    </Router>
  );
}

export default App;