import { CarTypeRepository, CarModelRepository } from './core/repository';

import CarTypeJsonRepository from './repository/car-type-json';
import CarModelJsonRepository from './repository/car-model-json';

export const carTypeRepository: CarTypeRepository = new CarTypeJsonRepository();
export const carModelRepository: CarModelRepository =
  new CarModelJsonRepository();
