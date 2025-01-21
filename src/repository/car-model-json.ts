import { CarModel } from '../core/model';
import { CarModelRepository } from '../core/repository';

export default class CarModelJsonRepository implements CarModelRepository {
  async getCarModels(
    carTypeCode: CarModel['carTypeCode'],
  ): Promise<CarModel[]> {
    const response = await fetch(
      `http://localhost:3000/carModel?carTypeCode=${carTypeCode}`,
    );
    return response.json();
  }
}
