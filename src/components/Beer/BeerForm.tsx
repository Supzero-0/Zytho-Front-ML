import { useEffect, useState } from "react";
import { BeerRequestBody, BeerResponseBody } from "../../interfaces/beerInterface";
import { beerValidateField } from "../../utils/beerValidation";

export default function BeerForm({ initialData, onSubmit }: { initialData?: BeerResponseBody, onSubmit: (beer: BeerRequestBody) => void }) {
    const [beer, setBeer] = useState<BeerRequestBody>(initialData || {
        name: "",
        description: "",
        abv: 0,
        price: 0,
        id_brewery: 1,
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        console.log(initialData);

        if (initialData) {
            setBeer(initialData);
        }
        console.log(beer);

    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Validation
        const error = beerValidateField(e.target.id, e.target.value) || "";
        setErrors((prevErrors) => ({ ...prevErrors, [e.target.id]: error }));

        // Mise à jour du state
        setBeer({
            ...beer,
            [e.target.id]: e.target.value,
        });
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        onSubmit(beer);
    }

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col">
                <label className="text-amber-900 font-semibold" htmlFor="name">Nom</label>
                <input onChange={handleChange} className="border border-amber-900 rounded-md p-2" type="text" id="name" value={beer.name} />
                {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="flex flex-col">
                <label className="text-amber-900 font-semibold" htmlFor="description">Description</label>
                <input onChange={handleChange} className="border border-amber-900 rounded-md p-2" type="text" id="description" value={beer.description} />
                {errors.description && <span className="error">{errors.description}</span>}
            </div>
            <div className="flex flex-col">
                <label className="text-amber-900 font-semibold" htmlFor="abv">Taux d'alcool</label>
                <input onChange={handleChange} className="border border-amber-900 rounded-md p-2" type="text" id="abv" value={beer.abv} />
                {errors.abv && <span className="error">{errors.abv}</span>}
            </div>
            <div className="flex flex-col">
                <label className="text-amber-900 font-semibold" htmlFor="price">Prix</label>
                <input onChange={handleChange} className="border border-amber-900 rounded-md p-2" type="text" id="price" value={beer.price} />
                {errors.price && <span className="error">{errors.price}</span>}
            </div>
            <div className="flex flex-col">
                <label className="text-amber-900 font-semibold" htmlFor="id_brewery">Brasserie</label>
                <input onChange={handleChange} className="border border-amber-900 rounded-md p-2" type="text" id="id_brewery" value={beer.id_brewery} />
                {errors.id_brewery && <span className="error">{errors.id_brewery}</span>}
            </div>
            <button className="bg-amber-900 text-white px-4 py-2 rounded-md">{initialData ? "Mettre à jour" : "Créer"}</button>
        </form>
    );
}