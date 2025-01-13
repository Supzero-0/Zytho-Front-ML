import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Layout</div>}>
          <Route index element={<div>Home</div>} />
          <Route path="/beers" element={<div>Beers</div>} />
          <Route path="/breweries" element={<div>Breweries</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
