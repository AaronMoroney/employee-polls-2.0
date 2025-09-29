export const fetchRequest = async (
	requestUrl: string,
	method: string,
	body?: {}
) => {
	const response = await fetch(requestUrl, {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	});

	const responseData = await response.json();

	if (!response.ok) {
		return { error: responseData };
	}
	return responseData;
};
