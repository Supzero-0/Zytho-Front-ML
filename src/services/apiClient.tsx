import axios from "axios";

export const apiClient = axios.create({
    baseURL: 'https://zythologue-beercraftapi-production.up.railway.app/api/v1',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

// Intercepteur pour gérer les erreurs globalement
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            console.error(
                `Erreur API : ${error.response.status} - ${error.response.data.message || error.message}`
            );
        } else {
            console.error(`Erreur de connexion : ${error.message}`);
        }
        return Promise.reject(error);
    }
);