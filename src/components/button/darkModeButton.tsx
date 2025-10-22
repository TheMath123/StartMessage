import Image from "next/image";

interface DarkModeButtonProps {
	darkMode: boolean;
}

export function DarkModeButton({ darkMode }: DarkModeButtonProps) {
	return (
		<button className="px-1 py-1 bg-primary bg-opacity-20 rounded-full hover:brightness-90 active:brightness-75">
			{darkMode ? (
				<Image src="icons/dark.svg" width={24} height={24} alt="Dark Mode" />
			) : (
				<Image src="icons/light.svg" width={24} height={24} alt="Light Mode" />
			)}
		</button>
	);
}
