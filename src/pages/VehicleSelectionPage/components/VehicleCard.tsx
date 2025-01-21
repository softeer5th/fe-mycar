import styled from 'styled-components';
import { Vehicle } from '../../../domain/Vehicle';
import { formatNumberToMinMoney } from '../../../utils';

const VehicleCard = ({name, minPrice, imageUrl}: Vehicle) => {
    
  return (
    <Container>
      <Image src={imageUrl} alt={name} />
      <ContentContainer>
        <Title>{name}</Title>
        <Price>{formatNumberToMinMoney(minPrice)}</Price>
      </ContentContainer>
    </Container>
  );
}

const Container = styled.div`
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
