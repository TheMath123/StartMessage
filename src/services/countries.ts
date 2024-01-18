import { env } from "@/env";

export async function fetchCountries() {
  const data = await fetch(
    `http://apilayer.net/api/countries?access_key=${env.API_LAYER_KEY}`,
  );
  const response = await data.json();
  return response;
}
