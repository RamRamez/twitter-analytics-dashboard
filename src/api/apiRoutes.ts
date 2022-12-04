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
	hashtagsAbundance: `${apiRoutes.dashboard}/hashtagsAbundance`,
	mostInfluentialTweets: `${apiRoutes.dashboard}/mostInfluentialTweets`,
	socialNetwork: `${apiRoutes.dashboard}/socialNetwork`,
	tweetsTypes: `${apiRoutes.dashboard}/tweetsTypes`,
	tweetsLanguages: `${apiRoutes.dashboard}/tweetsLanguages`,
	tweetsMonthly: `${apiRoutes.dashboard}/tweetsMonthly`,
	tweetsHourly: `${apiRoutes.dashboard}/tweetsHourly`,
	tweetsSource: `${apiRoutes.dashboard}/tweetsSource`,
	users: `${apiRoutes.dashboard}/users`,
	user: `${apiRoutes.dashboard}/user`,
	updateUsers: `${apiRoutes.dashboard}/updateUsers`,
	addUsers: `${apiRoutes.dashboard}/addUsers`,
	searchTweets: `${apiRoutes.dashboard}/searchTweets`,
	wordsWar: `${apiRoutes.dashboard}/wordsWar`,
	wordCloud: `${apiRoutes.dashboard}/wordCloud`,
	wordsInfluence: `${apiRoutes.dashboard}/wordsInfluence`,
	profilesInfluence: `${apiRoutes.dashboard}/profilesInfluence`,
};

export const userRoutes = {
	general: '/generalStats',
};
