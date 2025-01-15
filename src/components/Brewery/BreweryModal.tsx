import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { BreweryRequestBody, BreweryResponseBody } from '../../interfaces/breweryInterface';
import Brasserie from '../../assets/brasserie.jpeg';
import { BreweryService } from '../../services/breweryService';
import BreweryForm from './BreweryForm';

export default function BreweryModal({ brewery, closeModal, reload }: { brewery: BreweryResponseBody, closeModal: () => void, reload: () => void }) {
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleUpdate = async (data: BreweryRequestBody) => {
        const updateBrewey: BreweryResponseBody = { ...brewery, ...data };
        await BreweryService.updateBrewery(updateBrewey);
        setIsEditing(false);
        reload();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md">
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
                            <button onClick={() => setIsEditing(true)} className="bg-amber-900 text-white px-4 py-2 rounded-md">Modifier</button>
                        </>
                    )}

                    <button onClick={closeModal} className="mt-4 px-4 py-2 bg-amber-900 text-white rounded-lg">Fermer</button>
                </div>
            </div>
        </div>
    )
}