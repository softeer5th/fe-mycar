import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home/index.tsx';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle.tsx';
import theme from './styles/theme.ts';
import { BrowserRouter, Routes, Route } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
