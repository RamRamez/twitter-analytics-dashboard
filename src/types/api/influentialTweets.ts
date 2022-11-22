import { ITweet } from '../tweet';
import { IMedia } from '../media';

export type TInfluentialTweets = Promise<{
	influentialTweets: ITweet[];
	media: IMedia[];
}>;
