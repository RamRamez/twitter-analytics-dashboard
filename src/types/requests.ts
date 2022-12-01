import {
	IInfluentialTweetsQuery,
	ISearchQuery,
	ISocialNetworkQuery,
	ITimeAndUserQuery,
	ITimeRangeQuery,
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
	IUserGeneralStats,
	IWordCloud,
	IWordsInfluence,
	IWordsWar,
} from './api';

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
