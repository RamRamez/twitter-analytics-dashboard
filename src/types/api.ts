import { TTweetTypes } from './referencedTweetsType';
import { ITweet } from './tweet';
import { IMedia } from './media';
import { IUser } from './user';

export interface IGeneralStats {
	tweetCount: number;
	uniqueUsers: number;
	uniqueHashtags: number;
}

export interface IHashtagAbundance {
	tag: string;
	count: number;
}

export interface ISocialNetwork {
	count: number;
	username: string;
}

export interface ITweetsType {
	count: number;
	type: TTweetTypes;
}

export interface IInfluentialTweets {
	influentialTweets: ITweet[];
	media: IMedia[];
}

export interface ITweetsLanguages {
	count: number;
	lang: string;
}

export interface ITweetsMonthly {
	count: number;
	date: string;
}

export interface ITweetsHourly {
	count: number;
	hour: number;
}

export interface ITweetsSource {
	count: number;
	source: string;
}

export interface IUserList {
	username: string;
	name: string;
}

export interface IFetchUser {
	user: IUser;
	pinnedTweet?: ITweet;
	media?: IMedia[];
}

export interface IUserGeneralStats {
	tweetCount: number;
	uniqueHashtagsCount: number;
	publicMetricsAverage: {
		retweetAvg: number;
		replyAvg: number;
		likeAvg: number;
		quoteAvg: number;
	};
}

export interface ISearchResults {
	tweets: ITweet[];
	media: IMedia[];
}

export interface IWordsWar {
	word: string;
	wordsWar: ITweetsMonthly[];
}

export interface IWordCloud {
	word: string;
	count: number;
}

export interface IWordsInfluence {
	word: string;
	wordsInfluence: {
		retweetAverage: number;
		date: string;
	}[];
}

export interface IProfilesInfluence {
	profile: string;
	profilesInfluence: {
		retweetAverage: number;
		date: string;
	}[];
}

export interface IUpdateProfiles {
	message: string;
}
