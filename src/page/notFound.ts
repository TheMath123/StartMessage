import "../components";
import { html } from "lithen-tag-functions";

export function NotFound() {
  return html`<div class="grid h-screen place-content-center">
    <div class="flex flex-col items-center gap-5 max-w-screen-sm">
      <span class="text-9xl">🤔</span>
      <h1 class="text-font font-semibold text-3xl text-center">
        Hey! I think you're looking for something that even you don't know!
      </h1>
      <a
        class="underline text-button text-2xl hover:opacity-70 transition-opacity"
        href="/"
        >Back</a
      >
    </div>
  </div>`;
}
