import { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter';
import {
  Wrap,
  CountryImage,
  CountryTitle,
  CountryMeta,
  CountryMetaItem,
  InfoWrap,
  MetaWrap,
  BordersList,
} from './CountryInfo.styled';
import { CountryInfoProps } from './CountryInfo.types';
import {
  getCountryLanguagesString,
  getCountryNativeNameString,
  getCountryDomainString,
  getCountryCurrenciesString,
} from 'utils';
import { searchCountryByCode } from 'config';

export const CountryInfo: FC<CountryInfoProps> = ({
  name,
  region,
  subregion,
  capital,
  population,
  flags,
  currencies,
  languages,
  tld,
  borders,
}) => {
  const [borderNames, setBorderNames] = useState<string[]>([]);
  console.log('borderNames: ', borderNames);

  useEffect(() => {
    const fetchData = async (code: string) => {
      try {
        const response = await axios.get(searchCountryByCode(code));
        const countryName = response.data[0].name.common;
        setBorderNames(prevNames => {
          if (!prevNames.includes(countryName)) {
            return [...prevNames, countryName];
          }
          return prevNames;
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    setBorderNames([]);
    borders.forEach(border => fetchData(border));
  }, [borders]);

  return (
    <Wrap>
      <CountryImage src={flags.svg} alt={flags.alt} />
      <InfoWrap>
        <CountryTitle>{name.official}</CountryTitle>
        <MetaWrap>
          <CountryMeta>
            <CountryMetaItem>
              <span>Native Name:</span>
              <span>{getCountryNativeNameString(name.nativeName)}</span>
            </CountryMetaItem>
            <CountryMetaItem>
              <span>Population:</span>
              <span>{population.toLocaleString()}</span>
            </CountryMetaItem>
            <CountryMetaItem>
              <span>Region:</span> <span>{region}</span>
            </CountryMetaItem>
            <CountryMetaItem>
              <span>Sub Region:</span> <span>{subregion}</span>
            </CountryMetaItem>
            <CountryMetaItem>
              <span>Capital:</span> <span>{capital}</span>
            </CountryMetaItem>
          </CountryMeta>
          <CountryMeta>
            <CountryMetaItem>
              <span>Top Level Domain:</span>
              <span>{getCountryDomainString(tld)}</span>
            </CountryMetaItem>
            <CountryMetaItem>
              <span>Currencies:</span>
              <span>{getCountryCurrenciesString(currencies)}</span>
            </CountryMetaItem>
            <CountryMetaItem>
              <span>Languages:</span>
              <span>{getCountryLanguagesString(languages)}</span>
            </CountryMetaItem>
          </CountryMeta>
        </MetaWrap>
        <CountryMeta>
          <CountryMetaItem>
            <span>Borders:</span>
            <BordersList>
              {borderNames.map((borderName, index) => (
                <li key={index}>{borderName}</li>
              ))}
            </BordersList>
          </CountryMetaItem>
        </CountryMeta>
      </InfoWrap>
    </Wrap>
  );
};
