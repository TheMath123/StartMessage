export class Links implements ILinksProps {
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

  createLink() {
    return `https://wa.me/${this.ddi}${this.phoneNumber}`;
  }

  createApplicationLink() {
    return `whatsapp://send/?phone=${this.ddi}${this.phoneNumber}`;
  }
}
