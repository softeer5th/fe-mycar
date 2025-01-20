import { useState } from 'react';
import styled from 'styled-components';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container>테스트</Container>
    </>
  );
}

export default App;

const Container = styled.div`
  background-color: ${(props) => props.theme.color.beige400};
`;
