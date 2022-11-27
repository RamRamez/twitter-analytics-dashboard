import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { FlexCenter } from '../../styled-components/flex';
import StatCard from '../../StatCard';
import TwitterIcon from '../../../assets/images/twitter-stat-card.png';
import HashtagIcon from '../../../assets/images/hashtag.png';
import TooltipHelp from '../../TooltipHelp';
import { ITimeAndUserProps } from '../../../types/timeAndUserProps';

export default function ProfileGeneralStats(props: ITimeAndUserProps) {
	const { timeRange, user } = props;

	useEffect(() => {}, [timeRange, user]);

	return (
		<Wrapper>
			<FlexCenter>
				<Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} variant='h5'>
					General Statistics
				</Typography>
				<TooltipHelp title={tooltipCopy} />
			</FlexCenter>
			<GeneralCards>
				<StatCard title='Tweets' value={2} icon={TwitterIcon} />
				<StatCard title='Unique Hashtags' value={345} icon={HashtagIcon} />
			</GeneralCards>
		</Wrapper>
	);
}

const tooltipCopy =
	'Showing general information about selected user. Tweets saved in the DB are tweets of users that are added to the dashboard. In case Tweet is a Retweeted, Quoted or Replied tweet, the referenced tweet is also saved in the DB.';

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
