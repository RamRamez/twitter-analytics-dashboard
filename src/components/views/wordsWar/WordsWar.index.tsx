import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import styled from '@emotion/styled';
import { TTweetTypes } from '../../../types/referencedTweetsType';
import { FlexCenter } from '../../styled-components/flex';
import TooltipHelp from '../../TooltipHelp';
import SelectProfiles from '../../select-components/selectProfiles';
import SelectTweetTypes from '../../select-components/selectTweetTypes';
import SelectFromDate from '../../select-components/selectFromDate';
import SelectToDate from '../../select-components/selectToDate';
import { ISearchQuery } from '../../../types/query';
import { fetchWordsWar } from '../../../api/apiRequests';
import { IWordsWar } from '../../../types/api';
import WordsWarColumnChart from './WordsWarColumnChart';

export default function WordsWarIndex() {
	const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
	const [selectedTweetTypes, setSelectedTweetTypes] = useState<TTweetTypes[]>([]);
	const [fromDate, setFromDate] = useState<Date | null>(null);
	const [toDate, setToDate] = useState<Date | null>(null);
	const [searchText, setSearchText] = useState<string>('');
	const [wordsWar, setWordsWar] = useState<IWordsWar[]>();
	console.log(wordsWar);

	const handleSearch = () => {
		const query: ISearchQuery = {};
		if (selectedUsers.length > 0) query.users = selectedUsers;
		if (searchText) query.search = searchText;
		if (selectedTweetTypes.length > 0) query.tweetTypes = selectedTweetTypes;
		if (fromDate) query.fromDate = fromDate;
		if (toDate) query.toDate = toDate;
		fetchWordsWar(query).then(setWordsWar);
	};

	return (
		<Container sx={{ my: 15 }}>
			<FlexCenter>
				<Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} variant='h5'>
					Words War
				</Typography>
				<TooltipHelp title='Comparison of words usage abundance per month. Comparison is regarding to search terms.' />
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
			<SelectFromDate fromDate={fromDate} setFromDate={setFromDate} />
			<SelectToDate toDate={toDate} setToDate={setToDate} />
			<SearchContainer>
				<TextField
					onChange={e => setSearchText(e.target.value)}
					label='Search terms'
					variant='outlined'
					sx={{ width: '100%' }}
				/>
				<TooltipHelp title='Search terms compares words usage abundance. Separate words with comma (,)' />
			</SearchContainer>
			<Box sx={{ width: 320, mx: 'auto' }}>
				<Button size='large' onClick={handleSearch} variant='contained'>
					Search
				</Button>
			</Box>
			{wordsWar && <WordsWarColumnChart wordsWar={wordsWar} />}
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
