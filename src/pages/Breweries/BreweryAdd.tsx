import { BreweryRequestBody } from "../../interfaces/breweryInterface";
import { BreweryService } from "../../services/breweryService";
import { useNavigate } from "react-router-dom";
import BreweryForm from "../../components/Brewery/BreweryForm";

export default function BreweryAdd(): JSX.Element {
    const navigate = useNavigate();

    const handleCreate = async (data: BreweryRequestBody) => {
        await BreweryService.createBrewery(data);
        navigate("/breweries");
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-amber-900 mb-8">Nouvelle Brasserie Partenaire</h1>
            <BreweryForm onSubmit={handleCreate} />
        </div>
    )
}