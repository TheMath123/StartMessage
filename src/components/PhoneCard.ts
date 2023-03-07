import { html, ref, signal } from "lithen-tag-functions";
import { Links } from "../helpers/Links";

import countryCodes from "../assets/CountryCodes.json";

export const dataPhone = signal({});

export function PhoneCard() {
  let isEmpty = signal(true);
  const selectRef = ref<HTMLSelectElement>();
  const inputRef = ref<HTMLInputElement>();

  const checkInput = (event: any) => {
    let strValue = event.currentTarget.value ?? "";

    if (strValue.length <= 8) {
      isEmpty.set(true);
    } else if (isEmpty.get()) {
      isEmpty.set(false);
    }
  };

  const handlerSubmit = () => {
    const ddi = selectRef.el?.value ?? "";
    const phoneNumber = inputRef.el?.value ?? "";

    dataPhone.set(new Links(phoneNumber, ddi));

    console.log(dataPhone.get());
  };

  return html`<div
    class="flex flex-col bg-box shadow-xl rounded-xl p-4 justify-center imte text-center gap-2 flex-wrap"
  >
    <div class="flex flex-row justify-between items-center gap-4">
      <select
        ref=${selectRef}
        id="ddi"
        class="text-font px-6 py-3 rounded-xl bg-zinc-900"
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

      <input
        ref=${inputRef}
        type="number"
        class="text-font px-6 py-3 rounded-xl bg-zinc-900 placeholder:font-semibold"
        placeholder="Phone Number"
        on-input=${(event: Event) => checkInput(event)}
      />

      <button
        class="bg-button px-4 py-2 text-font font-bold font-sans rounded-xl hover:opacity-70 transition-opacity disabled:bg-slate-500 disabled:cursor-default disabled:hover:opacity-100"
        .onclick=${handlerSubmit}
        .disabled=${isEmpty}
      >
        Create link
      </button>
    </div>
    <span class="text-font text-base font-light"
      >Enter only the number. Ex. (11)01234-4321 or 123-123-1234</span
    >
  </div> `;
}
