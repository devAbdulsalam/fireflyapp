export function addCountryCode(phoneNumber) {
	if (!phoneNumber) return '';

	const strippedPhoneNumber = phoneNumber.replace(/^0+/, ''); // remove all leading 0s
	const countryCode = '+234';

	if (strippedPhoneNumber.startsWith(countryCode)) {
		return strippedPhoneNumber.length <= 14
			? strippedPhoneNumber
			: strippedPhoneNumber.substring(0, 14);
	} else {
		const fullNumber = `${countryCode}${strippedPhoneNumber}`;
		return fullNumber.length <= 14 ? fullNumber : fullNumber.substring(0, 14);
	}
}
