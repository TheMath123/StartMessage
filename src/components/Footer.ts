import { html } from "lithen-tag-functions";

export function Footer() {
  const githubIcon = "/icons/github.svg";

  return html` <footer
    class="flex flex-row items-center justify-around max-md:flex-col mt-16"
  >
    <span class="font-semibold text-font"
      >Created with 💖 by
      <a
        href="https://matheuspa.me"
        class="underline hover:opacity-70 transition-opacity"
      >
        Matheus Agostinho
      </a>
    </span>

    <div class="flex flex-row items-center gap-2">
      <span class="font-semibold text-font"> Repository of this project</span>
      <a
        href="https://github.com/TheMath123/StartMessage"
        rel="noreferrer"
        class="hover:opacity-70 transition-opacity"
        title="Github Repository"
      >
        <img
          src=${githubIcon}
          alt="Repositório do Github"
          class="text-font h-8"
        />
      </a>
    </div>
  </footer>`;
}
