import { html } from "lithen-tag-functions";

export function underMaintenance() {
  return html`
    <div class="w-screen h-screen absolute z-30 top-0 left-0">
      <div class="absolute z-50 p-8 ">
        <h1 class="font-bold text-3xl">Under maintenance</h1>
        <p class="font-semibold text-2xl">
          Application unavailable due to problems, but we are already solving
          it.
        </p>
      </div>

      <div class="w-full h-full absolute bg-black opacity-60"></div>
    </div>
  `;
}
