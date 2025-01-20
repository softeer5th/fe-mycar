import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import CompletionPage from './pages/CompletionPage';
import ModelSelectionPage from './pages/ModelSelectionPage';
import OptionSelectionPage from './pages/OptionSelectionPage';
import VehicleSelectionPage from './pages/VehicleSelectionPage';
import { ThemeProvider } from 'styled-components';
import {theme} from './theme';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="vehicle-selection" element={<VehicleSelectionPage />} />
          <Route path="model-selection" element={<ModelSelectionPage />} />
          <Route path="option-selection" element={<OptionSelectionPage />} />
          <Route path="completion" element={<CompletionPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
