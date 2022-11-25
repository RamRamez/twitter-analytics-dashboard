import { apiDashboardRoutes, apiRoutes } from './apiRoutes';
import { getRequest, postRequest } from '../lib/requests';
import {
	IInfluentialTweets,
	ISocialNetwork,
	ITweetsHourly,
	ITweetsLanguages,
	ITweetsMonthly,
	ITweetsSource,
	ITweetsType,
} from '../types/api';

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

export function apiDashboardGeneral(query?: {}) {
	return getRequest(apiDashboardRoutes.general, query);
}

export function fetchInfluentialTweets(query?: {}): Promise<IInfluentialTweets> {
	return getRequest(apiDashboardRoutes.mostInfluentialTweets, query);
}

export function fetchSocialNetwork(query?: {}): Promise<ISocialNetwork[]> {
	return getRequest(apiDashboardRoutes.socialNetwork, query);
}

export function fetchTweetsTypes(query?: {}): Promise<ITweetsType[]> {
	return getRequest(apiDashboardRoutes.tweetsTypes, query);
}

export function fetchTweetsLanguages(query?: {}): Promise<ITweetsLanguages[]> {
	return getRequest(apiDashboardRoutes.tweetsLanguages, query);
}

export function fetchTweetsMonthly(query?: {}): Promise<ITweetsMonthly[]> {
	return getRequest(apiDashboardRoutes.tweetsMonthly, query);
}

export function fetchTweetsHourly(query?: {}): Promise<ITweetsHourly[]> {
	return getRequest(apiDashboardRoutes.tweetsHourly, query);
}

export function fetchTweetsSource(query?: {}): Promise<ITweetsSource[]> {
	return getRequest(apiDashboardRoutes.tweetsSource, query);
}
