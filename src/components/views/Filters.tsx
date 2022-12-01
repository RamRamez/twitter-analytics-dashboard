import {
	Box,
	Button,
	Container,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import styled from '@emotion/styled';
import { FlexCenter } from '../styled-components/flex';
import TooltipHelp from '../TooltipHelp';
import { fetchSearchTweets } from '../../api/apiRequests';
import { TTweetTypes } from '../../types/referencedTweetsType';
import { ESortByDate } from '../../types/sortBy';
import { EPublicMetrics } from '../../types/publicMetrics';
import { TTweetWithMedia } from '../../types/tweet';
import TweetsSwiper from '../TweetsSwiper';
import { ISearchQuery } from '../../types/query';
import { addMediaToTweets } from '../../lib/helpers';
import SelectProfiles from '../select-components/SelectProfiles';
import SelectTweetTypes from '../select-components/SelectTweetTypes';
import SelectFromDate from '../select-components/SelectFromDate';
import SelectToDate from '../select-components/SelectToDate';

export default function Filters() {
	const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
	const [selectedTweetTypes, setSelectedTweetTypes] = useState<TTweetTypes[]>([]);
	const [selectedSortBy, setSelectedSortBy] = useState<
		ESortByDate | EPublicMetrics | ''
	>('');
	const [fromDate, setFromDate] = useState<Date | null>(null);
	const [toDate, setToDate] = useState<Date | null>(null);
	const [searchText, setSearchText] = useState<string>('');
	const [tweets, setTweets] = useState<TTweetWithMedia[]>();

	const handleSearch = () => {
		const query: ISearchQuery = {};
		if (selectedUsers.length > 0) query.users = selectedUsers;
		if (searchText) query.search = searchText;
		if (selectedTweetTypes.length > 0) query.tweetTypes = selectedTweetTypes;
		if (selectedSortBy) query.sortBy = selectedSortBy;
		if (fromDate) query.fromDate = fromDate;
		if (toDate) query.toDate = toDate;
		fetchSearchTweets(query).then(res => {
			const tweetsWithMedia = addMediaToTweets(res.tweets, res.media);
			setTweets(tweetsWithMedia);
		});
	};

	return (
		<Container sx={{ my: 15 }}>
			<FlexCenter>
				<Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} variant='h5'>
					Advanced Filters
				</Typography>
				<TooltipHelp title={tooltipCopy} />
			</FlexCenter>
			<SelectProfiles
				multiple
				selectedUsers={selectedUsers}
				setSelectedUsers={setSelectedUsers}
			/>
			<SelectTweetTypes
				selectedTweetTypes={selectedTweetTypes}
				setSelectedTweetTypes={setSelectedTweetTypes}
			/>
			<Box sx={{ width: 320, mx: 'auto', mt: 5 }}>
				<FormControl fullWidth>
					<InputLabel>Sort Results By</InputLabel>
					<Select
						value={selectedSortBy}
						label='Sort Results By'
						onChange={e =>
							setSelectedSortBy(
								e.target.value as ESortByDate | EPublicMetrics,
							)
						}
					>
						{sortBy.map(i => (
							<MenuItem value={i.value} key={i.value}>
								{i.label}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
			<SelectFromDate fromDate={fromDate} setFromDate={setFromDate} />
			<SelectToDate toDate={toDate} setToDate={setToDate} />
			<SearchContainer>
				<TextField
					onChange={e => setSearchText(e.target.value)}
					label='Search Tweets'
					variant='outlined'
					sx={{ width: '100%' }}
				/>
				<TooltipHelp title='Search tweets text' />
			</SearchContainer>
			<Box sx={{ width: 320, mx: 'auto' }}>
				<Button size='large' onClick={handleSearch} variant='contained'>
					Search
				</Button>
			</Box>
			<TweetsSwiper tweets={tweets} />
		</Container>
	);
}

const SearchContainer = styled.div`
	margin: 40px auto;
	display: flex;
	align-items: center;
	gap: 10px;
	width: 320px;
`;

const tooltipCopy =
	'Advanced filtering options for DB tweets. Tweets that are referenced by DB users Tweets are saved in the DB, thus results may include tweets from users that are added to the dashboard.';

const sortBy = [
	{
		label: 'Newest',
		value: ESortByDate.newest,
	},
	{
		label: 'Oldest',
		value: ESortByDate.oldest,
	},
	{
		label: 'Retweet Count',
		value: EPublicMetrics.retweet_count,
	},
	{
		label: 'Reply Count',
		value: EPublicMetrics.reply_count,
	},
	{
		label: 'Like Count',
		value: EPublicMetrics.like_count,
	},
	{
		label: 'Quote Count',
		value: EPublicMetrics.quote_count,
	},
];
