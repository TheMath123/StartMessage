import { html } from "lithen-tag-functions";

export function Footer() {
  const githubIcon = "/icons/github.svg";

  return html` <footer>
    <a
      href="https://github.com/TheMath123/StartMessage"
      rel="noreferrer"
      class="hover:opacity-70 transition-opacity"
      title="Github Repository"
    >
      <img
        src=${githubIcon}
        alt="Repositório do Github"
        class="text-font h-10"
      />
    </a>
  </footer>`;
}
