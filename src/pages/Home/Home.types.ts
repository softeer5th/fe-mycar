import { TABS } from './Home.constants';

export type TabValue = (typeof TABS)[number]['value'];

export interface Car {
  id: number;
  imgSrc: string;
  name: string;
  price: number;
}
