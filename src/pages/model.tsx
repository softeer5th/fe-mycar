import { useEffect, useState } from "react";
import Container from "../components/model/container";
import FilterList from "../components/model/filterList";
import Header from "../components/model/header";
import Nav from "../components/model/nav";
import API from "../utils/api";
import Tmodel from "../types/model";
import ModelList from "../components/model/modelList";
import CarDescription from "../components/model/carDescription";
import CarOption from "../components/model/carOption";
import { useNavigate } from "react-router-dom";

const Model = () => {

    const [models, setModels] = useState<Tmodel[]>([]);
    const [step, setStep] = useState<number>(0);
    const [detailStep, setDetailStep] = useState<number>(0);
    const [selectedModel, setSelectedModel] = useState<Tmodel | undefined>(undefined);

    const navigate = useNavigate();

    const getModels = async () => {

        try {
            const api = new API();
            const response: Tmodel[] = await api.get('/api/car/models', {
                name: "nexo"
            });
            setModels(response);
        }
        catch (err: unknown) {
            console.error(err);
            alert('모델을 불러오기 실패하였습니다.');
            navigate('/');
        }
    }

    useEffect(() => {
        getModels();
    }, [])

    return (
        <div>
            <Header />
            <Nav step={step} detailStep={detailStep} />
            <Container step={step}>
                {step === 0 ?
                    <>
                        <FilterList />
                        <ModelList setSelectedModel={setSelectedModel} setStep={setStep} models={models} />
                    </>
                    :
                    <>
                        <CarDescription model={selectedModel} />
                        <CarOption />
                    </>}
            </Container>
        </div>
    )
}

export default Model;
