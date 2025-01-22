import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/home';
import MakeMyCar from './pages/make-my-car';
import SelectCarModel from './pages/select-car-model';
import EstimateMyCar from './pages/estimate-my-car';
import ModelLayout from './layout/model-layout';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Routes>
      <Route path="model/:carCode">
        <Route element={<ModelLayout />}>
          <Route index element={<SelectCarModel />} />
          <Route path="making" element={<MakeMyCar />} />
        </Route>
        <Route path="estimate" element={<EstimateMyCar />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
