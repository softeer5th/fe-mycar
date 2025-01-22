import { CarType } from '../core/model';
import { CarTypeRepository } from '../core/repository';

type CarTypeJson = {
  carTypeCode: string;
  carTypeName: string;
};

export default class CarTypeJsonRepository implements CarTypeRepository {
  async getCarTypes(): Promise<CarType[]> {
    const response = await fetch('http://localhost:3000/carTypeList');
    const carTypes = await response.json();

    return carTypes.map((carType: CarTypeJson) => ({
      carTypeCode: carType.carTypeCode,
      carTypeName: carType.carTypeName,
    }));
  }
}
