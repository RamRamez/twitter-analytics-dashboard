import { colors, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { ITweet } from '../types/tweet';
import { formatDate, formatTweetLink } from '../lib/helpers';
import RetweetIcon from '../assets/images/retweet.svg';
import ReplyIcon from '../assets/images/reply.svg';
import HeartIcon from '../assets/images/heart.svg';
import QuoteIcon from '../assets/images/quote.svg';

interface IProps {
	tweet: ITweet;
}

export default function TweetCard(props: IProps) {
	const { tweet } = props;
	return (
		<CardContainer>
			{tweet.referenced_tweets[0]?.type}
			<a target='_blank' rel='noopener noreferrer' href={formatTweetLink(tweet.id)}>
				<Typography variant='h6'>{tweet.text}</Typography>
			</a>
			<Typography sx={{ mt: 2 }} variant='subtitle2' color='textSecondary'>
				{formatDate(tweet.created_at)} - {tweet.source}
			</Typography>
			<Typography sx={{ mt: 2 }} variant='subtitle2' color='textSecondary'>
				<MetricsContainer>
					<MetricsItem>
						<img width='20px' src={ReplyIcon} alt='reply' />{' '}
						{tweet.public_metrics.reply_count}
					</MetricsItem>
					<MetricsItem>
						<img width='20px' src={RetweetIcon} alt='retweet' />{' '}
						{tweet.public_metrics.retweet_count}
					</MetricsItem>
					<MetricsItem>
						<img width='20px' src={HeartIcon} alt='like' />{' '}
						{tweet.public_metrics.like_count}
					</MetricsItem>
					<MetricsItem>
						<img width='20px' src={QuoteIcon} alt='quote' />{' '}
						{tweet.public_metrics.quote_count}
					</MetricsItem>
				</MetricsContainer>
			</Typography>
		</CardContainer>
	);
}

const MetricsItem = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

const MetricsContainer = styled.div`
	display: flex;
	gap: 16px;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
`;

const CardContainer = styled.div`
	background: ${colors.grey[100]};
	max-width: 600px;
	padding: 20px;
	border-radius: 10px;
`;
