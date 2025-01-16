import { useState } from "react";
import { BeerRequestBody, BeerResponseBody } from "../../interfaces/beerInterface";
import Biere from "../../assets/biere.jpg";
import BeerForm from "./BeerForm";
import { BeerService } from "../../services/beerService";

export default function BeerModal({ beer, closeModal, reload }: { beer: BeerResponseBody, closeModal: () => void, reload: () => void }) {
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleUpdate = async (data: BeerRequestBody) => {
        const updatedBeer: BeerResponseBody = { ...beer, ...data };
        await BeerService.updateBeer(updatedBeer);
        setIsEditing(false);
        reload();
    };

    const handleDelete = async () => {
        await BeerService.deleteBeer(beer.id_beer);
        reload();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-md">
                <div className="aspect-w-2 aspect-h-3 w-full overflow-hidden bg-gray-200">
                    <img
                        src={Biere}
                        alt={beer.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-4">
                    {isEditing ? (
                        <BeerForm initialData={beer} onSubmit={handleUpdate} />
                    ) : (
                        <>
                            <h3 className="text-lg font-semibold text-amber-900">{beer.name}</h3>
                            <p className="text-sm text-gray-600">{beer.description}</p>
                            <div className="mt-2 flex items-center justify-between">
                                <span className="text-sm font-medium text-amber-700">{beer.price}€</span>
                                <span className="text-sm text-gray-500">{beer.abv}% ABV</span>
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