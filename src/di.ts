import {
  CarTypeRepository,
  CarModelRepository,
  CarProductRepository,
} from './core/repository';

import CarTypeJsonRepository from './repository/car-type-json';
import CarModelJsonRepository from './repository/car-model-json';
import CarProductJsonRepository from './repository/car-product-json';

export const carTypeRepository: CarTypeRepository = new CarTypeJsonRepository();
export const carModelRepository: CarModelRepository =
  new CarModelJsonRepository();
export const carProductRepository: CarProductRepository =
  new CarProductJsonRepository();
