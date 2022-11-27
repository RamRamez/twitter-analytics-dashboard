import { Container, Divider } from '@mui/material';
import { useState } from 'react';
import { ETimeRange } from '../../../types/timeAndUserProps';
import TimeRangeMenu from '../../TimeRangeMenu';
import ProfileGeneralStats from './ProfileGeneralStats';
import ProfileSelect from './ProfileSelect';
import HashtagsAbundance from '../general/HashtagsAbundance';
import InfluentialTweets from '../general/InfluentialTweets';
import SocialNetwork from '../general/SocialNetwork';
import TweetsTypes from '../general/TweetsTypes';
import TweetsLanguage from '../general/TweetsLanguage';
import TweetsSource from '../general/TweetsSource';
import TweetsMonthly from '../general/TweetsMonthly';
import TweetsHourly from '../general/TweetsHourly';

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
