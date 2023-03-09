import "../components";
import { html, signal, withSignal } from "lithen-tag-functions";
import { Footer, HeaderApp, LinkCard, PhoneCard } from "../components";

export function Home() {
  const show = signal(false);
  const link = signal<null | ILinks>(null);

  show.onChange((show, _) => {
    if (show) {
    }
  });

  const underMaintenance = () => {
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
  };

  return html`<div
    class="flex flex-col h-full gap-4 py-4 px-8 max-w-3xl max-md:py-2 max-md:px-4 relative"
  >
    ${[
      underMaintenance(),
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
