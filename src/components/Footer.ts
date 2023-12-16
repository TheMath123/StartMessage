import { html } from "lithen-tag-functions";

export function Footer() {
  const githubIcon = "/icons/github.svg";

  return html` <footer class="flex flex-col mt-16 gap-3">
    <div
      class="flex flex-row justify-around items-center max-md:flex-col max-md:gap-3"
    >
      <span class="font-semibold text-font">
        Created with 💖 by
        <a
          href="https://matheuspa.com"
          class="underline hover:opacity-70 transition-opacity"
        >
          Matheus Agostinho
        </a>
      </span>

      <div class="flex flex-row items-center gap-2">
        <span class="font-semibold text-font">Repository of this project</span>
        <a
          href="https://github.com/TheMath123/StartMessage"
          rel="noreferrer"
          class="hover:opacity-70 transition-opacity"
          title="Github Repository"
        >
          <img
            src=${githubIcon}
            alt="Repositório do Github"
            class="text-font h-8 w-8"
          />
        </a>
      </div>
    </div>

    <span class="flex flex-row self-center gap-2 font-light text-font">
      Powered by
      <a
        href="https://www.npmjs.com/package/lithen-tag-functions"
        rel="noreferrer"
        class="underline hover:opacity-70 transition-opacity"
        title="Lithen Repository"
        >Lithen</a
      >
      library
    </span>
  </footer>`;
}
