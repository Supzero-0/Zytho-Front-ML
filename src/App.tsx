import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Beers from './pages/Beers';
import Breweries from './pages/Breweries/Breweries';
import BreweryAdd from './pages/Breweries/BreweryAdd';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/breweries" element={<Breweries />} />
          <Route path="/breweries/add" element={<BreweryAdd />} />
          <Route path="/search" element={<div>Search</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
