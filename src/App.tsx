import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Details from './pages/Details';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Main>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:name" element={<Details />} />
            <Route path="/notfound" element={<NotFound />} />
          </Routes>
        </Router>
      </Main>
    </div>
  );
}

export default App;
