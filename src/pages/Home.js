import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { AllCountries } from 'config';
import { List } from '../components/List/List';
import { Card } from '../components/Card/Card';
import Controls from '../components/Controls/Controls';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (search, region) => {
    let data = [...countries];
    if (region) {
      data = data.filter(country => country.region.includes(region));
    }
    if (search) {
      data = data.filter(country =>
        country.name.official.toLowerCase().includes(search.toLowerCase()),
      );
    }
    setFilterCountries(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(AllCountries);
        setCountries(response.data);
        setFilterCountries(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Controls onSearch={handleSearch} />
      <List>
        {filterCountries.map(country => {
          return (
            <Card
              key={country.name.official}
              onClick={() =>
                navigate(
                  `/details/${encodeURIComponent(country.name.official)}`,
                )
              }
              img={country.flags.png}
              name={country.name.official}
              info={[
                {
                  title: 'Population',
                  description: country.population.toLocaleString(),
                },
                { title: 'Region', description: country.region },
                { title: 'Capital', description: country.capital },
              ]}
            />
          );
        })}
      </List>
    </div>
  );
};

export default Home;
