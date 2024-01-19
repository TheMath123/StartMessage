"use client";

import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { transformData } from "@/utils/convertData";
import { Links } from "../utils/Links";
import countriesData from "@/assets/countries.json"
import { fetchCountries } from "@/services/countries";
import { fetchCountry } from "@/services/ipinfo";

interface IChildrenProps {
  children: ReactNode;
}

type Countries = CountryData[]

interface IPhoneContextProps {
  urlOpen?: string;
  urlCopy?: string;
  countries?:Countries;
  createLink: (data: LinksObjectProps) => void;
  verifyCountryIndex: ()=> number | null;
}

// Context - In case you need to set default values within context
export const PhoneContext = createContext({} as IPhoneContextProps);

// Context Provider
export function PhoneContextProvider({ children }: IChildrenProps) {
  const [countries, setCountries] = useState<Countries>()
  const [userInfo, setUserInfo] = useState<UserInfo>()
  const [urlOpen, setUrlOpen] = useState("");
  const [urlCopy, setUrlCopy] = useState("");

  useEffect(() => {
    if(countriesData){
      setCountries(transformData(countriesData))
    }
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await fetchCountry();
      setUserInfo(data);
    }

    fetchUserData()
  }, []);

  function verifyCountryIndex(){
    let countryIndex = null;
    countries?.forEach((item, index) => {if(item.country === userInfo?.country){
      countryIndex = index;
    }})
    return countryIndex;
  }

  async function fetchDDIs() {
    const data = await fetchCountries();
    const convertedObjData = transformData(data);
    return convertedObjData;
  }

  function createLink(data: LinksObjectProps) {
    const link = new Links(data);

    const linkOpen = link.createLink({ openApp: true });
    const linkCopy = link.createLink();

    setUrlCopy(linkCopy);
    setUrlOpen(linkOpen);
  }

  return (
    <PhoneContext.Provider value={{ urlOpen, urlCopy, countries, createLink, verifyCountryIndex }}>
      {children}
    </PhoneContext.Provider>
  );
}

// Hack Hook
export function usePhoneUtils() {
  return useContext(PhoneContext);
}
