import { html } from "lithen-tag-functions";

export function HeaderApp() {
  // Images
  const logoIcon = "/icons/startmessage.svg";

  // HeaderApp
  return html`
    <header class="flex flex-col gap-4 flex-wrap" >
        <div class="flex flex-row justify-between items-center ">
          <div class="flex flex-row justify-start items-center gap-2">
            <img
              src=${logoIcon}
              alt="Logo do StartMessage, um balão parecido com do WhatsApp, mas com cara fofinha."
              class="text-font h-12"
            />
            <h1 class="text-4xl text-button font-bold">Start Message</h1>
          </div>
          
        </div>
        <h2 class="text-lg text-font font-medium">Create a link to start a conversation on WhatsApp.</h2>
      </div>
    </header>
  `;
}
