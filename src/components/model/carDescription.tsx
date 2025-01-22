import React from 'react';
import Tmodel from '../../types/model';
import { useNavigate } from 'react-router-dom';

type Props = {
    model: Tmodel | undefined;
};

export default function CarDescription({ model }: Props) {
    const navigate = useNavigate();


    // TODO : Custom ErrorBoundary 적용
    // https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
    if (model === undefined) {
        alert('선택된 모델이 없습니다.')
        navigate('/');
        return;
    }

    const { product, cost, options, img, category } = model;


    return (
        <div className='w-full flex-1'>
            <h2>넥쏘 Premium</h2>
        </div>
    )
}