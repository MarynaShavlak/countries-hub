import { useState } from 'react';
import { useEffect } from 'react';
import { Container } from '../Container';
import { HeaderEl, Wrap, Title } from './Header.styled';
import ModeTheme from 'components/ModeTheme/ModeTheme';

export const Header = () => {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <div>
      <HeaderEl>
        <Container>
          <Wrap>
            <Title>Where is the world</Title>
            <ModeTheme theme={theme} toggleTheme={toggleTheme} />
          </Wrap>
        </Container>
      </HeaderEl>
    </div>
  );
};

export default Header;
