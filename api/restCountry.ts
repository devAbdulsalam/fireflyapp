import axios from 'axios';
export const fetchCountries = async (props: any) => {
	try {
		const data = await axios
			.get(`https://restcountries.com/v2/all`)
			.then((res) => res.data)
			.then((data) => {
				let areaData = data.map((item) => {
					return {
						code: item.alpha2Code,
						item: item.name,
						callingCode: `+${item.callingCodes[0]}`,
						flag: `https://countryflagsapi.com/png/${item.name}`,
					};
				});
			});
		console.log('fetchuser data', data);
		return data;
	} catch (error: any) {
		console.log(error.message);
		return error;
	}
};
