import React from 'react';
import { Tcolors, Toptions } from '../../types/custom';

type Props = {
    detail: {
        colors: Tcolors,
        options: Toptions
    }
};

export default function CarOption({ detail }: Props) {
    const { colors, options } = detail;
    return (
        <div className='w-[660px] min-w-[660px]'>CarOption</div>
    )
}