import React, { FC, useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { IoMoon } from 'react-icons/io5';
import { FaSun } from 'react-icons/fa';
import { ModeThemeProps, ThemeOptions } from './ModeTheme.types';
// import { ModeBtn } from './ModeTheme.styled';

export const ModeTheme: FC<{ initialTheme?: ModeThemeProps }> = ({
  initialTheme = ThemeOptions.Light,
}) => {
  const [theme, setTheme] = useLocalStorage('theme', initialTheme);

  const toggleTheme = () => {
    setTheme(
      theme === ThemeOptions.Light ? ThemeOptions.Dark : ThemeOptions.Light,
    );
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <button
      className="cursor-pointer flex items-center justify-center"
      onClick={toggleTheme}
      type="button"
    >
      {theme === ThemeOptions.Light ? (
        <FaSun className="text-2xl" />
      ) : (
        <IoMoon className="text-2xl" />
      )}
    </button>
  );
};
