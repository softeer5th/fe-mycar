import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/home';
import MakeMyCar from './pages/make-my-car';
import SelectCarModel from './pages/select-car-model';
import EstimateMyCar from './pages/estimate-my-car';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Routes>
      <Route path="model">
        <Route path=":id" element={<SelectCarModel />} />
        <Route path="making" element={<MakeMyCar />} />
        <Route path="estimate" element={<EstimateMyCar />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
