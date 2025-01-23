import { CarModel } from '../pages/CarBuild/CarBuild.types';
import { Car } from '../pages/Home/Home.types';

export const getCarList = async (selectedTab: string): Promise<Car[]> => {
  const res = await fetch(`/car?type=${selectedTab}`);
  return await res.json();
};

export const getSuccessCarModel = async (): Promise<CarModel> => {
  const res = await fetch(`/car/success`);
  return await res.json();
};
