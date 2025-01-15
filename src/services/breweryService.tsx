import { BreweryResponseBody, BreweryRequestBody } from "../interfaces/breweryInterface";
import { apiClient } from "./apiClient";

// Récupération des brasseries
const getBreweries = async (): Promise<BreweryResponseBody[]> => {
    const response = await apiClient.get('/breweries');
    return response.data;
};

// Création d'une brasserie
const createBrewery = async (brewery: BreweryRequestBody): Promise<BreweryRequestBody> => {
    const response = await apiClient.post('/breweries', brewery);
    return response.data;
}

export const BreweryService = {
    getBreweries,
    createBrewery,
};