import { useEffect, useState } from "react";
import { BreweryRequestBody, BreweryResponseBody } from "../../interfaces/breweryInterface";
import { breweryValidateField } from "../../utils/breweryValidation";

export default function BreweryForm({ initialData, onSubmit }: { initialData?: BreweryResponseBody, onSubmit: (data: BreweryRequestBody) => void }) {
    const [brewery, setBrewery] = useState<BreweryRequestBody>(initialData || {
        name: "",
        country: "",
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        if (initialData) {
            setBrewery(initialData);
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Validation
        const error = breweryValidateField(e.target.id, e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, [e.target.id]: error }));

        // Mise à jour du state
        setBrewery({
            ...brewery,
            [e.target.id]: e.target.value,
        });
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        onSubmit(brewery);
    }

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col">
                <label className="text-amber-900 font-semibold" htmlFor="name">Nom</label>
                <input onChange={handleChange} className="border border-amber-900 rounded-md p-2" type="text" id="name" value={brewery.name} />
                {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="flex flex-col">
                <label className="text-amber-900 font-semibold" htmlFor="country">Pays</label>
                <input onChange={handleChange} className="border border-amber-900 rounded-md p-2" type="text" id="country" value={brewery.country} />
                {errors.country && <span className="error">{errors.country}</span>}
            </div>
            <button className="bg-amber-900  text-white px-4 py-2 rounded-md">Ajouter</button>
        </form>
    )
}