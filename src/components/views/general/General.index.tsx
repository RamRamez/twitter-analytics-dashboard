import { useEffect, useState } from 'react';
import { Container, Divider } from '@mui/material';
import InfluentialTweets from './InfluentialTweets';
import GeneralStats from './GeneralStats';
import SocialNetwork from './SocialNetwork';
import TweetsTypes from './TweetsTypes';
import TweetsLanguage from './TweetsLanguage';
import TweetsTime from './TweetsTime';
import HashtagsAbundance from './HashtagsAbundance';
import { apiDashboardGeneral } from '../../../api/apiRequests';
import { ETimeRange } from '../../../types/timeRange';
import TimeRangeMenu from '../../TimeRangeMenu';

export interface hashtagAbundance {
	tag: string;
	count: number;
}

export interface IGeneralStats {
	tweetCount: number;
	uniqueUsers: number;
	uniqueHashtags: number;
	hashtagsAbundance: hashtagAbundance[];
	mostInfluentialTweets: string[];
}

function GeneralIndex() {
	const [generalStats, setGeneralStats] = useState<IGeneralStats>();
	const [timeRange, setTimeRange] = useState(ETimeRange.all);

	useEffect(() => {
		apiDashboardGeneral({ timeRange }).then(setGeneralStats);
	}, [timeRange]);

	return (
		<Container sx={{ my: 15 }}>
			<TimeRangeMenu timeRange={timeRange} setTimeRange={setTimeRange} />
			<GeneralStats generalStats={generalStats} />
			<Divider />
			<HashtagsAbundance tags={generalStats?.hashtagsAbundance} />
			<Divider />
			<InfluentialTweets timeRange={timeRange} />
			<Divider />
			<SocialNetwork timeRange={timeRange} />
			<Divider />
			<TweetsTypes timeRange={timeRange} />
			<Divider />
			<TweetsLanguage timeRange={timeRange} />
			<Divider />
			<TweetsTime />
		</Container>
	);
}

export default GeneralIndex;
