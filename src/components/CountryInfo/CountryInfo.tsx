import { FC, useState, useEffect, useMemo } from 'react';

import axios from 'axios';
import {
  Wrap,
  CountryImage,
  CountryTitle,
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
} from 'utils';
import { searchCountryByCode } from 'config';
import { useNavigate } from 'react-router-dom';
import { Borders } from './Borders';

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
    <Wrap>
      <CountryImage src={flags.svg} alt={flags.alt} />
      <InfoWrap>
        <CountryTitle>{name.official}</CountryTitle>
        <MetaWrap>
          <Meta>
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
              <span>Currencies:</span>
              <span>{getCountryCurrenciesString(currencies)}</span>
            </MetaItem>
            <MetaItem>
              <span>Languages:</span>
              <span>{getCountryLanguagesString(languages)}</span>
            </MetaItem>
          </Meta>
        </MetaWrap>
        <Meta>
          <MetaItem>
            <span>Borders:</span>
            {renderBorders}
          </MetaItem>
        </Meta>
      </InfoWrap>
    </Wrap>
  );
};
