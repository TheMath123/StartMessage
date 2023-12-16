const API_LAYER_KEY = process.env.API_LAYER_KEY;

export async function fetchCountries() {
  const data = await fetch(
    `http://apilayer.net/api/countries?access_key=${API_LAYER_KEY}`,
  );
  const response = await data.json();
  return response;
}
