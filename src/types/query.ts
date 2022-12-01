import { ETimeRange } from './timeAndUserProps';
import { EPublicMetrics } from './publicMetrics';
import { EReferencedTweetsType, TTweetTypes } from './referencedTweetsType';
import { ESortByDate } from './sortBy';

export interface ITimeRangeQuery {
	timeRange?: ETimeRange;
}

interface IUsersQuery {
	users?: string[];
}

export interface ITimeAndUserQuery extends ITimeRangeQuery, IUsersQuery {}

export interface IInfluentialTweetsQuery extends ITimeAndUserQuery {
	sortBy: EPublicMetrics;
}

export interface ISocialNetworkQuery extends ITimeAndUserQuery {
	type: EReferencedTweetsType;
}

export interface ISearchQuery extends ITimeAndUserQuery {
	search?: string;
	tweetTypes?: TTweetTypes[];
	sortBy?: ESortByDate | EPublicMetrics | '';
	fromDate?: Date | null;
	toDate?: Date | null;
}
