import { useState } from "react";
import { BreweryRequestBody } from "../../interfaces/breweryInterface";
import { BreweryService } from "../../services/breweryService";
import { redirect } from "react-router-dom";

export default function BreweryAdd(): JSX.Element {
    const [brewery, setBrewery] = useState<BreweryRequestBody>({
        name: "",
        country: "",
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateField = (name: string, value: string) => {
        switch (name) {
            case "name":
                return value.trim() ? "" : "Le nom est requis";
            case "country":
                return value.trim() ? "" : "Le pays est requis";
            default:
                return "";
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        // Validation
        const error = validateField(e.target.id, e.target.value);
        setErrors((prevErrors) => ({ ...prevErrors, [e.target.id]: error }));

        // Mise à jour du state
        setBrewery({
            ...brewery,
            [e.target.id]: e.target.value,
        });
    };

    const handleCreate = async () => {
        await BreweryService.createBrewery(brewery);
        return redirect("/breweries");
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-amber-900 mb-8">Nouvelle Brasserie Partenaire</h1>
            <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex flex-col">
                    <label className="text-amber-900 font-semibold" htmlFor="name">Nom</label>
                    <input onChange={handleChange} className="border border-amber-900 rounded-md p-2" type="text" id="name" />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="flex flex-col">
                    <label className="text-amber-900 font-semibold" htmlFor="country">Pays</label>
                    <input onChange={handleChange} className="border border-amber-900 rounded-md p-2" type="text" id="country" />
                    {errors.country && <span className="error">{errors.country}</span>}
                </div>
                <button onClick={handleCreate} className="bg-amber-900  text-white px-4 py-2 rounded-md">Ajouter</button>
            </form>
        </div>
    )
}