import Image from "next/image";
import { useState } from "react";
import { delay } from "@/utils/delay";
import { CopyButton } from "./components/CopyButton";

interface LinkCardProps {
	urlOpen: string;
	urlCopy: string;
}

export function LinkCard({ urlCopy, urlOpen }: LinkCardProps) {
	const [showCopyAlertMessage, setShowCopyAlertMessage] = useState(false);

	async function handleCopyURL() {
		setShowCopyAlertMessage(true);
		navigator.clipboard.writeText(urlCopy);
		await delay(1200);
		setShowCopyAlertMessage(false);
	}

	return (
		<section className="flex flex-col w-full max-w-2xl gap-8 p-8 border border-text border-opacity-20 bg-background rounded-lg items-center justify-center sm:flex-row">
			<div className="flex flex-row gap-4 w-full">
				<Image
					width={24}
					height={24}
					src={"icons/link-external.svg"}
					alt={""}
				/>
				<div className="w-full">
					<a
						href={urlOpen}
						target="_blank"
						className="max-w-[400px] w-full text-white text-base font-normal underline break-all"
					>
						{urlCopy}
					</a>
				</div>
			</div>
			<div className="relative">
				<CopyButton onClick={() => handleCopyURL()} />
				{showCopyAlertMessage && (
					<span className="absolute top-12 left-1/2 -translate-x-1/2 text-sm text-neutral-200 rounded-sm bg-slate-800 py-1 px-2 w-28 text-center">
						URL Coppied
					</span>
				)}
			</div>
		</section>
	);
}
