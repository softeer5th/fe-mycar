// src/routes/index.tsx
import { createBrowserRouter } from 'react-router-dom';
import ModelSelection from '../pages/modelselection/ModelSelection.tsx';
import Done from '../pages/done.tsx';
import Option from '../pages/option.tsx';

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
  {
    path: routes.options,
    element: <Option />,
  },
  {
    path: routes.done,
    element: <Done />,
  },
]);
