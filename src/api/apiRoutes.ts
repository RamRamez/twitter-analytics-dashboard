const rootRoute = process.env.REACT_APP_BACKEND_URL;

export const apiRoutes = {
	root: rootRoute,
	isSignedIn: `${rootRoute}/isSignedIn`,
	login: `${rootRoute}/login`,
	logout: `${rootRoute}/logout`,
	admin: `${rootRoute}/admin`,
	dashboard: `${rootRoute}/dashboard`,
};

export const apiAdminRoutes = {
	addUser: `${apiRoutes.admin}/addUser`,
};

export const apiDashboardRoutes = {
	general: apiRoutes.dashboard,
	mostInfluentialTweets: `${apiRoutes.dashboard}/mostInfluentialTweets`,
};
