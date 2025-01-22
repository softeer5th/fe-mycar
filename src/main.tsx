import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle.tsx';
import theme from './styles/theme.ts';
import Router from './router/index.tsx';

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
        <Router />
      </ThemeProvider>
    </StrictMode>,
  );
});
