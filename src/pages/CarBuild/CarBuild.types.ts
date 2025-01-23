export interface CarModel {
  id: number;
  imgSrc: string;
  name: string;
  price: number;
  model: string;
  description: string;
  isBest: boolean;
  engineType: string;
  options: {
    defaultOptions: string[];
    selectOptions?: string[];
  };
  interiorImgSrc: string;
  exteriorImgSrc: string;
  exteriorColor?: string;
  interiorColor?: string;
}
