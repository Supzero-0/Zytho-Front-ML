import { useEffect, useState } from "react";
import { BeerResponseBody } from "../interfaces/beerInterface";
import { BeerService } from "../services/beerService";
import BeerCard from "../components/BeerCard";

export default function Beers() {
    const [beers, setBeers] = useState<BeerResponseBody[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBeers = async () => {
            try {
                setLoading(true);
                const data = await BeerService.getBeers();
                setBeers(data);
                setError(null);
            } catch (err: any) {
                setError("Erreur lors de la récupération des bières.");
            } finally {
                setLoading(false);
            }
        };

        fetchBeers();
    }, []);

    if (loading) {
        return (<div className="flex justify-center items-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-900 border-t-transparent"></div>
        </div>);
    }
    if (error) {
        return (<div className="text-center text-red-600">
            Une erreur est survenue lors du chargement des bières.
        </div>);
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-amber-900 mb-8">Nos Bières Artisanales</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {beers?.map((beer: any) => (<BeerCard key={beer.id_beer} beer={beer} />))}
            </div>
        </div>
    );
}