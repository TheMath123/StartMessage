"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface IChildrenProps {
  children: ReactNode;
}

// Context - values
interface IPhoneContextProps {
  fetchDDIs: () => Promise<any>;
}

// Context - In case you need to set default values within context
export const PhoneContext = createContext({} as IPhoneContextProps);

// Context Provider
export function PhoneContextProvider({ children }: IChildrenProps) {
  const fetchDDIs = async () => {
    const data = await fetch(
      "http://apilayer.net/api/countries?access_key=323f683ca9910d7867ff11c41cde5e69",
    );
    const response = await data.json();
    return response;
  };

  return (
    <PhoneContext.Provider value={{ fetchDDIs }}>
      {children}
    </PhoneContext.Provider>
  );
}

// Hack Hook
export function usePhoneUtils() {
  return useContext(PhoneContext);
}
