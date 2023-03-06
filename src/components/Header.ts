import { html } from "lithen-tag-functions";

export function HeaderApp() {
  // Images
  const logoIcon = "/icons/startmessage.svg";
  const githubIcon = "/icons/github.svg";

  // HeaderApp
  return html`
    <header class="flex flex-col gap-4 flex-wrap" >
        <div class="flex flex-row justify-between items-center">
          <div class="flex flex-row justify-start items-center gap-4">
            <img
              src=${logoIcon}
              alt="Logo do StartMessage, um balão parecido com do WhatsApp, mas com cara fofinha."
              class="text-font"
            />
            <h1 class="text-4xl text-font font-bold">Start Message</h1>
          </div>
          <a
            href="https://github.com/TheMath123/StartMessage"
            rel="noreferrer"
            class="hover:opacity-70 transition-opacity"
            title="Github Repository"
          >
            <img src=${githubIcon} alt="Repositório do Github" class="text-font h-10" />
          </a>
        </div>
        <h2 class="text-lg text-font font-medium">Create a link to start a conversation on WhatsApp.</h2>
      </div>
    </header>
  `;
}
