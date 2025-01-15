import BeerForm from "../../components/Beer/BeerForm";
import { BeerRequestBody } from "../../interfaces/beerInterface";
import { BeerService } from "../../services/beerService";
import { useNavigate } from "react-router-dom";

export default function BeerAdd(): JSX.Element {
    const navigate = useNavigate();

    const handleCreate = async (data: BeerRequestBody) => {
        await BeerService.createBeer(data);
        navigate("/beers");
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-amber-900 mb-8">Nouvelle Brasserie Partenaire</h1>
            <BeerForm onSubmit={handleCreate} />
        </div>
    )
}