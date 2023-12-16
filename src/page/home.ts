import "../components";
import { html, signal, withSignal } from "lithen-tag-functions";
import { Footer, HeaderApp, LinkCard, PhoneCard } from "../components";

export function Home() {
  const show = signal(false);
  const link = signal<null | ILinks>(null);

  return html`<div
    class="flex flex-col h-full gap-4 py-4 px-8 max-w-3xl max-md:py-2 max-md:px-4 relative"
  >
    ${[
      HeaderApp(),
      PhoneCard({
        updateInfoLink: link.set.bind(link),
        show,
      }),
      withSignal(show, (state) => {
        if (state) {
          return LinkCard({ link });
        }
        return;
      }),
      Footer(),
    ]}
  </div>`;
}
