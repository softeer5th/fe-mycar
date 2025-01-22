import { CarType, CarModel, CarProduct } from './model';

export interface CarTypeRepository {
  getCarTypes(): Promise<CarType[]>;
}

export interface CarModelRepository {
  getCarModels(carTypeCode: CarModel['carTypeCode']): Promise<CarModel[]>;
}

export interface CarProductRepository {
  getCarProducts(carCode: CarModel['carCode']): Promise<CarProduct[]>;
}
