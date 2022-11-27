import { useState } from 'react';
import { Container, Divider } from '@mui/material';
import InfluentialTweets from '../InfluentialTweets';
import GeneralStats from './GeneralStats';
import SocialNetwork from '../SocialNetwork';
import TweetsTypes from '../TweetsTypes';
import TweetsLanguage from '../TweetsLanguage';
import TweetsMonthly from '../TweetsMonthly';
import HashtagsAbundance from '../HashtagsAbundance';
import { ETimeRange } from '../../../types/timeAndUserProps';
import TimeRangeMenu from '../../TimeRangeMenu';
import TweetsHourly from '../TweetsHourly';
import TweetsSource from '../TweetsSource';

function GeneralIndex() {
	const [timeRange, setTimeRange] = useState(ETimeRange.all);

	return (
		<Container sx={{ my: 15 }}>
			<TimeRangeMenu timeRange={timeRange} setTimeRange={setTimeRange} />
			<GeneralStats timeRange={timeRange} />
			<Divider />
			<HashtagsAbundance timeRange={timeRange} />
			<Divider />
			<InfluentialTweets timeRange={timeRange} />
			<Divider />
			<SocialNetwork timeRange={timeRange} />
			<Divider />
			<TweetsTypes timeRange={timeRange} />
			<Divider />
			<TweetsLanguage timeRange={timeRange} />
			<Divider />
			<TweetsSource timeRange={timeRange} />
			<Divider />
			<TweetsMonthly timeRange={timeRange} />
			<Divider />
			<TweetsHourly timeRange={timeRange} />
		</Container>
	);
}

export default GeneralIndex;
