const useFormatting = () => {
	const dateFormatting = (value: string): string => {
		const date = new Date(value);

		let DD: number | string = date.getDate();
		if (DD < 10) DD = '0' + DD;

		let MM: number | string = date.getMonth() + 1;
		if (MM < 10) MM = '0' + MM;

		let YY: number | string = date.getFullYear() % 100;
		if (YY < 10) YY = '0' + YY;

		let hh: number | string = date.getHours();
		if (hh < 10) hh = '0' + hh;

		let mm: number | string = date.getMinutes();
		if (mm < 10) mm = '0' + mm;

		return `${DD}/${MM}/${YY}, ${hh}:${mm}`;
	};

	return {
		dateFormatting
	};
}

export default useFormatting;