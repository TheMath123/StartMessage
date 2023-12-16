"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { fetchCountries } from "@/services/countries";
import { transformData } from "@/utils/convertData";
import { Links } from "../utils/Links";

interface IChildrenProps {
  children: ReactNode;
}

interface IPhoneContextProps {
  urlOpen?: string;
  urlCopy?: string;
  fetchDDIs: () => Promise<any>;
  createLink: (data: LinksObjectProps) => void;
}

// Context - In case you need to set default values within context
export const PhoneContext = createContext({} as IPhoneContextProps);

// Context Provider
export function PhoneContextProvider({ children }: IChildrenProps) {
  const [urlOpen, setUrlOpen] = useState("");
  const [urlCopy, setUrlCopy] = useState("");

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
    <PhoneContext.Provider value={{ urlOpen, urlCopy, fetchDDIs, createLink }}>
      {children}
    </PhoneContext.Provider>
  );
}

// Hack Hook
export function usePhoneUtils() {
  return useContext(PhoneContext);
}
