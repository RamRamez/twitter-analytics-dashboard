import { TTweetTypes } from './referencedTweetsType';
import { ITweet } from './tweet';
import { IMedia } from './media';

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
