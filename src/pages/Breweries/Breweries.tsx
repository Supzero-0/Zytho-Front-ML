import { useEffect, useState } from "react";
import { BreweryResponseBody } from "../../interfaces/breweryInterface";
import { BreweryService } from "../../services/breweryService";
import BreweryCard from "../../components/Brewery/BreweryCard";
import { Link } from "react-router-dom";

export default function Breweries() {
    const [breweries, setBreweries] = useState<BreweryResponseBody[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBreweries = async () => {
            try {
                setLoading(true);
                const data = await BreweryService.getBreweries();
                setBreweries(data);
                setError(null);
            } catch (err: any) {
                setError("Erreur lors de la récupération des brasseries.");
            } finally {
                setLoading(false);
            }
        };

        fetchBreweries();
    }, []);

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
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-amber-900">Nos Brasseries Partenaires</h1>
                <Link to="/breweries/add" className="bg-amber-900 text-white px-4 py-2 rounded-md">Ajouter une brasserie</Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {breweries?.map((brewery) => (
                    <BreweryCard key={brewery.id_brewery} brewery={brewery} />
                ))}
            </div>
        </div>
    );
}