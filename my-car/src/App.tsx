import { useState } from "react";
import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/model" />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
