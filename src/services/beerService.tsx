import { BeerResponseBody } from "../interfaces/beerInterface";
import { apiClient } from "./apiClient";

// Récupération des bières
const getBeers = async (): Promise<BeerResponseBody[]> => {
    const response = await apiClient.get('/beers');
    return response.data;
};

export const BeerService = {
    getBeers,
};