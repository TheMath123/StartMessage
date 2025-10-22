import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	ref?: any;
	label: string;
}

export function Button({ ref, label, ...props }: ButtonProps) {
	return (
		<button
			ref={ref}
			name={label}
			aria-label={label}
			className="w-full bg-green-500 text-neutral-800 font-bold text-lg rounded-lg py-2 px-4 hover:bg-green-600 active:bg-green-700"
			{...props}
		>
			{label}
		</button>
	);
}
