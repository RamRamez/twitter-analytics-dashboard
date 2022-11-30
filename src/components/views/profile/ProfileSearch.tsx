import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Button, TextField, Typography } from '@mui/material';
import { ITimeAndUserProps } from '../../../types/timeAndUserProps';
import { TTweetWithMedia } from '../../../types/tweet';
import { fetchSearchTweets } from '../../../api/apiRequests';
import { ISearchQuery } from '../../../types/query';
import TweetsSwiper from '../../TweetsSwiper';
import TooltipHelp from '../../TooltipHelp';
import { FlexCenter } from '../../styled-components/flex';
import { addMediaToTweets } from '../../../lib/helpers';

export default function ProfileSearch(props: ITimeAndUserProps) {
	const { user, timeRange } = props;
	const [tweets, setTweets] = useState<TTweetWithMedia[]>();
	const [search, setSearch] = useState('');

	useEffect(() => {
		if (search) handleSearch();
	}, [user, timeRange]);

	const handleSearch = () => {
		const query: ISearchQuery = { timeRange };
		if (user) query.users = [user];
		if (search) query.search = search;
		fetchSearchTweets(query).then(res => {
			const tweetsWithMedia = addMediaToTweets(res.tweets, res.media);
			setTweets(tweetsWithMedia);
		});
	};

	return (
		<SearchContainer>
			<FlexCenter>
				<Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} variant='h5'>
					Search Tweets
				</Typography>
				<TooltipHelp title='Search tweets text' />
			</FlexCenter>
			<FlexCenterStyled>
				<TextField
					onChange={e => setSearch(e.target.value)}
					label='Search'
					variant='standard'
				/>
				<Button onClick={handleSearch} variant='contained'>
					Search
				</Button>
			</FlexCenterStyled>
			<TweetsSwiper tweets={tweets} />
		</SearchContainer>
	);
}

const FlexCenterStyled = styled(FlexCenter)`
	margin: 20px 0;
`;

const SearchContainer = styled.div`
	margin: 50px auto;
`;
