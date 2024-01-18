interface IForm {
  ddi: string;
  phone: string;
  message?: string;
}

interface CountryRawData {
  country_name: string;
  dialling_code: string;
}

interface CountryData {
  name: string;
  value: string;
}