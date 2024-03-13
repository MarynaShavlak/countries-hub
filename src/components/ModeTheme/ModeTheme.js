import { IoMoonOutline, IoMoon } from 'react-icons/io5';

const ModeTheme = ({ theme, toggleTheme }) => (
  <div onClick={toggleTheme}>
    {theme === 'light' ? <IoMoonOutline /> : <IoMoon />}
    <span style={{ marginLeft: '10px' }}>{theme} theme</span>
  </div>
);

export default ModeTheme;
