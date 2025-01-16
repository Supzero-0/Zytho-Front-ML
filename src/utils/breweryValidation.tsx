export const breweryValidateField = (name: string, value: string) => {
    switch (name) {
        case "name":
            return value.trim() ? "" : "Le nom est requis";
        case "country":
            return value.trim() ? "" : "Le pays est requis";
        default:
            return "";
    }
};