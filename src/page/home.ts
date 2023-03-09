import "../components";
import { html, signal, withSignal } from "lithen-tag-functions";
import { HeaderApp, LinkCard, PhoneCard } from "../components";

export function Home() {
  const show = signal(false);
  const link = signal<null | ILinks>(null);

  show.onChange((show, _) => {
    if (show) {
    }
  });

  return html`<div class="flex flex-col h-full gap-4 max-w-3xl">
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
    ]}
  </div>`;
}
