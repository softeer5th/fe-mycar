import { Suspense } from 'react';
import Banner from '../../components/Banner';
import Tab from '../../components/Tab';
import VehicleCardList from './components/VehicleCardList';
import { fetchVehicleData } from '../../apis';

const VehicleSelectionPage = () => {
  const VEHICLE_TYPES = ['수소/전기', 'N', '승용', 'SUV', 'MPV', '소형트럭&택시', '트럭', '버스'];

  const vehicleDataList = fetchVehicleData();
  
  const makeVehicleCardList = ({ label }: { label: string }) => {
    return (
      <Suspense fallback={<div>loading...</div>}>
        <VehicleCardList label={label} vehicleDataList={vehicleDataList} />
      </Suspense>
    );
  }

  const vehicleTabDataList = VEHICLE_TYPES.map((type) => {
    return {
      label: type,
      content: makeVehicleCardList({ label: type }),
    }
  })

  return (
    <div>
      <Banner
        title='내 차 만들기'
        subTitle='내가 타고 싶은 나만의 차를 만들어보세요.'
      />
      <Tab data={vehicleTabDataList} />
    </div>
  );
}

export default VehicleSelectionPage;