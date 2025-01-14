import { useState } from 'react';
import { BreweryResponseBody } from '../../interfaces/breweryInterface';
import { MapPin } from 'lucide-react';
import Brasserie from '../../assets/brasserie.jpeg';
import BreweryModal from './BreweryModal';

export default function BreweryCard({ brewery }: { brewery: BreweryResponseBody }) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <button onClick={openModal} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-105">
                    <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden bg-gray-200">
                        <img
                            src={Brasserie}
                            alt={brewery.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-amber-900">{brewery.name}</h3>
                        <div className="mt-2 flex items-center text-gray-600">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span className="text-sm">{brewery.country}</span>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">Fondée en {new Date(brewery.created_at).getFullYear()}</p>
                    </div>
                </div>
            </button>

            {isModalOpen && (
                <BreweryModal brewery={brewery} closeModal={closeModal} />
            )}
        </>
    );
}