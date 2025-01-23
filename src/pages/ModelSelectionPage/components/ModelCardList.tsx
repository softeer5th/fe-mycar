import { use } from 'react';
import styled from 'styled-components';

import type { Model } from '../../../domain/Model';
import ModelCard from './ModelCard';

const ModelCardList = ({ modelDataList }: { modelDataList: Promise<Model[]> }) => {
  const data = use(modelDataList);
  
  return (
    <CardListContainer>
      {data.map((model: Model) => <ModelCard key={model.id} {...model} />)}
    </CardListContainer>
  );
};

const CardListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 80px 30px;
  width: 1180px;
  height: 570px;
  padding-top: 60px;
  margin: 0 auto;
`;

export default ModelCardList;