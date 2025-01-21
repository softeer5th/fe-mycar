import { Vehicle } from '../domain/Vehicle';

export const fetchVehicleData = async(): Promise<Vehicle[]> => {
  const response = await fetch('http://localhost:3001/vehicles');
  const jsonData = await response.json();
  return jsonData;
}