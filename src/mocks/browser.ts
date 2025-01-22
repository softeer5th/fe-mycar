import { setupWorker } from 'msw/browser';
import { http, HttpResponse } from 'msw';
import ELECTRONIC_CAR_LIST from './data/electronicCarList.json';
import N_CAR_LIST from './data/nCarList.json';
import PASSENGER_CAR_LIST from './data/passengerCarList.json';

const carListHandler = ({ request }: { request: Request }) => {
  const url = new URL(request.url);

  const carType = url.searchParams.get('type');

  switch (carType) {
    case 'electronic':
      return HttpResponse.json(ELECTRONIC_CAR_LIST);
    case 'n':
      return HttpResponse.json(N_CAR_LIST);
    case 'passenger':
      return HttpResponse.json(PASSENGER_CAR_LIST);
    case 'suv':
      return HttpResponse.json(ELECTRONIC_CAR_LIST);
    case 'mpv':
      return HttpResponse.json(N_CAR_LIST);
    case 'small':
      return HttpResponse.json(PASSENGER_CAR_LIST);
    case 'truck':
      return HttpResponse.json(ELECTRONIC_CAR_LIST);
    case 'bus':
      return HttpResponse.json(N_CAR_LIST);
    default:
      return HttpResponse.json(ELECTRONIC_CAR_LIST);
  }
};

export const worker = setupWorker(http.get('/car', carListHandler));
