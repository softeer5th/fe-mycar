export type CarType = {
  carTypeCode: string;
  carTypeName: string;
};

export type CarModel = {
  carTypeCode: string;
  carCode: string;
  carName: string;
  carPrice: number;
  carImgPath: string;
};

export type CarProduct = {
  saleModelCode: string;
  carModelPrice: number;
  carTrimName: string;
  carImagePath: string;
};
