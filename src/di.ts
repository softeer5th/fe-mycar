import { CarTypeRepository } from './core/repository';

import { CarTypeJsonRepository } from './repository/car-type-json';

export const carTypeRepository: CarTypeRepository = new CarTypeJsonRepository();
