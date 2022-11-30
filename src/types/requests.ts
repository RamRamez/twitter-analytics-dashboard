import {
	IInfluentialTweetsQuery,
	ISearchQuery,
	ISocialNetworkQuery,
	ITimeAndUserQuery,
} from './query';
import {
	IFetchUser,
	IHashtagAbundance,
	IInfluentialTweets,
	ISearchResults,
	ISocialNetwork,
	ITweetsHourly,
	ITweetsLanguages,
	ITweetsMonthly,
	ITweetsSource,
	ITweetsType,
	IUserGeneralStats,
	IWordsWar,
} from './api';

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
