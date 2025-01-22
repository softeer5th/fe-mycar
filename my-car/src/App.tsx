import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CarModelTrim from "./pages/CarModelTrim/CarModelTrim.tsx";

function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/model" element={<CarModelTrim />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
