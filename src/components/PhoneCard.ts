import { DataSignal, html, signal, withSignal } from "lithen-tag-functions";
import { Links } from "../helpers/Links";

import countryCodes from "../assets/CountryCodes.json";

type PhoneCardProps = {
  updateInfoLink: (
    newValue: ILinks | ((value: ILinks | null) => ILinks | null) | null,
  ) => void;
  show: DataSignal<boolean>;
};

export function PhoneCard({ updateInfoLink, show }: PhoneCardProps) {
  const isEmpty = signal(true);
  const messageLength = signal(0);
  const ddi = signal("");
  const phoneNumber = signal("");
  const message = signal("");

  const handlerSelectDDI = (event: any) => {
    ddi.set(event.currentTarget.value);
  };

  const handlerChangePhoneNumber = (event: any) => {
    phoneNumber.set(event.currentTarget.value);

    if (phoneNumber.get().length <= 8) {
      isEmpty.set(true);
    } else if (isEmpty.get()) {
      isEmpty.set(false);
    }
  };

  const handlerChangeMessage = (event: any) => {
    message.set(event.currentTarget.value);

    if (message.get() && message.get().length > 0)
      messageLength.set(message.get().length);
  };

  const handlerSubmit = () => {
    const link = new Links(phoneNumber.get(), ddi.get(), message.get());

    updateInfoLink(link);
    show.set(true);

    // clearFields();
  };

  // const clearFields = () => {
  //   if (phoneNumberInputRef.el && messageInputRef.el) {
  //     phoneNumberInputRef.el.value = "";
  //     messageInputRef.el.value = "";
  //   }
  // };

  return html`<div
    class="flex flex-col bg-box shadow-xl rounded-xl p-4 justify-center imte text-center gap-2"
  >
    <div
      class="flex flex-col justify-between items-center gap-4"
    >
      <div class="flex flex-col w-full">
        <h2 class="font-semibold self-start">DDI *</h2>
        <select
          id="ddi"
          class="font-semibold text-font px-6 py-3 rounded-xl bg-zinc-900 w-full"
          on-change=${(event: Event) => handlerSelectDDI(event)}
        >
          ${countryCodes.map((item: CountryCodeProps, index: number) => {
            return html` <option
              value="${item.dial_code}"
              .selected=${index === 0}
            >
              ${item.name}
            </option>`;
          })}
        </select>
      </div>

      <div class="flex flex-col w-full">
        <h2 class="font-semibold self-start">Phone Number *</h2>
        <input
          type="tel"
          class="text-font px-6 py-3 rounded-xl bg-zinc-900 placeholder:font-semibold w-full"
          placeholder="Ex.: (11)01234-4321 or 123-123-1234"
          on-input=${(event: Event) => handlerChangePhoneNumber(event)}
        />
      </div>

      <div class="flex flex-col w-full">
        <h2 class="font-semibold self-start">Message</h2>
        <textarea
          type="text"
          class="text-font px-6 py-3 rounded-xl bg-zinc-900 resize-y min-h-[10%] placeholder:font-semibold w-full"
          placeholder="Ex.: Hello Et Bilu"
          maxlength=${255}
          rows=4
          on-input=${(event: Event) => handlerChangeMessage(event)}
        ></textarea>
        <div class="flex justify-end">
          ${withSignal(messageLength, (strlength) => {
            if (strlength > 1) {
              return html`
                <span class="font-light self-end"
                  >Number of characters ${messageLength}/255</span
                >
              `;
            }
            return;
          })}
        </div>
      </div>

        <button
          class="bg-button px-4 py-2 text-font font-bold font-sans rounded-xl hover:opacity-70 transition-opacity disabled:bg-slate-500 w-full disabled:cursor-default disabled:hover:opacity-100"
          on-click=${handlerSubmit}
          disabled=${isEmpty}
        >
          Create link
        </button>
      </div>
      <span class="text-font text-base font-light"
        >Fields with * are mandatory.</span
      >
    </div>
  </div> `;
}
