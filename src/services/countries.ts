import { env } from "@/env";

export async function fetchCountries() {
  const data = await fetch(
    'https://api.apilayer.com/number_verification/countries',
    {
      headers: {
        apikey: env.API_LAYER_KEY,
      }
    }
  );

  const response = await data.json();
  return response;
}
