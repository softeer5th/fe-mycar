import { Car, TabValue } from '../pages/Home/Home.types';

export const getCarList = async (selectedTab: TabValue): Promise<Car[]> => {
  const res = await fetch(`/car?type=${selectedTab}`);
  return await res.json();
};
