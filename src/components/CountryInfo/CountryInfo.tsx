import { FC } from 'react';

import { capitalizeFirstLetter } from 'utils/capitalizeFirstLetter';
import {
  Wrap,
  CountryImage,
  CountryTitle,
  CountryMeta,
  CountryMetaItem,
  InfoWrap,
} from './CountryInfo.styled';
import { CountryInfoProps } from './CountryInfo.types';
import {
  getCountryLanguagesString,
  getCountryNativeNameString,
  getCountryDomainString,
  getCountryCurrenciesString,
} from 'utils';

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
}) => {
  console.log('currencies: ', currencies);
  return (
    <Wrap>
      <CountryImage src={flags.svg} alt={flags.alt} />
      <InfoWrap>
        <CountryTitle>{name.official}</CountryTitle>
        <CountryMeta>
          <CountryMetaItem>
            {' '}
            <span>Native Name:</span>{' '}
            <span>{getCountryNativeNameString(name.nativeName)}</span>
          </CountryMetaItem>
          <CountryMetaItem>
            {' '}
            <span>Population:</span> <span>{population.toLocaleString()}</span>
          </CountryMetaItem>
          <CountryMetaItem>
            {' '}
            <span>Region:</span> <span>{region}</span>
          </CountryMetaItem>
          <CountryMetaItem>
            {' '}
            <span>Sub Region:</span> <span>{subregion}</span>
          </CountryMetaItem>
          <CountryMetaItem>
            {' '}
            <span>Capital:</span> <span>{capital}</span>
          </CountryMetaItem>
        </CountryMeta>
        <CountryMeta>
          <CountryMetaItem>
            {' '}
            <span>Top Level Domain:</span>{' '}
            <span>{getCountryDomainString(tld)}</span>
          </CountryMetaItem>
          <CountryMetaItem>
            {' '}
            <span>Currencies:</span>{' '}
            <span>{getCountryCurrenciesString(currencies)}</span>
          </CountryMetaItem>
          <CountryMetaItem>
            {' '}
            <span>Languages:</span>{' '}
            <span>{getCountryLanguagesString(languages)}</span>
          </CountryMetaItem>
        </CountryMeta>
      </InfoWrap>
    </Wrap>
  );
};
