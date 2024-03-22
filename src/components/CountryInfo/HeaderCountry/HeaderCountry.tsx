import { FC } from 'react';
import { HeaderCountryProps } from './HeaderCountry.types';

export const HeaderCountry: FC<HeaderCountryProps> = ({ name, coatOfArms }) => (
  <div className="flex gap-5 justify-center items-center mt-6">
    {coatOfArms.svg && (
      <img className="w-10 lg:w-20" src={coatOfArms.svg} alt="Coat of arms" />
    )}
    <h1 className="text-3xl md:text-4xl font-bold text-red ">
      {name.official}
    </h1>
  </div>
);
