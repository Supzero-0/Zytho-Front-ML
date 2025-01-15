import { useState } from "react";
import { BeerRequestBody } from "../../interfaces/beerInterface";
import { BeerService } from "../../services/beerService";
import { redirect } from "react-router-dom";

export default function BeerAdd(): JSX.Element {
    const [beer, setBeer] = useState<BeerRequestBody>({
        name: "",
        description: "",
        abv: 0,
        price: 0,
        id_brewery: 1,
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateField = (name: string, value: any) => {
        switch (name) {
            case "name":
                return value.trim() ? "" : "Le nom est requis";
            case "description":
                return value.trim() ? "" : "La description est requise";
            case "abv":
                if (value <= 0) {
                    return "Le taux d'alcool doit être supérieur à 0";
                } else if (value > 20) {
                    return "Le taux d'alcool doit être inférieur à 20";
                }
                break;
            case "price":
                if (value <= 0) {
                    return "Le prix doit être supérieur à 0";
                }
                break;
            case "id_brerwery":
                if (!Number.isInteger(value) || value <= 0) {
                    return "L'identifiant de la brasserie doit être un entier positif.";
                }
                break;
            default:
                return "";
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        // Validation
        const error = validateField(e.target.id, e.target.value) || "";
        setErrors((prevErrors) => ({ ...prevErrors, [e.target.id]: error }));

        // Mise à jour du state
        setBeer({
            ...beer,
            [e.target.id]: e.target.value,
        });
    };

    const handleCreate = async () => {
        await BeerService.createBeer(beer);
        return redirect("/beers");
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
                    <label className="text-amber-900 font-semibold" htmlFor="description">Description</label>
                    <input onChange={handleChange} className="border border-amber-900 rounded-md p-2" type="text" id="description" />
                    {errors.description && <span className="error">{errors.description}</span>}
                </div>
                <div className="flex flex-col">
                    <label className="text-amber-900 font-semibold" htmlFor="abv">Taux d'alcool</label>
                    <input onChange={handleChange} className="border border-amber-900 rounded-md p-2" type="text" id="abv" />
                    {errors.abv && <span className="error">{errors.abv}</span>}
                </div>
                <div className="flex flex-col">
                    <label className="text-amber-900 font-semibold" htmlFor="price">Prix</label>
                    <input onChange={handleChange} className="border border-amber-900 rounded-md p-2" type="text" id="price" />
                    {errors.price && <span className="error">{errors.price}</span>}
                </div>
                <div className="flex flex-col">
                    <label className="text-amber-900 font-semibold" htmlFor="id_brewery">Brasserie</label>
                    <input onChange={handleChange} className="border border-amber-900 rounded-md p-2" type="text" id="id_brewery" />
                    {errors.id_brewery && <span className="error">{errors.id_brewery}</span>}
                </div>
                <button onClick={handleCreate} className="bg-amber-900 text-white px-4 py-2 rounded-md">Ajouter</button>
            </form>
        </div>
    )
}