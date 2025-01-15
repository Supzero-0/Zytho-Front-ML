export const beerValidateField = (name: string, value: any) => {
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