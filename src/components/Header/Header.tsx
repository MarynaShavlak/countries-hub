import { ModeTheme } from 'components/ModeTheme';
import { Link } from 'react-router-dom';
import { TbWorldHeart } from 'react-icons/tb';

export const Header = () => {
  return (
    <header className="fixed z-10 w-full shadow-xl dark:shadow-dark bg-greenLight dark:bg-darkMain">
      <div className="w-[288px] mx-auto px-4 md:w-[736px] lg:w-[1168px]">
        <div className="flex justify-between items-center py-5">
          <Link
            to="/"
            className="font-bold text-md md:text-2xl no-underline flex gap-4 items-center text-uiBaseBlack dark:text-greenLight hover:text-uiBaseWhite dark:hover:text-uiBaseWhite transition-colors"
          >
            <TbWorldHeart className="w-8 h-8 md:w-12 md:h-12" />
            Where is the world
          </Link>
          <ModeTheme />
        </div>
      </div>
    </header>
  );
};
