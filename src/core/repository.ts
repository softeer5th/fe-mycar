import { CarType, Product } from './model';

export interface CarTypeRepository {
  getCarTypes(): Promise<CarType[]>;
}

export interface ProductRepository {
  getProducts(): Promise<Product[]>;
  getProduct(carTypeCode: string): Promise<Product[]>;
}
