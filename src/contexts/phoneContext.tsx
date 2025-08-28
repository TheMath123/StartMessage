"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";
import countriesData from "@/assets/countries.json";
import { fetchCountries } from "@/services/countries";
import { fetchCountry } from "@/services/ipinfo";
import { transformData } from "@/utils/convertData";
import { Links } from "../utils/Links";

interface IChildrenProps {
	children: ReactNode;
}

type Countries = CountryData[];

interface IPhoneContextProps {
	urlOpen?: string;
	urlCopy?: string;
	countries?: Countries;
	createLink: (data: LinksObjectProps) => void;
	verifyCountryIndex: () => number | null;
}

// Context - In case you need to set default values within context
export const PhoneContext = createContext({} as IPhoneContextProps);

// Context Provider
export function PhoneContextProvider({ children }: IChildrenProps) {
	const [countries, setCountries] = useState<Countries>();
	const [userInfo, setUserInfo] = useState<UserInfo>();
	const [urlOpen, setUrlOpen] = useState("");
	const [urlCopy, setUrlCopy] = useState("");

	useEffect(() => {
		if (countriesData) {
			setCountries([
				{
					name: "Choose your country",
					value: "",
					country: "",
				},
				...transformData(countriesData),
			]);
		}
	}, []);

	const router = useRouter();
	const pathName = usePathname();

	useEffect(() => {
		const fetchUserData = async () => {
			const data = await fetchCountry();

			if (data.country) {
				router.replace(`${pathName}/?country=${data.country}`);
			}

			setUserInfo(data);
		};

		fetchUserData();
	}, [pathName, router]);

	function verifyCountryIndex() {
		let countryIndex = null;
		countries?.forEach((item, index) => {
			if (item.country === userInfo?.country) {
				countryIndex = index;
			}
		});
		return countryIndex;
	}

	function createLink(data: LinksObjectProps) {
		const link = new Links(data);

		const linkOpen = link.createLink({ openApp: true });
		const linkCopy = link.createLink();

		setUrlCopy(linkCopy);
		setUrlOpen(linkOpen);
	}

	return (
		<PhoneContext.Provider
			value={{ urlOpen, urlCopy, countries, createLink, verifyCountryIndex }}
		>
			{children}
		</PhoneContext.Provider>
	);
}

// Hack Hook
export function usePhoneUtils() {
	return useContext(PhoneContext);
}
