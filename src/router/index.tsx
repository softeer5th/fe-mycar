import { BrowserRouter, Route, Routes } from 'react-router';
import Home from '../pages/Home';
import CarBuild from '../pages/CarBuild';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car-build/:id" element={<CarBuild />} />
        <Route path="/car-build/:id/:modelId" element={<CarBuild />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
