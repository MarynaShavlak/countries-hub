import { FC } from 'react';
import {
  getCountryCurrenciesString,
  getCountryAreaString,
  getCountryPopulationString,
} from 'utils';
import { MdLocationCity } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import { IoEarthOutline } from 'react-icons/io5';
import { GrCurrency } from 'react-icons/gr';
import { DetailsCountryProps } from './DetailsCountry.types';

export const DetailsCountry: FC<DetailsCountryProps> = ({
  capital,
  population,
  area,
  currencies,
}) => (
  <ul className="flex flex-col  gap-4 min-w-60">
    <li className="flex gap-4  py-2  px-4  items-center rounded-50  text-white bg-red">
      <MdLocationCity className="w-8 h-8" />
      <div>
        <p className="text-sm">Capital</p>
        <p className="font-semibold text-md">{capital}</p>
      </div>
    </li>
    <li className="flex gap-4  py-2  px-4  items-center rounded-50  text-white bg-green">
      <IoIosPeople className="w-8 h-8" />
      <div>
        <p className="text-sm">Population:</p>
        <p className="font-semibold text-md">
          {getCountryPopulationString(population)}
        </p>
      </div>
    </li>
    <li className="flex gap-4  py-2  px-4  items-center rounded-50  text-white bg-violet">
      <IoEarthOutline className="w-8 h-8" />
      <div>
        <p className="text-sm">Area:</p>
        <p className="font-semibold text-md">{getCountryAreaString(area)}</p>
      </div>
    </li>

    <li className="flex gap-4  py-2  px-4  items-center rounded-50  text-white bg-blue">
      <GrCurrency className="w-8 h-8" />
      <div>
        {' '}
        <p className="text-sm">Currencies:</p>
        <p className="font-semibold text-md">
          {getCountryCurrenciesString(currencies)}
        </p>
      </div>
    </li>
  </ul>
);
