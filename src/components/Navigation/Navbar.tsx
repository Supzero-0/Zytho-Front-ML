import { Link } from 'react-router-dom';
import { Beer, Building2 } from 'lucide-react';

export default function Navbar(): JSX.Element {
  return (
    <nav className="bg-amber-900 text-amber-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Beer className="h-8 w-8" />
            <span className="font-bold text-xl">Zythologue Explorer</span>
          </Link>

          <div className="flex space-x-4">
            <Link to="/beers" className="flex items-center space-x-1 hover:text-amber-200">
              <Beer className="h-5 w-5" />
              <span>Bières</span>
            </Link>
            <Link to="/breweries" className="flex items-center space-x-1 hover:text-amber-200">
              <Building2 className="h-5 w-5" />
              <span>Brasseries</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}