// src/routes/index.tsx
import { createBrowserRouter } from 'react-router-dom';
import ModelSelection from '../pages/modelselection/ModelSelection.tsx';

export const routes = {
  modelSelection: '/',
  options: '/options',
  done: '/done',
};

export const router = createBrowserRouter([
  {
    path: routes.modelSelection,
    element: <ModelSelection />,
  },
  // ... 다른 라우트
]);
