import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import StatCard from '../../StatCard';
import TwitterIcon from '../../../assets/images/twitter-stat-card.png';
import PeopleIcon from '../../../assets/images/people-team.svg';
import HashtagIcon from '../../../assets/images/hashtag.png';
import { FlexCenter } from '../../styled-components/flex';
import { ITimeRangeProps } from '../../../types/timeAndUserProps';
import { fetchGeneralStats } from '../../../api/apiRequests';
import { IGeneralStats } from '../../../types/api';
import TooltipHelp from '../../TooltipHelp';

function GeneralStats({ timeRange }: ITimeRangeProps) {
	const [generalStats, setGeneralStats] = useState<IGeneralStats>();
	const { tweetCount, uniqueUsers, uniqueHashtags } = generalStats || {};

	useEffect(() => {
		fetchGeneralStats({ timeRange }).then(setGeneralStats);
	}, [timeRange]);

	return (
		<Wrapper>
			<FlexCenter>
				<Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} variant='h5'>
					General Statistics
				</Typography>
				<TooltipHelp title={tooltipCopy} />
			</FlexCenter>
			<GeneralCards>
				<StatCard title='Tweets' value={tweetCount} icon={TwitterIcon} />
				<StatCard title='Unique Accounts' value={uniqueUsers} icon={PeopleIcon} />
				<StatCard
					title='Unique Hashtags'
					value={uniqueHashtags}
					icon={HashtagIcon}
				/>
			</GeneralCards>
		</Wrapper>
	);
}

const tooltipCopy =
	'Showing general information about all tweets in the DB. Tweets saved in the DB are tweets of users that are added to the dashboard. In case Tweet is a Retweeted, Quoted or Replied tweet, the referenced tweet is also saved in the DB.';

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
