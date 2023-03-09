export class Links implements ILinks {
  ddi: string;
  phoneNumber: string;
  message?: string;

  constructor(phoneNumber: string, ddi: string, message?: string) {
    let phoneNumberTemp = phoneNumber.replace(/\D/gim, "");
    if (ddi.length > 4) {
      throw Error("Invalid DDI character size!");
    }
    this.ddi = ddi;
    this.phoneNumber = phoneNumberTemp;
    this.message = message;
  }

  get() {
    return {
      ddi: this.ddi,
      phoneNumber: this.phoneNumber,
      message: this.message,
    };
  }

  createLink(openApp = false) {
    if (openApp) {
      https: return `whatsapp://send/?phone=${this.ddi}${this.phoneNumber}`;
    }
    return `https://wa.me/${this.ddi}${this.phoneNumber}`;
  }

  createLinkWithMessage(openApp = false) {
    let link = this.createLink(openApp);
    link += `${openApp ? "&" : "?"}text=${this.message?.replaceAll(" ", "+")}`;
    return link;
  }
}
