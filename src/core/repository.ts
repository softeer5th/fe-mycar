import { CarType, CarModel } from './model';

export interface CarTypeRepository {
  getCarTypes(): Promise<CarType[]>;
}

export interface CarModelRepository {
  getCarModels(carTypeCode: CarModel['carTypeCode']): Promise<CarModel[]>;
}
