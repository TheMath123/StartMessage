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
    console.log("Objeto Link", this.ddi, this.phoneNumber, this.message);
  }

  get() {
    console.log("Objeto Link", this.ddi, this.phoneNumber, this.message);
    return {
      ddi: this.ddi,
      phoneNumber: this.phoneNumber,
      message: this.message,
    };
  }

  createLink(openApp = false) {
    console.log("Objeto Link", this.ddi, this.phoneNumber, this.message);
    if (openApp) {
      https: return `whatsapp://send/?phone=${this.ddi}${this.phoneNumber}`;
    }
    return `https://wa.me/${this.ddi}${this.phoneNumber}`;
  }

  createLinkWithMessage(openApp = false) {
    console.log("Objeto Link", this.ddi, this.phoneNumber, this.message);
    let link = this.createLink(openApp);
    link += `${openApp ? "&" : "?"}text=${this.message?.replaceAll(" ", "+")}`;
    return link;
  }
}
