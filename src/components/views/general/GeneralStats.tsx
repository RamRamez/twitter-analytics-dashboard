import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import StatCard from '../../StatCard';
import TwitterIcon from '../../../assets/images/twitter-stat-card.png';
import PeopleIcon from '../../../assets/images/people-team.svg';
import HashtagIcon from '../../../assets/images/hashtag.png';
import GeoIcon from '../../../assets/images/geo.png';

function GeneralStats() {
	return (
		<Wrapper>
			<Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} variant='h5'>
				General Statistics
			</Typography>
			<GeneralCards>
				<StatCard title='Tweets' value={22764} icon={TwitterIcon} />
				<StatCard title='Unique Entities' value={3} icon={PeopleIcon} />
				<StatCard title='Total Hashtags' value={50} icon={HashtagIcon} />
				<StatCard title='Tweets with Geo' value={2764} icon={GeoIcon} />
			</GeneralCards>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin: 50px auto;
`;

const GeneralCards = styled.div`
	margin-top: 70px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 70px 30px;
`;

export default GeneralStats;
