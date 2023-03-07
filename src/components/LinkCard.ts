import { DataSignal, html, ref } from "lithen-tag-functions";

type LinkCardProps = {
  show?: DataSignal<boolean>;
  link: DataSignal<null | ILinks>;
};

export function LinkCard({ show, link }: LinkCardProps) {
  const divRef = ref<HTMLDivElement>();

  // Images
  const copyIcon = "/icons/copy-link.svg";
  const openInNewIcon = "/icons/open-in-new.svg";

  const urlLink = link.get()?.createLink();
  const urlLinkAplication = link.get()?.createApplicationLink();
  console.log(urlLink, urlLinkAplication);

  return html`<div class="hidden flex-col bg-box shadow-xl rounded-xl p-4">
    <div
      class="flex justify-between items-center bg-zinc-900 rounded-xl p-4 text-font font-semibold "
    >
      <a
        .href=${urlLinkAplication || ""}
        .target=${"_blank"}
        class="flex flex-row gap-2 items-center hover:opacity-70 transition-opacity"
      >
        <img
          src=${openInNewIcon}
          alt="Open the link"
          class="text-font h-4 hover:opacity-70 transition-opacity"
        />
        ${urlLink}
      </a>

      <button
        class="flex flex-row gap-2 items-center justify-center bg-zinc-700 py-2 px-3 rounded-xl hover:opacity-70 transition-opacity"
      >
        <img
          src=${copyIcon}
          alt="Copy link"
          class="text-font h-4 hover:opacity-70 transition-opacity"
        />
        Copy link
      </button>
    </div>
  </div>`;
}
