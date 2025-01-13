import { Link } from 'react-router-dom';
import { Beer, Building2, Search } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-amber-900 mb-4">
          Découvrez l'univers des bières artisanales
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explorez notre sélection unique de bières artisanales et découvrez les brasseries qui les créent.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <Link
          to="/beers"
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Beer className="h-12 w-12 text-amber-600 mb-4" />
          <h2 className="text-xl font-semibold text-amber-900 mb-2">Catalogue de Bières</h2>
          <p className="text-gray-600 text-center">
            Parcourez notre collection de bières artisanales soigneusement sélectionnées.
          </p>
        </Link>

        <Link
          to="/breweries"
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Building2 className="h-12 w-12 text-amber-600 mb-4" />
          <h2 className="text-xl font-semibold text-amber-900 mb-2">Brasseries</h2>
          <p className="text-gray-600 text-center">
            Découvrez les brasseries artisanales et leur histoire unique.
          </p>
        </Link>

        <Link
          to="/search"
          className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <Search className="h-12 w-12 text-amber-600 mb-4" />
          <h2 className="text-xl font-semibold text-amber-900 mb-2">Recherche Avancée</h2>
          <p className="text-gray-600 text-center">
            Trouvez la bière parfaite selon vos critères.
          </p>
        </Link>
      </div>
    </div>
  );
}