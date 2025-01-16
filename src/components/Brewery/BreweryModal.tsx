import { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import { BreweryRequestBody, BreweryResponseBody } from '../../interfaces/breweryInterface';
import { BeerResponseBody } from '../../interfaces/beerInterface';
import Brasserie from '../../assets/brasserie.jpeg';
import { BreweryService } from '../../services/breweryService';
import { BeerService } from '../../services/beerService';
import BreweryForm from './BreweryForm';
import BeerCard from '../Beer/BeerCard';


export default function BreweryModal({ brewery, closeModal, reload }: { brewery: BreweryResponseBody, closeModal: () => void, reload: () => void }) {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [beers, setBeers] = useState<BeerResponseBody[]>([]);

    const handleUpdate = async (data: BreweryRequestBody) => {
        const updateBrewey: BreweryResponseBody = { ...brewery, ...data };
        await BreweryService.updateBrewery(updateBrewey);
        setIsEditing(false);
        reload();
    };

    const handleDelete = async () => {
        await BreweryService.deleteBrewery(brewery.id_brewery);
        reload();
    };

    const loadBeers = async () => {
        try {
            const data = await BeerService.getBeersByBrewery(brewery.id_brewery);
            setBeers(data);
        } catch (err) {
            console.error("Erreur lors du chargement des bières :", err);
        }
    };

    useEffect(() => {
        loadBeers();
    }, [brewery.id_brewery]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg overflow-y-auto w-full max-w-4xl h-4/5">
                <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden bg-gray-200">
                    <img
                        src={Brasserie}
                        alt={brewery.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-4">
                    {isEditing ? (
                        <BreweryForm initialData={brewery} onSubmit={handleUpdate} />
                    ) : (
                        <>
                            <h2 className="text-xl font-semibold text-amber-900">{brewery.name}</h2>
                            <div className="mt-2 flex items-center text-gray-600">
                                <MapPin className="h-4 w-4 mr-1" />
                                <span className="text-sm">{brewery.country}</span>
                            </div>
                            <p className="mt-2 text-sm text-gray-500">Fondée en {new Date(brewery.created_at).getFullYear()}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                                {beers.map((beer) => (
                                    <BeerCard key={beer.id_beer} beer={beer} reload={loadBeers} />
                                ))}
                            </div>
                            <div className="mt-4 flex justify-between space-x-2">
                                <button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded-md">Supprimer</button>
                                <button onClick={() => setIsEditing(true)} className="bg-amber-900 text-white px-4 py-2 rounded-md">Modifier</button>
                            </div>
                        </>
                    )}
                    <button onClick={closeModal} className="mt-4 px-4 py-2 w-full bg-gray-600 text-white rounded-lg">Fermer</button>
                </div>
            </div>
        </div>
    )
}