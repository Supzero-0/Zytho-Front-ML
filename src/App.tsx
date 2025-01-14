import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Beers from './pages/Beers';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/beers" element={<Beers />} />
          <Route path="/breweries" element={<div>Breweries</div>} />
          <Route path="/search" element={<div>Search</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
