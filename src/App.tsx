import { Header } from './components/Header';
import { Main } from './components/Main';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:name" element={<DetailsPage />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </Main>
    </div>
  );
};

export default App;
