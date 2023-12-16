interface CountryData {
  country_name: string;
  dialling_code: string;
}

interface TransformedData {
  name: string;
  value: string;
}

export const transformData = (
  data: Record<string, CountryData>,
): TransformedData[] => {
  return Object.entries(data).map(([key, value]) => ({
    name: `${key} - ${value.country_name}`,
    value: value.dialling_code,
  }));
};
