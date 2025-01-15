import { useEffect, useState } from "react";
import { BreweryResponseBody } from "../../interfaces/breweryInterface";
import { BreweryService } from "../../services/breweryService";
import BreweryCard from "../../components/Brewery/BreweryCard";
import { Link } from "react-router-dom";

export default function Breweries() {
    const [breweries, setBreweries] = useState<BreweryResponseBody[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [filteredBreweries, setFilteredBreweries] = useState<BreweryResponseBody[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");

    const fetchBreweries = async () => {
        try {
            setLoading(true);
            const data = await BreweryService.getBreweries();
            setBreweries(data);
            setFilteredBreweries(data);
            setError(null);
        } catch (err: any) {
            setError("Erreur lors de la récupération des brasseries.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBreweries();
    }, []);

    // Gérer les changements dans le champ de recherche
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        setSearchTerm(term);

        // Filtrer les bières en fonction du terme de recherche
        const filtered = breweries.filter((breweries) =>
            breweries.name.toLowerCase().includes(term.toLowerCase())
        );

        setFilteredBreweries(filtered);
    };


    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[50vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-900 border-t-transparent"></div>
            </div>
        );
    }
    if (error) {
        return (
            <div className="text-center text-red-600">
                Une erreur est survenue lors du chargement des brasseries.
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-amber-900 mb-4 sm:mb-0">Nos Brasseries Partenaires</h1>
                <div className="flex px-4 py-3 rounded-md border-2 border-blue-500 bg-white overflow-hidden max-w-md mx-auto mb-4 sm:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
                        className="fill-gray-600 mr-3 rotate-90">
                        <path
                            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                        </path>
                    </svg>
                    <input type="text" placeholder="Rechercher une brasserie..." value={searchTerm} onChange={handleSearch} className="w-full outline-none text-gray-600 text-sm" />
                </div>
                <Link to="/breweries/add" className="bg-amber-900 text-white px-4 py-2 rounded-md mb-4 sm:mb-0">Ajouter une brasserie</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBreweries?.map((brewery) => (
                    <BreweryCard key={brewery.id_brewery} brewery={brewery} reload={fetchBreweries} />
                ))}
            </div>
        </div>
    );
}