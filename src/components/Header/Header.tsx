import { HeaderEl, Wrap, Title, Container } from './Header.styled';
import { ModeTheme } from 'components/ModeTheme';

export const Header = () => {
  return (
    <div>
      <HeaderEl>
        <Container>
          <Wrap>
            <Title>Where is the world</Title>
            <ModeTheme />
          </Wrap>
        </Container>
      </HeaderEl>
    </div>
  );
};
