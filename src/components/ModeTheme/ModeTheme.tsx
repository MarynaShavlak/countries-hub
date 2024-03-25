import React, { FC, useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { IoMoon } from 'react-icons/io5';
import { FaSun } from 'react-icons/fa';
import { ModeThemeProps, ThemeOptions } from './ModeTheme.types';

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
    if (theme === ThemeOptions.Dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <button
      className="cursor-pointer flex items-center justify-center text-uiBaseBlack dark:text-greenLight"
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
