import Image from "next/image";

export function CopyButton() {
  return (
    <button className="flex flex-row w-full sm:w-[200px] justify-center break-keep px-4 py-3 gap-2 bg-green-500 rounded-lg hover:bg-green-600 active:bg-green-700">
      <Image width={16} height={16} src={"icons/copy.svg"} alt={""} />
      <span className="text-neutral-800 text-sm font-bold">Copy URL</span>
    </button>
  );
}
