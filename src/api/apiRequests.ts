import { apiAdminRoutes, apiDashboardRoutes, apiRoutes, userRoutes } from './apiRoutes';
import { getRequest, postRequest } from '../lib/requests';
import { IUserList } from '../types/api';
import {
	TAddProfiles,
	TAddToken,
	TFetchGeneralStats,
	TFetchHashtagsAbundance,
	TFetchInfluentialTweets,
	TFetchProfilesInfluence,
	TFetchSearchTweets,
	TFetchSocialNetwork,
	TFetchToken,
	TFetchTweetsHourly,
	TFetchTweetsLanguages,
	TFetchTweetsMonthly,
	TFetchTweetsSource,
	TFetchTweetsTypes,
	TFetchUser,
	TFetchUserGeneralStats,
	TFetchWordCloud,
	TFetchWordsInfluence,
	TFetchWordsWar,
	TUpdateProfiles,
} from '../types/requests';

interface IApiSignIn {
	username: string;
	password: string;
}

export function apiSignIn(body: IApiSignIn) {
	return postRequest(apiRoutes.login, body);
}

export function apiCheckSignIn() {
	return getRequest(apiRoutes.isSignedIn);
}

export function apiSignOut() {
	return getRequest(apiRoutes.logout);
}

export const fetchGeneralStats: TFetchGeneralStats = query => {
	return getRequest(apiDashboardRoutes.general, query);
};

export const fetchHashtagsAbundance: TFetchHashtagsAbundance = query => {
	return getRequest(apiDashboardRoutes.hashtagsAbundance, query);
};

export const fetchInfluentialTweets: TFetchInfluentialTweets = query => {
	return getRequest(apiDashboardRoutes.mostInfluentialTweets, query);
};

export const fetchSocialNetwork: TFetchSocialNetwork = query => {
	return getRequest(apiDashboardRoutes.socialNetwork, query);
};

export const fetchTweetsTypes: TFetchTweetsTypes = query => {
	return getRequest(apiDashboardRoutes.tweetsTypes, query);
};

export const fetchTweetsLanguages: TFetchTweetsLanguages = query => {
	return getRequest(apiDashboardRoutes.tweetsLanguages, query);
};

export const fetchTweetsSource: TFetchTweetsSource = query => {
	return getRequest(apiDashboardRoutes.tweetsSource, query);
};

export const fetchTweetsMonthly: TFetchTweetsMonthly = query => {
	return getRequest(apiDashboardRoutes.tweetsMonthly, query);
};

export const fetchTweetsHourly: TFetchTweetsHourly = query => {
	return getRequest(apiDashboardRoutes.tweetsHourly, query);
};

export const fetchUsers = (): Promise<IUserList[]> => {
	return getRequest(apiDashboardRoutes.users);
};

export const fetchSearchTweets: TFetchSearchTweets = query => {
	return getRequest(apiDashboardRoutes.searchTweets, query);
};

export const fetchUser: TFetchUser = username => {
	return getRequest(`${apiDashboardRoutes.user}/${username}`);
};

export const fetchUserGeneralStats: TFetchUserGeneralStats = (username, query) => {
	return getRequest(
		`${apiDashboardRoutes.user}/${username}${userRoutes.general}`,
		query,
	);
};

export const fetchWordsWar: TFetchWordsWar = query => {
	return getRequest(apiDashboardRoutes.wordsWar, query);
};

export const fetchWordCloud: TFetchWordCloud = query => {
	return getRequest(apiDashboardRoutes.wordCloud, query);
};

export const fetchWordsInfluence: TFetchWordsInfluence = query => {
	return getRequest(apiDashboardRoutes.wordsInfluence, query);
};

export const fetchProfilesInfluence: TFetchProfilesInfluence = query => {
	return getRequest(apiDashboardRoutes.profilesInfluence, query);
};

export const updateProfiles: TUpdateProfiles = query => {
	return getRequest(apiDashboardRoutes.updateUsers, query);
};

export const addProfiles: TAddProfiles = query => {
	return getRequest(apiDashboardRoutes.addUsers, query);
};

export const addToken: TAddToken = token => {
	return postRequest(apiAdminRoutes.token, token);
};

export const fetchToken: TFetchToken = () => {
	return getRequest(apiAdminRoutes.token);
};
