import { FC, useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { CountryInfoProps } from './CountryInfo.types';
import { searchCountryByCode } from 'config';
import { useNavigate } from 'react-router-dom';
import { Borders } from './Borders';
import { HeaderCountry } from './HeaderCountry';
import { DetailsCountry } from './DetailsCountry';
import { AdditionalInfoCountry } from './AdditionalInfoCountry';
import { ShowOnMapBtn } from './ShowOnMapBtn/ShowOnMapBtn';

export const CountryInfo: FC<CountryInfoProps> = ({
  name,
  region,
  subregion,
  capital,
  population,
  area,
  flags: { svg, alt },
  coatOfArms,
  currencies,
  languages,
  tld,
  borders,
  maps: { googleMaps },
}) => {
  const [borderNames, setBorderNames] = useState<string[]>([]);
  const navigate = useNavigate();
  console.log('borderNames: ', borderNames);

  const navigateToCountryDetails = (name: string) => {
    navigate(`/details/${encodeURIComponent(name)}`);
  };

  const fetchData = async () => {
    try {
      if (!borders || borders.length === 0) {
        setBorderNames([]);
        return;
      }
      const borderRequests = borders.map(border =>
        axios.get(searchCountryByCode(border)),
      );
      const responses: AxiosResponse[] = await Promise.all(borderRequests);
      const borderNames = responses
        .map(response => response.data[0]?.name?.common)
        .filter(Boolean);
      setBorderNames(borderNames);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    setBorderNames([]);
    fetchData();
  }, [borders]);

  return (
    <>
      <HeaderCountry name={name} coatOfArms={coatOfArms} />
      <div className="mt-10 flex gap-10  flex-col lg:flex-row">
        <DetailsCountry
          capital={capital}
          population={population}
          area={area}
          currencies={currencies}
        />
        <div className="md:grid  md:grid-cols-2 gap-10 items-start">
          <img className="lg:w-400 lg:h-300 sm:mb-10" src={svg} alt={alt} />
          <div>
            <AdditionalInfoCountry
              name={name}
              region={region}
              subregion={subregion}
              tld={tld}
              languages={languages}
            />
            <ShowOnMapBtn googleMaps={googleMaps} />
          </div>
          {borderNames.length > 0 && (
            <Borders
              borderNames={borderNames}
              onClick={navigateToCountryDetails}
            />
          )}
        </div>
      </div>
    </>
  );
};
