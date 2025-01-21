import { CarType } from '../core/model';
import { CarTypeRepository } from '../core/repository';

export default class CarTypeJsonRepository implements CarTypeRepository {
  async getCarTypes(): Promise<CarType[]> {
    const response = await fetch('http://localhost:3000/carTypeList');
    return response.json();
  }
}
