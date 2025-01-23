type VehicleType = '수소/전기' | 'N' | '승용' | 'SUV' | 'MPV' | '소형트럭&택시' | '트럭' | '버스';
export interface Vehicle {
  id: number;
  name: string;
  type: VehicleType;
  minPrice: number;
  imageUrl: string;
}
