import { Container } from '../Container';
import { Wrap } from './Main.styled';

const Main = ({ children }) => {
  return (
    <Wrap>
      <Container>{children}</Container>
    </Wrap>
  );
};

export default Main;
