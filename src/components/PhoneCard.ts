import {
  DataSignal,
  html,
  ref,
  signal,
  withSignal,
} from "lithen-tag-functions";
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
  const selectRef = ref<HTMLSelectElement>();
  const phoneNumberInputRef = ref<HTMLInputElement>();
  const messageInputRef = ref<HTMLInputElement>();

  const checkMessageLength = (event: any) => {
    const strValue = event.currentTarget.value ?? "";

    if (strValue && strValue.length > 0) messageLength.set(strValue.length);
  };

  const checkInput = (event: any) => {
    const strValue = event.currentTarget.value ?? "";

    if (strValue.length <= 8) {
      isEmpty.set(true);
    } else if (isEmpty.get()) {
      isEmpty.set(false);
    }
  };

  const handlerSubmit = () => {
    const ddi = selectRef.el?.value ?? "";
    const phoneNumber = phoneNumberInputRef.el?.value ?? "";
    const message = messageInputRef.el?.value;
    const link = new Links(phoneNumber, ddi, message);

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
          ref=${selectRef}
          id="ddi"
          class="font-semibold text-font px-6 py-3 rounded-xl bg-zinc-900 w-full"
        >
          ${countryCodes.map((item: CountryCodeProps, index: number) => {
            return html` <option
              value="${item.dial_code}"
              .selected=${index === 29}
            >
              ${item.name}
            </option>`;
          })}
        </select>
      </div>

      <div class="flex flex-col w-full">
        <h2 class="font-semibold self-start">Phone Number *</h2>
        <input
          ref=${phoneNumberInputRef}
          type="tel"
          class="text-font px-6 py-3 rounded-xl bg-zinc-900 placeholder:font-semibold w-full"
          placeholder="Ex.: (11)01234-4321 or 123-123-1234"
          on-input=${(event: Event) => checkInput(event)}
        />
      </div>

      <div class="flex flex-col w-full">
        <h2 class="font-semibold self-start">Message</h2>
        <input
          ref=${messageInputRef}
          type="text"
          class="text-font px-6 py-3 rounded-xl bg-zinc-900 placeholder:font-semibold w-full"
          placeholder="Ex.: Hello Et Bilu"
          maxlength=${255}
          on-input=${(event: Event) => checkMessageLength(event)}
        />
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
