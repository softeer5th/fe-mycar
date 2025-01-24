import type { Model } from '../domain/Model';
import type { Vehicle } from '../domain/Vehicle';

export const fetchVehicleData = async (): Promise<Vehicle[]> => {
  const response = await fetch('http://localhost:3001/vehicles');
  const jsonData = await response.json();
  return jsonData;
};

export const fetchModelData = async (vehicleId: number): Promise<Model[]> => {
  const response = await fetch(`http://localhost:3001/models?vehicleId=${vehicleId}`);
  const jsonData = await response.json();
  return jsonData;
};