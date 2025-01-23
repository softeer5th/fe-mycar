import React from 'react'
import { Car } from '../../types/cars'
import { Link } from 'react-router-dom'
import { numberConverter } from '../../utils/converter'

type Props = {
  carList: Car[]
}

const CarListContainer = ({ carList }: Props) => {
  return (
    <ul className='grid grid-cols-2 gap-x-10 gap-y-20 mt-[60px] mb-14 mx-48 xl:grid-cols-4'>
      {carList.map(car =>
        <li>
          <Link to={`/model/${car.code}`}>
            <img className='mb-[20px]' src={`http://localhost:5000${car.img}`} />
            <strong className='font-bold text-[22px]'>{car.name}</strong>
            <p className='mt-[10px] font-semibold text-base'>{numberConverter(car.cost)}만원 ~</p>
          </Link>
        </li>
      )}
    </ul>
  )
}

export default CarListContainer