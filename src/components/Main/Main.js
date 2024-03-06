import styled from 'styled-components';
import { Container } from '../Container';

const Wrap = styled.main`
  padding: 20px 0;

  @media (min-width: 780px) {
    padding: 30px 0;
  }
`;
const Main = ({ children }) => {
  return (
    <Wrap>
      <Container>{children}</Container>
    </Wrap>
  );
};

export default Main;
