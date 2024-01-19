import { env } from "@/env";

export async function fetchCountry() {
  // First step: Obtain the IP
  const ipResponse = await fetch('https://ipinfo.io/ip');
  const ip = await ipResponse.text();

  // Second step: Obtain information about the country associated with the IP
  const url = `https://ipinfo.io/${ip}/json?token=${env.API_IPINFO_TOKEN}`;
  const countryResponse = await fetch(url);
  const countryInfo = await countryResponse.json();

  return countryInfo;
}
