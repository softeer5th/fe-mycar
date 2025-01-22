import styled from 'styled-components';
import { Vehicle } from '../../../domain/Vehicle';
import { formatNumberToMoney } from '../../../utils';
import { Link } from 'react-router';

const VehicleCard = ({id, name, minPrice, imageUrl}: Vehicle) => {
    
  return (
    <Container to={`/model-selection/${id}`}>
      <Image src={imageUrl} alt={name} />
      <ContentContainer>
        <Title>{name}</Title>
        <Price>{formatNumberToMoney({money: minPrice, unit: 10000, suffix: "~"})}</Price>
      </ContentContainer>
    </Container>
  );
}

const Container = styled(Link)`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${(props) => props.theme.color['text-default']};
    max-width: 280px;
    margin: 0 auto;
    text-align: center;
    cursor: pointer;
`

const Image = styled.img`
    width: 250px;
    height: 152px;
`

const ContentContainer = styled.div`
    
`

const Title = styled.p`
  ${(props) => props.theme.typo.body1};

`

const Price = styled.p`
  ${(props) => props.theme.typo.body2};
`

export default VehicleCard;
