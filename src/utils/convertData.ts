export const transformData = (
	data: Record<string, CountryRawData>,
): CountryData[] => {
	return Object.entries(data).map(([key, value]) => ({
		name: value.country_name,
		value: value.dialling_code,
		country: key,
	}));
};
