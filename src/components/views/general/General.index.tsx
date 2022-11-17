import { Container, Divider } from '@mui/material';
import InfluentialTweets from './InfluentialTweets';
import GeneralStats from './GeneralStats';
import SocialNetwork from './SocialNetwork';
import TweetsType from './TweetsType';
import TweetsLanguage from './TweetsLanguage';
import TweetsTime from './TweetsTime';
import HashtagsAbundance from './HashtagsAbundance';

function GeneralIndex() {
	return (
		<Container sx={{ my: 15 }}>
			<GeneralStats />
			<Divider />
			<HashtagsAbundance />
			<Divider />
			<InfluentialTweets />
			<Divider />
			<SocialNetwork />
			<Divider />
			<TweetsType />
			<Divider />
			<TweetsLanguage />
			<Divider />
			<TweetsTime />
		</Container>
	);
}

export default GeneralIndex;
