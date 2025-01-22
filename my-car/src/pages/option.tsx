import { React } from 'react';
import { Header } from '../components/header';
import { useParams } from 'react-router-dom';

export default function Option() {
  const { model } = useParams();

  return (
    <>
      <Header currentCarModel={model} currentStep={1} />
      <></>
    </>
  );
}
