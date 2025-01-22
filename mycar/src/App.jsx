import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SelectModel from './pages/SelectModel';
import SelectOption from './pages/SelectOption';

// QueryClient 생성
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path='/' element={<SelectModel />} />
          <Route path='/select-option/:carName' element={<SelectOption />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
