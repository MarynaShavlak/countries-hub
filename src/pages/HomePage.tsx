import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AllCountries } from 'config';
import { List } from '../components/List/List';
import { Card } from '../components/Card';
import { Controls } from 'components/Controls';
import { Loader } from 'components/Loader';
import { NoDataMessage } from 'components/NoDataMessage';

export interface Country {
  name: { official: string };
  region: string;
  capital: string;
  population: number;
  flags: { png: string };
}

const HomePage = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filterCountries, setFilterCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const navigate = useNavigate();

  const handleSearch = (search: string, regions: string[]) => {
    let filteredData = [...countries];
    if (regions.length) {
      filteredData = filteredData.filter(country =>
        regions.includes(country.region),
      );
    }
    if (search) {
      filteredData = filteredData.filter(country =>
        country.name.official.toLowerCase().includes(search.toLowerCase()),
      );
    }
    setFilterCountries(filteredData);
  };

  const navigateToCountryDetails = (name: string) => {
    navigate(`/details/${encodeURIComponent(name)}`);
  };
  const fetchData = async () => {
    try {
      const response = await axios.get<Country[]>(AllCountries);
      const data = response.data;
      setCountries(data);
      setFilterCountries(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderCountryCards = filterCountries.map(country => {
    const { name, region, capital, population, flags } = country;
    return (
      <Card
        key={name.official}
        onClick={() => navigateToCountryDetails(name.official)}
        img={flags.png}
        name={name.official}
        info={{ population, region, capital }}
      />
    );
  });

  return (
    <div>
      <Controls onSearch={handleSearch} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!filterCountries.length ? (
            <NoDataMessage />
          ) : (
            <List>{renderCountryCards}</List>
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;
