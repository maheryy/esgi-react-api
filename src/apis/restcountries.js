const baseUrl = 'https://restcountries.eu/rest/v2';


export const fetchAllCountries = async () => {
    return await fetch(`${baseUrl}/all`).then(res => res.json());
}

export const fetchCountriesByCurrency = async (currency) => {
    return await fetch(`${baseUrl}/currency/${currency}`).then(res => res.json());
}