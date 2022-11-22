import { colors, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { ITweet } from '../types/tweet';
import { formatAuthorLink, formatDate, formatTweetLink } from '../lib/helpers';
import RetweetIcon from '../assets/images/retweet.svg';
import ReplyIcon from '../assets/images/reply.svg';
import HeartIcon from '../assets/images/heart.svg';
import QuoteIcon from '../assets/images/quote.svg';
import { EReferencedTweetsType } from '../types/referencedTweetsType';
import { IMedia } from '../types/media';

interface IProps {
	tweet: ITweet & { media?: IMedia[] };
}

export default function TweetCard(props: IProps) {
	const { tweet } = props;
	const tweetTypes = tweet.referenced_tweets?.map(ref => ref.type);
	let tweetType;
	if (tweetTypes?.includes(EReferencedTweetsType.retweeted)) {
		tweetType = 'Retweeted';
	} else if (tweetTypes?.includes(EReferencedTweetsType.quoted)) {
		tweetType = 'Quoted';
	} else if (tweetTypes?.includes(EReferencedTweetsType.replied_to)) {
		tweetType = 'Replied to';
	} else {
		tweetType = 'Tweeted';
	}

	return (
		<CardContainer>
			<Header>
				<IconContainer>
					<img
						width='50px'
						height='50px'
						src={tweet.author.profile_image_url}
						alt='profile'
					/>
				</IconContainer>
				<Typography sx={{ fontWeight: 'bold' }} variant='body1'>
					{tweet.author.name}
				</Typography>
				<a
					target='_blank'
					href={formatAuthorLink(tweet.author.username)}
					rel='noreferrer noopener'
				>
					<Typography variant='subtitle2' color='textSecondary'>
						{`@${tweet.author.username}`}
					</Typography>
				</a>
				<Typography variant='subtitle2' color='primary.main'>
					{tweetType}
				</Typography>
			</Header>
			<a target='_blank' rel='noopener noreferrer' href={formatTweetLink(tweet.id)}>
				<Typography variant='body1'>{tweet.text}</Typography>
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
			{tweet.media && (
				<MediaContainer>
					{tweet.media.map(media => (
						<ImageContainer key={media.media_key}>
							<img
								key={media.media_key}
								src={media.url}
								alt='media'
								width='100%'
								height='100%'
							/>
						</ImageContainer>
					))}
				</MediaContainer>
			)}
		</CardContainer>
	);
}

const ImageContainer = styled.div`
	max-width: 400px;
	max-height: 400px;
	border-radius: 10px;
	overflow: hidden;
`;

const MediaContainer = styled.div`
	margin-top: 10px;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

const IconContainer = styled.div`
	border-radius: 50%;
	width: 50px;
	height: 50px;
	overflow: hidden;
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	font-weight: bold;
	margin-bottom: 10px;
`;

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
	margin-top: 20px;
`;
