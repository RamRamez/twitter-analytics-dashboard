import {
	IInfluentialTweetsQuery,
	ISearchQuery,
	ISocialNetworkQuery,
	ITimeAndUserQuery,
	ITimeRangeQuery,
	IUsersQuery,
} from './query';
import {
	IFetchUser,
	IGeneralStats,
	IHashtagAbundance,
	IInfluentialTweets,
	IProfilesInfluence,
	ISearchResults,
	ISocialNetwork,
	ITweetsHourly,
	ITweetsLanguages,
	ITweetsMonthly,
	ITweetsSource,
	ITweetsType,
	IGeneralResponse,
	IUserGeneralStats,
	IWordCloud,
	IWordsInfluence,
	IWordsWar,
} from './api';
import { IToken } from './token';

export type TFetchGeneralStats = (query: ITimeRangeQuery) => Promise<IGeneralStats>;

export type TFetchHashtagsAbundance = (
	query: ITimeAndUserQuery,
) => Promise<IHashtagAbundance[]>;

export type TFetchInfluentialTweets = (
	query: IInfluentialTweetsQuery,
) => Promise<IInfluentialTweets>;

export type TFetchSocialNetwork = (
	query: ISocialNetworkQuery,
) => Promise<ISocialNetwork[]>;

export type TFetchTweetsTypes = (query: ITimeAndUserQuery) => Promise<ITweetsType[]>;

export type TFetchTweetsLanguages = (
	query: ITimeAndUserQuery,
) => Promise<ITweetsLanguages[]>;

export type TFetchTweetsSource = (query: ITimeAndUserQuery) => Promise<ITweetsSource[]>;

export type TFetchTweetsMonthly = (query: ITimeAndUserQuery) => Promise<ITweetsMonthly[]>;

export type TFetchTweetsHourly = (query: ITimeAndUserQuery) => Promise<ITweetsHourly[]>;

export type TFetchSearchTweets = (query: ISearchQuery) => Promise<ISearchResults>;

export type TFetchUser = (username: string) => Promise<IFetchUser>;

export type TFetchUserGeneralStats = (
	username: string,
	query: ITimeAndUserQuery,
) => Promise<IUserGeneralStats>;

export type TFetchWordsWar = (query: ISearchQuery) => Promise<IWordsWar[]>;

export type TFetchWordCloud = (query: ISearchQuery) => Promise<IWordCloud[]>;

export type TFetchWordsInfluence = (query: ISearchQuery) => Promise<IWordsInfluence[]>;

export type TFetchProfilesInfluence = (
	query: ISearchQuery,
) => Promise<IProfilesInfluence[]>;

export type TUpdateProfiles = (query: IUsersQuery) => Promise<IGeneralResponse>;

export type TAddProfiles = (query: IUsersQuery) => Promise<IGeneralResponse>;

export type TAddToken = (token: IToken) => Promise<IGeneralResponse>;

export type TFetchToken = () => Promise<IToken>;
