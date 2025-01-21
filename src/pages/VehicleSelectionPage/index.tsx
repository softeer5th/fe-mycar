import { Suspense } from 'react';
import Banner from '../../components/Banner';
import Tab from '../../components/Tab';
import VehicleCardList from './components/VehicleCardList';
import { fetchVehicleData } from '../../apis';

const VehicleSelectionPage = () => {
  const vehicleDataList = fetchVehicleData();
  const temp = [
    { label: '수소/전기', content: <Suspense fallback={<div>loading...</div>}>
      <VehicleCardList label={'수소/전기'} vehicleDataList={vehicleDataList} />
    </Suspense>},
    { label: 'temp2', content: <div>temp2</div> },
    { label: 'temp3', content: <div>temp3</div> },
    { label: 'temp4', content: <div>temp4</div> },
    { label: 'temp5', content: <div>temp5</div> },
    { label: 'temp6', content: <div>temp6</div> },
    { label: 'temp7', content: <div>temp7</div> },
    { label: 'temp8', content: <div>temp8</div> },
  ];

  return (
    <div>
      <Banner
        title='내 차 만들기'
        subTitle='내가 타고 싶은 나만의 차를 만들어보세요.'
      />
      <Tab data={temp} />
      {/* <Suspense fallback={<div>loading...</div>}>
        <VehicleCardList label={} vehicleDataList={vehicleDataList} />
      </Suspense> */}
    </div>
  );
}

export default VehicleSelectionPage;