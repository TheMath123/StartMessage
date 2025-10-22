export class Formatter {
	static formatPhoneNumber(number: string) {
		const cleanNumber = number.replace(/\D/g, "");
		let pattern;
		if (cleanNumber.length <= 2) return number; // removing bug if you try delete a DDD number
		if (cleanNumber.length <= 10) pattern = /(\d{1,2})(\d{1,4})?(\d{1,4})?/;
		else pattern = /(\d{2})(\d{1,5})?(\d{1,4})?/;

		const formated = cleanNumber.replace(pattern, function (match, p1, p2, p3) {
			const arr = [];
			if (p1) arr.push(`(${p1}) `);
			if (p2) arr.push(p2);
			if (p3) arr.push(`-${p3}`);
			return arr.join("");
		});

		return formated;
	}
}
