const API_KEY = process.env.REACT_APP_RATE_API_KEY;
const baseUrl = 'https://v6.exchangerate-api.com/v6';


export const fetchCurrencyList = async () => {
    return await fetch(`${baseUrl}/${API_KEY}/codes`)
        .then(res => res.json())
        .then(data => data = data.supported_codes.map(el => ({ code: el[0], name: el[1] })));
}

export const fetchAllRates = async (base) => {
    return await fetch(`${baseUrl}/${API_KEY}/latest/${base}`)
        .then(res => res.json())
        .then(data => data = Object.entries(data.conversion_rates).map(el => ({ code: el[0], rate: el[1] })));
}

export const fetchRate = async (base, target) => {
    return await fetch(`${baseUrl}/${API_KEY}/pair/${base}/${target}`)
        .then(res => res.json())
        .then(data => data = data.conversion_rate);
}