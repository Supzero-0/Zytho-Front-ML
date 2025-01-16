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

// Update d'une bière
const updateBrewery = async (brewery: BreweryResponseBody): Promise<BreweryResponseBody> => {
    const response = await apiClient.put(`/breweries/${brewery.id_brewery}`, brewery);
    return response.data;
};

// Suppression d'une bière
const deleteBrewery = async (id_brewery: number): Promise<void> => {
    await apiClient.delete(`/breweries/${id_brewery}`);
};

export const BreweryService = {
    getBreweries,
    createBrewery,
    updateBrewery,
    deleteBrewery,
};