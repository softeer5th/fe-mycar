import { setupWorker } from 'msw/browser';
import { http, HttpResponse } from 'msw';
import ELECTRONIC_CAR_LIST from './data/electronicCarList.json';
import N_CAR_LIST from './data/nCarList.json';
import PASSENGER_CAR_LIST from './data/passengerCarList.json';
import CAR_MODEL_LIST from './data/carModelList.json';
import SUCCESS_CAR_MODEL from './data/successCarModel.json';

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

// TODO: 자동차에 따라 엔진 종류 API 호출
const carModelListHandler = ({ request }: { request: Request }) => {
  const url = new URL(request.url);

  const engineType = url.searchParams.get('engine') || '';

  switch (engineType) {
    case '2wd':
    case '4wd':
      return HttpResponse.json(CAR_MODEL_LIST[engineType]);
  }
};

const successCarModelHandler = () => {
  return HttpResponse.json(SUCCESS_CAR_MODEL);
};

export const worker = setupWorker(
  http.get('/car', carListHandler),
  http.get('/car/model', carModelListHandler),
  http.get('/car/success', successCarModelHandler),
);
