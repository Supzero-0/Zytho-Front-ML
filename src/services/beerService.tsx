import { BeerResponseBody, BeerRequestBody } from "../interfaces/beerInterface";
import { apiClient } from "./apiClient";

// Récupération des bières
const getBeers = async (): Promise<BeerResponseBody[]> => {
    const response = await apiClient.get('/beers');
    return response.data;
};

// Création d'une bière
const createBeer = async (beer: BeerRequestBody): Promise<BeerRequestBody> => {
    const response = await apiClient.post('/beers', beer);
    return response.data;
};

// Update d'une bière
const updateBeer = async (beer: BeerResponseBody): Promise<BeerResponseBody> => {
    const response = await apiClient.put(`/beers/${beer.id_beer}`, beer);
    return response.data;
};

// Suppression d'une bière
const deleteBeer = async (id_beer: number): Promise<void> => {
    await apiClient.delete(`/beers/${id_beer}`);
};

// Récupération des bières par brasserie
const getBeersByBrewery = async (breweryId: number): Promise<BeerResponseBody[]> => {
    const response = await apiClient.get(`/breweries/${breweryId}/beers`);
    return response.data;
};

export const BeerService = {
    getBeers,
    createBeer,
    updateBeer,
    deleteBeer,
    getBeersByBrewery,
};