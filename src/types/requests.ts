import { IInfluentialTweetsQuery, ISocialNetworkQuery, ITimeAndUserQuery } from './query';
import {
	IHashtagAbundance,
	IInfluentialTweets,
	ISocialNetwork,
	ITweetsHourly,
	ITweetsLanguages,
	ITweetsMonthly,
	ITweetsSource,
	ITweetsType,
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
