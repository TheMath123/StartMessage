import { DataSignal, html } from "lithen-tag-functions";

type LinkCardProps = {
  link: DataSignal<null | ILinks>;
};

export function LinkCard({ link }: LinkCardProps) {
  // Images
  const copyIcon = "/icons/copy-link.svg";
  const openInNewIcon = "/icons/open-in-new.svg";

  const urlLink = link.get()?.createLink();
  const urlLinkAplication = link.get()?.createApplicationLink();

  const handlerCopyLink = () => {
    if (urlLink) {
      navigator.clipboard.writeText(urlLink);
    }
    console.log(navigator.clipboard.readText());
  };

  return html`<div class="flex flex-col bg-box shadow-xl rounded-xl p-4 w-full">
    <div
      class="flex justify-between items-center bg-zinc-900 rounded-xl p-4 text-font font-semibold max-md:flex-col gap-2"
    >
      <a
        .href=${urlLinkAplication || ""}
        .target=${"_blank"}
        class="flex flex-row gap-2 items-center py-4 px-2 hover:opacity-70 transition-opacity"
      >
        <img
          src=${openInNewIcon}
          alt="Open the link"
          class="text-font h-4 hover:opacity-70 transition-opacity"
        />
        ${urlLink}
      </a>

      <button
        class="flex flex-row gap-2 items-center justify-center bg-zinc-700 py-2 px-3 rounded-xl w-full hover:opacity-70 transition-opacity"
        on-click=${handlerCopyLink}
      >
        <img
          src=${copyIcon}
          alt="Copy link"
          class="text-font h-4 hover:opacity-70 transition-opacity justify-self-end"
        />
        Copy link
      </button>
    </div>
  </div>`;
}
