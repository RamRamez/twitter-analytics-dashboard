import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { ITimeAndUserProps } from '../../../types/timeAndUserProps';
import { fetchUserGeneralStats } from '../../../api/apiRequests';
import { IUserGeneralStats } from '../../../types/api';
import StatCard from '../../StatCard';
import TwitterIcon from '../../../assets/images/twitter-stat-card.png';
import HashtagIcon from '../../../assets/images/hashtag.png';
import TooltipHelp from '../../TooltipHelp';
import { FlexCenter } from '../../styled-components/flex';
import RetweetIcon from '../../../assets/images/retweet.svg';
import ReplyIcon from '../../../assets/images/reply.svg';
import HeartIcon from '../../../assets/images/heart.svg';
import QuoteIcon from '../../../assets/images/quote.svg';

export default function ProfileGeneralStats({ user, timeRange }: ITimeAndUserProps) {
	const [generalStats, setGeneralStats] = useState<IUserGeneralStats>();

	const { tweetCount, uniqueHashtagsCount, publicMetricsAverage } = generalStats || {};
	const { replyAvg, retweetAvg, quoteAvg, likeAvg } = publicMetricsAverage || {};

	useEffect(() => {
		fetchUserGeneralStats(user!, { timeRange }).then(setGeneralStats);
	}, [user, timeRange]);

	return (
		<StatsContainer>
			<FlexCenter>
				<Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} variant='h5'>
					Twitter Account Stats
				</Typography>
				<TooltipHelp title={tooltipCopy} />
			</FlexCenter>
			<GeneralCards>
				<StatCard title='Tweets' value={tweetCount} icon={TwitterIcon} />
				<StatCard
					title='Unique Hashtags'
					value={uniqueHashtagsCount}
					icon={HashtagIcon}
				/>
				<StatCard
					title='Retweet Average'
					value={retweetAvg?.toFixed(2)}
					icon={RetweetIcon}
				/>
				<StatCard
					title='Reply Average'
					value={replyAvg?.toFixed(2)}
					icon={ReplyIcon}
				/>
				<StatCard
					title='Quote Average'
					value={quoteAvg?.toFixed(2)}
					icon={QuoteIcon}
				/>
				<StatCard
					title='Like Average'
					value={likeAvg?.toFixed(2)}
					icon={HeartIcon}
				/>
			</GeneralCards>
		</StatsContainer>
	);
}

const tooltipCopy = `These stats are based on the user's tweets saved in DB.`;

const StatsContainer = styled.div`
	margin: 50px auto;
`;

const GeneralCards = styled.div`
	margin-top: 70px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 70px 30px;
`;
