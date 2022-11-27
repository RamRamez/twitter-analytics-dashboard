import { Container, Divider } from '@mui/material';
import { useState } from 'react';
import { ETimeRange } from '../../../types/timeAndUserProps';
import TimeRangeMenu from '../../TimeRangeMenu';
import ProfileGeneralStats from './ProfileGeneralStats';
import ProfileSelect from './ProfileSelect';
import HashtagsAbundance from '../HashtagsAbundance';
import InfluentialTweets from '../InfluentialTweets';
import SocialNetwork from '../SocialNetwork';
import TweetsTypes from '../TweetsTypes';
import TweetsLanguage from '../TweetsLanguage';
import TweetsSource from '../TweetsSource';
import TweetsMonthly from '../TweetsMonthly';
import TweetsHourly from '../TweetsHourly';

export default function ProfileIndex() {
	const [timeRange, setTimeRange] = useState(ETimeRange.all);
	const [user, setUser] = useState<string>('');

	return (
		<Container sx={{ my: 15 }}>
			<ProfileSelect user={user} setUser={setUser} />
			{user && (
				<>
					<TimeRangeMenu timeRange={timeRange} setTimeRange={setTimeRange} />
					<ProfileGeneralStats user={user} timeRange={timeRange} />
					<Divider />
					<HashtagsAbundance user={user} timeRange={timeRange} />
					<Divider />
					<InfluentialTweets user={user} timeRange={timeRange} />
					<Divider />
					<SocialNetwork user={user} timeRange={timeRange} />
					<Divider />
					<TweetsTypes user={user} timeRange={timeRange} />
					<Divider />
					<TweetsLanguage user={user} timeRange={timeRange} />
					<Divider />
					<TweetsSource user={user} timeRange={timeRange} />
					<Divider />
					<TweetsMonthly user={user} timeRange={timeRange} />
					<Divider />
					<TweetsHourly user={user} timeRange={timeRange} />
				</>
			)}
		</Container>
	);
}
