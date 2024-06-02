import axios from 'axios';
const apiUrl = process.env.EXPO_PUBLIC_API_URL;
export const fetchReports = async (props: any) => {
	const config = {
		headers: {
			Authorization: `Bearer ${props?.token}`,
		},
	};
	try {
		const data = await axios
			.get(`${apiUrl}/reports`, config)
			.then((res) => res.data);
		// console.log('fetchuser data', data);
		return data;
	} catch (error: any) {
		console.log(error.message);
		return error;
	}
};

export const fetchReport = async (props: any) => {
	const config = {
		headers: {
			Authorization: `Bearer ${props?.token}`,
		},
	};
	try {
		const data = await axios
			.get(`${apiUrl}/reports/${props.id}`, config)
			.then((res) => res.data);
		// console.log('fetchuser data', data);
		return data;
	} catch (error: any) {
		console.log(error.message);
		return error;
	}
};
