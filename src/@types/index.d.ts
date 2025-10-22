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
  country: string;
}

interface UserInfo {
  ip: string;
  hostname: string;
  city: string;
  region: string;
  country: string;
  loc: string;
  org: string;
  postal: string;
  timezone: string;
}
