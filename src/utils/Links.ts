export class Links implements ILinks {
	ddi: string;
	phone: string;
	message?: string;

	constructor(data: LinksObjectProps) {
		let phoneRaw = data.phone.replace(/\D/gim, "");
		if (data.ddi === "none" || !data.ddi || data.ddi === "") {
			throw Error("Invalid DDI!");
		}
		this.ddi = data.ddi;
		this.phone = phoneRaw;
		this.message = data.message?.trim();
	}

	get() {
		return {
			ddi: this.ddi,
			phone: this.phone,
			message: this.message,
		};
	}

	createLink({ openApp = false } = {}) {
		let baseURl = openApp
			? `whatsapp://send/?phone=${this.ddi}${this.phone}`
			: `https://wa.me/${this.ddi}${this.phone}`;
		let fullUrl = baseURl;

		if (this.message) {
			if (openApp) {
				fullUrl += "&text=" + encodeURI(this.message);
			} else {
				fullUrl += "?text=" + encodeURI(this.message);
			}
		}

		return fullUrl;
	}
}
