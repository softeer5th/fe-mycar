import { CarModel, CarProduct } from '../core/model';
import { CarProductRepository } from '../core/repository';

type CarProductJson = {
  saleModelCode: string;
  carModelPrice: string;
  carTrimName: string;
  carImageCode: string;
};

export default class CarProductJsonRepository implements CarProductRepository {
  async getCarProducts(carCode: CarModel['carCode']): Promise<CarProduct[]> {
    const response = await fetch(`http://localhost:3000/carProduct/${carCode}`);
    const carProducts = await response.json();

    return carProducts.data.map((carProduct: CarProductJson) => ({
      saleModelCode: carProduct.saleModelCode,
      carModelPrice: Number(carProduct.carModelPrice),
      carTrimName: carProduct.carTrimName,
      carImagePath: `https://www.hyundai.com/contents/vr360/${carCode}/trim/${carProduct.carImageCode}.png`,
    }));
  }
}
