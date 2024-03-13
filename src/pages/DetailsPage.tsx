import { useState, useEffect } from 'react';
import axios from 'axios';
import { searchCountry } from 'config';
import { useParams, useNavigate } from 'react-router-dom';
import { BackButton } from './../components/BackButton/BackButton';
import { CountryInfo } from 'components/CountryInfo';
import { CountryInfoProps } from 'components/CountryInfo/CountryInfo.types';

type RouteParams = {
  name: string;
};

const DetailsPage = () => {
  const [country, setCountry] = useState<CountryInfoProps | null>(null);
  const { name } = useParams<RouteParams>();
  console.log('name : ', name);
  const navigate = useNavigate();

  const moveToPreviousPage = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (!name) return;
    const fetchData = async () => {
      try {
        const response = await axios.get(searchCountry(name));
        const country = response.data[0];
        setCountry(country);
        console.log('country: ', country);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [name]);

  return (
    <>
      <BackButton onClick={moveToPreviousPage} />
      {country && <CountryInfo {...country} />}
      <div>Details {name}</div>
    </>
  );
};

export default DetailsPage;
