import "../components";
import { html } from "lithen-tag-functions";
import { HeaderApp, LinkCard, PhoneCard } from "../components";

export function Home() {
  return html`<div class="flex flex-col gap-4 flex-wrap">
    ${[HeaderApp(), PhoneCard(), LinkCard()]}
  </div>`;
}
