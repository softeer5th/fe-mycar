import React, { useEffect, useState } from 'react'
import CarDescription from './carDescription'
import CarOption from './carOption'
import API from '../../utils/api'
import Tmodel from '../../types/model'
import { useNavigate, useParams } from 'react-router-dom'
import { Tcolors, Toptions } from '../../types/custom'
import { CustomMode } from '../../pages/model'

type Props = {
    model: Tmodel
}

const CarCustom = ({ model }: Props) => {
    const { car } = useParams();

    const navigate = useNavigate();

    const [detail, setDetail] = useState<{ colors: Tcolors, options: Toptions }>();
    const [preview, setPreview] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [mode, setMode] = useState<CustomMode>(CustomMode.exterior);

    const getCarDetails = async () => {
        if (car === undefined) {
            navigate('/');
            return;
        }

        const api = new API();
        const {
            colors,
            options,
            preview
        }: { colors: Tcolors, options: Toptions, preview: string } = await api.get('/api/car/models/options', {
            car: car,
            model: model.product.toLocaleLowerCase()
        });

        setDetail({
            colors: colors,
            options: options
        })
        setPreview(preview);
        setLoading(true);
    }
    useEffect(() => {
        getCarDetails();
    }, [model, car])
    return (
        <>
            {loading ?
                <>
                    <CarDescription mode={mode} setMode={setMode} model={model} preview={preview} />
                    <CarOption detail={detail} />
                </> :
                <><p>loading...</p></>}

        </>
    )
}

export default CarCustom