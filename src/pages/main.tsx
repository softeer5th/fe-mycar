import { useEffect, useState } from "react";
import Header from "../components/header/header";
import Nav from "../components/main/nav";
import Title from "../components/main/title";
import RootContainer from "../container/container";
import API from "../utils/api";
import { Car, CarList } from "../types/cars";
import CarListContainer from "../components/main/carList";
import Footer from "../components/main/footer";

const Main = () => {
    const [carList, setCarList] = useState<Car[]>([]);

    const getTest = async () => {
        const api = new API();
        const response : CarList = await api.get("/api/car");
        setCarList(response.carList);
    }

    useEffect(()=>{
        getTest();
    },[])

    return (
        <RootContainer>
            <Header/>
            <Title/>
            <Nav/>
            <CarListContainer carList={carList} />
            <Footer/>
        </RootContainer>
    )
}

export default Main;