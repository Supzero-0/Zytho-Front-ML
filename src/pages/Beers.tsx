import { useEffect, useState } from "react";
import { BeerResponseBody } from "../interfaces/beerInterface";
import { BeerService } from "../services/beerService";

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
    console.log('BeerList :' + beers);

    if (loading) return <div>Chargement des bières...</div>;
    if (error) return <div>Erreur : {error}</div>;

    return (
        <div>
            Beers
            {beers?.map((beer: any) => (<div>{beer.name}</div>))}
        </div>
    );
}