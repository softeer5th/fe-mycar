import { Car } from '../pages/Home/Home.types';

export const getCarList = async (selectedTab: string): Promise<Car[]> => {
  const res = await fetch(`/car?type=${selectedTab}`);
  return await res.json();
};
