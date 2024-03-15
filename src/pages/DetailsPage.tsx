import { useState, useEffect } from 'react';
import axios from 'axios';
import { searchCountryByName } from 'config';
import { useParams, useNavigate } from 'react-router-dom';
import { BackButton } from './../components/BackButton/BackButton';
import { CountryInfo } from 'components/CountryInfo';
import { CountryInfoProps } from 'components/CountryInfo/CountryInfo.types';
import { Loader } from 'components/Loader';

type RouteParams = {
  name: string;
};

const DetailsPage = () => {
  const [country, setCountry] = useState<CountryInfoProps | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { name } = useParams<RouteParams>();
  const navigate = useNavigate();

  const moveToPreviousPage = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (!name) return;
    const fetchData = async () => {
      try {
        const response = await axios.get(searchCountryByName(name));
        const country = response.data[0];
        setCountry(country);
        console.log('country: ', country);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [name]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <BackButton onClick={moveToPreviousPage} />
          {country && <CountryInfo {...country} />}
        </>
      )}
    </>
  );
};

export default DetailsPage;
