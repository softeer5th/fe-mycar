import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home/index.tsx';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle.tsx';
import theme from './styles/theme.ts';
import { BrowserRouter, Routes, Route } from 'react-router';

const enableMocking = async () => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { worker } = await import('./mocks/browser');

  return await worker.start();
};

enableMocking().then(() => {
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
});
