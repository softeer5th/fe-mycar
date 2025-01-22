import { use } from 'react';
import styled from 'styled-components';
import { Model } from '../../../domain/Model';
import ModelCard from './ModelCard';

const ModelCardList = ({modelDataList} : {modelDataList : Promise<Model[]>}) => {
  const data = use(modelDataList);
  
  return (
    <CardListContainer>
      {data.map((model:Model) => <ModelCard key={model.id} {...model} />)}
    </CardListContainer>
  );
}

const CardListContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding-top: 60px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 80px 40px;
`

export default ModelCardList;