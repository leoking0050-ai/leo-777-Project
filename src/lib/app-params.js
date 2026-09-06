const TOKEN_KEY = 'leo777_token';

const isClearAccessTokenRequested = () =>
	typeof window !== 'undefined' && new URLSearchParams(window.location.search).get("clear_access_token") === 'true';

const clearStoredAccessToken = () => {
	window.localStorage.removeItem(TOKEN_KEY);
	window.localStorage.removeItem('base44_access_token');
	window.localStorage.removeItem('token');
};

const getAccessToken = () => {
	if (typeof window === 'undefined') return null;
	return window.localStorage.getItem(TOKEN_KEY) || null;
};

const getAppParams = () => {
	if (isClearAccessTokenRequested()) {
		clearStoredAccessToken();
	}
	return {
		appId: 'leo777',
		token: getAccessToken(),
	};
};

export const appParams = {
	...getAppParams()
};
