import styled from 'styled-components';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container } from '../Container';
import { IoMoonOutline, IoMoon } from 'react-icons/io5';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;
const Title = styled.div`
  font-weight: var(--fw-bold);
  font-size: 25px;
  color: var(--colors-text);
`;
const ModeTheme = styled.div`
  color: var(--colors-text);
  cursor: pointer;
  font-weight: var(--fw-bold);
  text-transform: capitalize;
`;

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
            <ModeTheme onClick={toggleTheme}>
              {theme === 'light' ? <IoMoonOutline /> : <IoMoon />}
              <span style={{ marginLeft: '10px' }}>{theme} theme</span>
            </ModeTheme>
          </Wrap>
        </Container>
      </HeaderEl>
    </div>
  );
};

export default Header;
