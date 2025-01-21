export interface Vehicle {
    id: number;
    name: string;
    type: '수소/전기' | 'N' | '승용' | 'SUV' | 'MPV' | '소형트럭&택시' | '트럭' | '버스'
    minPrice: number;
    imageUrl: string;
}
