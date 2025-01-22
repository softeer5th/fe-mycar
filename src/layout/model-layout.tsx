import { Outlet } from 'react-router';
import StageHeader from '../components/header/stage-header';

const ModelLayout = () => {
  return (
    <>
      <StageHeader />
      <Outlet />
    </>
  );
};

export default ModelLayout;
