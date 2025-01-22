import { useState } from 'react';
import CarThumbnail from '../components/CarThumbnail';
import ModelSelect from '../components/ModelSelect';
import { carThumbnails, Category } from '../datas/carInfo';
import { Link } from 'react-router-dom';

const initialCategory = Category.EV;

export default function SelectModel () {
    const [category, setCate] = useState(initialCategory);

    return (
        <div className='h-dvh w-full min-w-96 flex flex-col'>
      <header className='h-2/5 bg-primary p-10 pb-0 flex-shrink-0'>
        <div className='w-full h-full bg-secondary flex flex-col justify-center items-center gap-8'>
          <h1 className='text-6xl font-bold'>내 차 만들기</h1>
          <h1 className='text-base font-normal'>
            내가 타고 싶은 나만의 차를 만들어 보세요.
          </h1>
        </div>
      </header>
      <main className='w-full flex flex-col items-center'>
        <ModelSelect setCate={setCate} category={category} />
        <hr className='h-1 w-full'></hr>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 py-10 px-10 lg:px-52'>
          {carThumbnails.filter((car) => car.carType === category).map((car, i) => (
            <Link key={i} to={`/select-option/${car.carName}`}>
              <CarThumbnail
                imageLink={car.imageLink}
                carName={car.carName}
                carPrice={car.carPrice}
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
    )
}