import { html } from "lithen-tag-functions";
import { dataPhone } from "./PhoneCard";

export function LinkCard() {
  // Images
  const copyIcon = "/icons/copy-link.svg";
  const openInNewIcon = "/icons/open-in-new.svg";

  console.log(dataPhone.get());

  // const dataPhoneLink = new Links(dataTemp.ddi, dataTemp.phoneNumber);
  // const urlLink = dataPhoneLink.createLink();
  // const urlLinkAplication = dataPhoneLink.createApplicationLink();

  // LinkCard
  return html` <div class="flex flex-col bg-box shadow-xl rounded-xl p-4">
    <div
      class="flex justify-between items-center bg-zinc-900 rounded-xl p-4 text-font font-semibold "
    >
      <a
        .href=${"urlLinkAplication"}
        .target=${"_blank"}
        class="flex flex-row gap-2 items-center hover:opacity-70 transition-opacity"
      >
        <img
          src=${openInNewIcon}
          alt="Open the link"
          class="text-font h-4 hover:opacity-70 transition-opacity"
        />
        ${"urlLink"}
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
