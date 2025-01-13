import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>Home</div>} />
          <Route path="/beers" element={<div>Beers</div>} />
          <Route path="/breweries" element={<div>Breweries</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
