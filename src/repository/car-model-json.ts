import { CarModel } from '../core/model';
import { CarModelRepository } from '../core/repository';

type CarModelJson = {
  carTypeCode: string;
  carCode: string;
  carName: string;
  carPrice: string;
  carImgPath: string;
};

export default class CarModelJsonRepository implements CarModelRepository {
  async getCarModels(
    carTypeCode: CarModel['carTypeCode'],
  ): Promise<CarModel[]> {
    const response = await fetch(
      `http://localhost:3000/carModel?carTypeCode=${carTypeCode}`,
    );
    const carModels = await response.json();

    return carModels.map((carModel: CarModelJson) => ({
      carTypeCode: carModel.carTypeCode,
      carCode: carModel.carCode,
      carName: carModel.carName,
      carPrice: Number(carModel.carPrice),
      carImgPath: carModel.carImgPath,
    }));
  }
}
