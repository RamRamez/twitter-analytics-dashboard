import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Typography,
} from '@mui/material';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { fetchInfluentialTweets } from '../../../api/apiRequests';
import { EPublicMetrics } from '../../../types/publicMetrics';
import { ITweet } from '../../../types/tweet';
import { ETimeRange } from '../../../types/timeRange';
import TweetsSwiper from '../../TweetsSwiper';
import { IMedia } from '../../../types/media';

interface IInfluentialTweetsProps {
	timeRange: ETimeRange;
}

export type TTweetsWithMedia = (ITweet & { media?: IMedia[] })[];

function InfluentialTweets(props: IInfluentialTweetsProps) {
	const { timeRange } = props;
	const [influentialTweets, setInfluentialTweets] = useState<TTweetsWithMedia>();
	const [sortBy, setSortBy] = useState<EPublicMetrics>(EPublicMetrics.retweet_count);

	useEffect(() => {
		fetchInfluentialTweets({ sortBy, timeRange }).then(res => {
			const _influentialTweets: TTweetsWithMedia = res.influentialTweets;
			_influentialTweets.map(tweet => {
				const mediaKeys = tweet.attachments?.media_keys;
				if (mediaKeys) {
					const _media: IMedia[] = [];
					mediaKeys.forEach(key => {
						const foundMedia = res.media.find(m => m.media_key === key);
						if (foundMedia) _media.push(foundMedia);
					});
					if (_media.length > 0) {
						tweet.media = _media;
					}
				}
				return tweet;
			});
			setInfluentialTweets(_influentialTweets);
		});
	}, [sortBy, timeRange]);

	return (
		<Wrapper>
			<Typography
				sx={{ fontWeight: 'bold', textAlign: 'center', mb: 5 }}
				variant='h5'
			>
				Most Influential Tweets
			</Typography>
			<Box sx={{ width: 220, mx: 'auto' }}>
				<FormControl fullWidth>
					<InputLabel>Sort By</InputLabel>
					<Select
						value={sortBy}
						label='Sort By'
						onChange={e => setSortBy(e.target.value as EPublicMetrics)}
					>
						<MenuItem value={EPublicMetrics.retweet_count}>
							Retweet Count
						</MenuItem>
						<MenuItem value={EPublicMetrics.like_count}>Like Count</MenuItem>
						<MenuItem value={EPublicMetrics.reply_count}>
							Reply Count
						</MenuItem>
						<MenuItem value={EPublicMetrics.quote_count}>
							Quote Count
						</MenuItem>
					</Select>
				</FormControl>
			</Box>
			<TweetsSwiper tweets={influentialTweets} />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin: 50px auto;
`;

export default InfluentialTweets;
