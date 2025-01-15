import { useState } from "react";
import { BeerResponseBody } from "../../interfaces/beerInterface";
import Biere from "../../assets/biere.jpg";
import BeerModal from "./BeerModal";

export default function BeerCard({ beer, reload }: { beer: BeerResponseBody, reload: () => void }) {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <button onClick={openModal} className="group">
                <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-105">
                    <div className="aspect-w-2 aspect-h-3 w-full overflow-hidden bg-gray-200">
                        <img
                            src={Biere}
                            alt={beer.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-semibold text-amber-900">{beer.name}</h3>
                        <p className="text-sm text-gray-600">{beer.description}</p>
                        <div className="mt-2 flex items-center justify-between">
                            <span className="text-sm font-medium text-amber-700">{beer.price}€</span>
                            <span className="text-sm text-gray-500">{beer.abv}% ABV</span>
                        </div>
                    </div>
                </div>
            </button>

            {isModalOpen && (
                <BeerModal beer={beer} closeModal={closeModal} reload={reload} />
            )}
        </>
    );
}