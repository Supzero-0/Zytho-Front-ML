import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Beers from './pages/Beers/Beers';
import BeerAdd from './pages/Beers/BeerAdd';
import Breweries from './pages/Breweries/Breweries';
import BreweryAdd from './pages/Breweries/BreweryAdd';

function App(): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/beers/add" element={<BeerAdd />} />
          <Route path="/breweries" element={<Breweries />} />
          <Route path="/breweries/add" element={<BreweryAdd />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
