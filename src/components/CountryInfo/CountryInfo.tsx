import { FC, useState, useEffect, useMemo } from 'react';

import axios from 'axios';
import {
  // Wrap,
  CountryImage,
  // CountryTitle,
  Meta,
  MetaItem,
  InfoWrap,
  MetaWrap,
} from './CountryInfo.styled';
import { CountryInfoProps } from './CountryInfo.types';
import {
  getCountryLanguagesString,
  getCountryNativeNameString,
  getCountryDomainString,
  getCountryCurrenciesString,
  getCountryAreaString,
  getCountryPopulationString,
} from 'utils';
import { searchCountryByCode } from 'config';
import { useNavigate } from 'react-router-dom';
import { Borders } from './Borders';
import { MdLocationCity } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import { IoEarthOutline } from 'react-icons/io5';
import { GrCurrency } from 'react-icons/gr';

export const CountryInfo: FC<CountryInfoProps> = ({
  name,

  region,
  subregion,
  capital,
  population,
  area,
  flags,
  coatOfArms,
  currencies,
  languages,
  tld,
  borders,
}) => {
  const [borderNames, setBorderNames] = useState<string[]>([]);
  const navigate = useNavigate();
  console.log('borderNames: ', borderNames);

  const navigateToCountryDetails = (name: string) => {
    navigate(`/details/${encodeURIComponent(name)}`);
  };

  const renderBorders = useMemo(
    () => (
      <Borders borderNames={borderNames} onClick={navigateToCountryDetails} />
    ),
    [borderNames],
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!borders || borders.length === 0) {
          setBorderNames([]);
          return;
        }
        const borderRequests = borders.map(border =>
          axios.get(searchCountryByCode(border)),
        );
        const responses = await Promise.all(borderRequests);
        const borderNames = responses
          .map(response => response.data[0]?.name?.common)
          .filter(Boolean);
        setBorderNames(borderNames);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    setBorderNames([]);
    fetchData();
  }, [borders]);

  return (
    <>
      <h1 className="text-4xl font-bold mt-4 text-center">{name.official}</h1>
      <div className="mt-10 flex ">
        <ul className="flex flex-col gap-4 w-60">
          <li className="flex gap-4  py-2  px-4  items-center rounded-50  text-white bg-itemRed">
            <MdLocationCity className="w-8 h-8" />
            <div>
              <p className="text-sm">Capital</p>
              <p className="font-semibold text-md">{capital}</p>
            </div>
          </li>
          <li className="flex gap-4  py-2  px-4  items-center rounded-50  text-white bg-itemGreen">
            <IoIosPeople className="w-8 h-8" />
            <div>
              <p className="text-sm">Population:</p>
              <p className="font-semibold text-md">
                {getCountryPopulationString(population)}
              </p>
            </div>
          </li>
          <li className="flex gap-4  py-2  px-4  items-center rounded-50  text-white bg-itemViolet">
            <IoEarthOutline className="w-8 h-8" />
            <div>
              <p className="text-sm">Area:</p>
              <p className="font-semibold text-md">
                {getCountryAreaString(area)}
              </p>
            </div>
          </li>

          <li className="flex gap-4  py-2  px-4  items-center rounded-50  text-white bg-itemBlue">
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
        {/* <CountryImage src={flags.svg} alt={flags.alt} />
        <CountryImage src={coatOfArms.svg} alt="Coat of arms" /> */}
        {/* <InfoWrap>
          <MetaWrap>
            <Meta>
            <MetaItem>
            <span>Native Name:</span>
            <span>{getCountryNativeNameString(name.nativeName)}</span>
          </MetaItem>
            <MetaItem>
            <span>Region:</span> <span>{region}</span>
          </MetaItem>
          <MetaItem>
            <span>Sub Region:</span> <span>{subregion}</span>
          </MetaItem>
              <MetaItem>
                <span>Native Name:</span>
                <span>{getCountryNativeNameString(name.nativeName)}</span>
              </MetaItem>
              <MetaItem>
                <span>Population:</span>
                <span>{population.toLocaleString()}</span>
              </MetaItem>
              <MetaItem>
                <span>Region:</span> <span>{region}</span>
              </MetaItem>
              <MetaItem>
                <span>Sub Region:</span> <span>{subregion}</span>
              </MetaItem>
              <MetaItem>
                <span>Capital:</span> <span>{capital}</span>
              </MetaItem>
            </Meta>
            <Meta>
              <MetaItem>
                <span>Top Level Domain:</span>
                <span>{getCountryDomainString(tld)}</span>
              </MetaItem>
              
              <MetaItem>
                <span>Languages:</span>
                <span>{getCountryLanguagesString(languages)}</span>
              </MetaItem>
            </Meta>
          </MetaWrap>
          {borderNames.length > 0 && (
            <Meta>
              <MetaItem>
                <span>Borders:</span>
                {renderBorders}
              </MetaItem>
            </Meta>
          )}
        </InfoWrap> */}
      </div>
    </>
  );
};
