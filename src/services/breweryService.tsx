import { BreweryResponseBody } from "../interfaces/breweryInterface";
import { apiClient } from "./apiClient";

// Récupération des bières
const getBreweries = async (): Promise<BreweryResponseBody[]> => {
    const response = await apiClient.get('/breweries');
    return response.data;
};

export const BreweryService = {
    getBreweries,
};