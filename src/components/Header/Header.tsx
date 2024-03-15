import { ModeTheme } from 'components/ModeTheme';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div>
      <header className="shadow-md bg-ui-base">
        <div className="w-[288px] mx-auto px-4 md:w-[736px] lg:w-[1168px]">
          <div className="flex justify-between items-center py-5">
            <Link to="/" className="font-bold text-2xl no-underline">
              Where is the world
            </Link>
            <ModeTheme />
          </div>
        </div>
      </header>
    </div>
  );
};
