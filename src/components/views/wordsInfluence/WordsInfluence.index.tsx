import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import styled from '@emotion/styled';
import {
	EReferencedTweetsType,
	TTweetOnly,
	TTweetTypes,
} from '../../../types/referencedTweetsType';
import { FlexCenter } from '../../styled-components/flex';
import TooltipHelp from '../../TooltipHelp';
import SelectProfiles from '../../select-components/SelectProfiles';
import SelectTweetTypes from '../../select-components/SelectTweetTypes';
import SelectFromDate from '../../select-components/SelectFromDate';
import SelectToDate from '../../select-components/SelectToDate';
import { fetchWordsInfluence } from '../../../api/apiRequests';
import { IWordsInfluence } from '../../../types/api';
import { queryCreator } from '../../../lib/helpers';
import WordsInfluenceChart from './WordsInfluenceChart';

const defaultTweetTypes = [
	TTweetOnly.tweet,
	EReferencedTweetsType.quoted,
	EReferencedTweetsType.replied_to,
];

export default function WordsInfluenceIndex() {
	const [users, setUsers] = useState<string[]>([]);
	const [tweetTypes, setTweetTypes] = useState<TTweetTypes[]>(defaultTweetTypes);
	const [fromDate, setFromDate] = useState<Date | null>(null);
	const [toDate, setToDate] = useState<Date | null>(null);
	const [search, setSearch] = useState<string>('');
	const [wordsInfluence, setWordsInfluence] = useState<IWordsInfluence[]>();
	const [hasError, setHasError] = useState(false);

	const handleSearch = () => {
		if (!search) {
			setHasError(true);
		} else {
			setHasError(false);
			const query = queryCreator({ users, tweetTypes, fromDate, toDate, search });
			fetchWordsInfluence(query).then(setWordsInfluence);
		}
	};

	return (
		<Container sx={{ my: 15 }}>
			<FlexCenter>
				<Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} variant='h5'>
					Words Influence
				</Typography>
				<TooltipHelp title='Words Influence shows average retweet count of filtered tweets for each search term. The retweet count for a retweet belongs to the original tweet, so to have valid retweet average for a profile, you should exclude retweets. Influence of different words can be compared via search terms' />
			</FlexCenter>
			<SelectProfiles multiple selectedUsers={users} setSelectedUsers={setUsers} />
			<SelectTweetTypes
				selectedTweetTypes={tweetTypes}
				setSelectedTweetTypes={setTweetTypes}
			/>
			<SelectFromDate fromDate={fromDate} setFromDate={setFromDate} />
			<SelectToDate toDate={toDate} setToDate={setToDate} />
			<SearchContainer>
				<TextField
					onChange={e => setSearch(e.target.value)}
					label='Search terms'
					required
					variant='outlined'
					sx={{ width: '100%' }}
					error={hasError}
					helperText={hasError ? 'This field is required!' : ''}
				/>
				<TooltipHelp title='Search terms compares words influence. Separate words with comma (,)' />
			</SearchContainer>
			<Box sx={{ width: 320, mx: 'auto' }}>
				<Button size='large' onClick={handleSearch} variant='contained'>
					Search
				</Button>
			</Box>
			{wordsInfluence && <WordsInfluenceChart wordsInfluence={wordsInfluence} />}
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
