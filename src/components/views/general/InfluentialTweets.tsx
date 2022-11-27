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
import { ITimeAndUserProps } from '../../../types/timeAndUserProps';
import TweetsSwiper from '../../TweetsSwiper';
import { IMedia } from '../../../types/media';
import { FlexCenter } from '../../styled-components/flex';
import { IInfluentialTweetsQuery } from '../../../types/query';
import TooltipHelp from '../../TooltipHelp';

export type TTweetsWithMedia = (ITweet & { media?: IMedia[] })[];

function InfluentialTweets(props: ITimeAndUserProps) {
	const { timeRange, user } = props;
	const [influentialTweets, setInfluentialTweets] = useState<TTweetsWithMedia>();
	const [sortBy, setSortBy] = useState<EPublicMetrics>(EPublicMetrics.retweet_count);

	useEffect(() => {
		const query: IInfluentialTweetsQuery = { timeRange, sortBy };
		if (user) query.users = [user];
		fetchInfluentialTweets(query).then(res => {
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
	}, [sortBy, timeRange, user]);

	return (
		<Wrapper>
			<FlexCenter>
				<Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} variant='h5'>
					Most Influential Tweets
				</Typography>
				<TooltipHelp title={tooltipCopy} />
			</FlexCenter>
			<Box sx={{ width: 220, mx: 'auto', mt: 5 }}>
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

const tooltipCopy =
	'Most influential tweets in the DB excluding retweets. Influential tweets are tweets with the most retweets, replies, likes, and quotes.';

const Wrapper = styled.div`
	margin: 50px auto;
`;

export default InfluentialTweets;
