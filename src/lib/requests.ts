export async function sendRequest(
	url: string,
	method: 'POST' | 'GET',
	body?: {},
	query?: {},
) {
	const headers = {
		'Content-Type': 'application/json',
	};
	try {
		return fetch(`${url}?${new URLSearchParams(query)}`, {
			credentials: 'include',
			method,
			headers,
			body: JSON.stringify(body),
		}).then(async response => {
			if (response.ok) {
				return response.json();
			}
			const errorObject = await response.json();
			const errorMessage = errorObject?.message ?? 'An error occurred';
			return Promise.reject(new Error(errorMessage));
		});
	} catch (error) {
		return Promise.reject(error);
	}
}

export function getRequest(url: string, query: {} = {}) {
	return sendRequest(url, 'GET', undefined, query);
}

export function postRequest(url: string, body: {} = {}) {
	return sendRequest(url, 'POST', body);
}
