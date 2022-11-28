import { apiDashboardRoutes, apiRoutes, userRoutes } from './apiRoutes';
import { getRequest, postRequest } from '../lib/requests';
import { IGeneralStats, IUserList } from '../types/api';
import {
	TFetchHashtagsAbundance,
	TFetchInfluentialTweets,
	TFetchSearchTweets,
	TFetchSocialNetwork,
	TFetchTweetsHourly,
	TFetchTweetsLanguages,
	TFetchTweetsMonthly,
	TFetchTweetsSource,
	TFetchTweetsTypes,
	TFetchUser,
	TFetchUserGeneralStats,
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

export function fetchGeneralStats(query?: {}): Promise<IGeneralStats> {
	return getRequest(apiDashboardRoutes.general, query);
}

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
