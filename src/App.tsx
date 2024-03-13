import { Header } from './components/Header';
import { Main } from './components/Main';
import Details from './pages/Details';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Main>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/details/:name" element={<Details />} />
            <Route path="/notfound" element={<NotFound />} />
          </Routes>
        </Router>
      </Main>
    </div>
  );
}

export default App;
