import { Link } from 'react-router';
import styled from 'styled-components';

import type { Vehicle } from '../../../domain/Vehicle';
import { formatNumberToMoney } from '../../../utils';

const VehicleCard = ({ id, name, minPrice, imageUrl }: Vehicle) => (
  <Container to={`/model-selection/${id}`}>
    <Image alt={name} src={imageUrl} />
    <ContentContainer>
      <Title>{name}</Title>
      <Price>{formatNumberToMoney({ money: minPrice, unit: 10000, suffix: '~' })}</Price>
    </ContentContainer>
  </Container>
);

const Container = styled(Link)`
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 280px;
    margin: 0 auto;
    color: ${(props) => props.theme.color['text-default']};
    text-align: center;
    cursor: pointer;
`;

const Image = styled.img`
    width: 250px;
    height: 152px;
`;

const ContentContainer = styled.div`
      
`;

const Title = styled.p`
  ${(props) => props.theme.typo.body1};

`;

const Price = styled.p`
  ${(props) => props.theme.typo.body2};
`;

export default VehicleCard;
