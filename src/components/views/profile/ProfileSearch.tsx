import { useEffect, useState } from 'react';
import { ITimeAndUserProps } from '../../../types/timeAndUserProps';
import { ITweet } from '../../../types/tweet';
import { fetchSearchTweets } from '../../../api/apiRequests';
import { ISearchQuery } from '../../../types/query';

export default function ProfileSearch(props: ITimeAndUserProps) {
	const { user, timeRange } = props;
	const [tweets, setTweets] = useState<ITweet[]>();
	console.log('ProfileSearch', tweets);

	useEffect(() => {
		const query: ISearchQuery = { timeRange };
		if (user) query.users = [user];
		query.search = 'givback';
		fetchSearchTweets(query).then(setTweets);
	}, [user, timeRange]);

	return <>hi</>;
}
