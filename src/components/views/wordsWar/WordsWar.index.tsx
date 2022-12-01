import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import styled from '@emotion/styled';
import { TTweetTypes } from '../../../types/referencedTweetsType';
import { FlexCenter } from '../../styled-components/flex';
import TooltipHelp from '../../TooltipHelp';
import SelectProfiles from '../../select-components/SelectProfiles';
import SelectTweetTypes from '../../select-components/SelectTweetTypes';
import SelectFromDate from '../../select-components/SelectFromDate';
import SelectToDate from '../../select-components/SelectToDate';
import { fetchWordsWar } from '../../../api/apiRequests';
import { IWordsWar } from '../../../types/api';
import WordsWarColumnChart from './WordsWarColumnChart';
import { queryCreator } from '../../../lib/helpers';

export default function WordsWarIndex() {
	const [users, setUsers] = useState<string[]>([]);
	const [tweetTypes, setTweetTypes] = useState<TTweetTypes[]>([]);
	const [fromDate, setFromDate] = useState<Date | null>(null);
	const [toDate, setToDate] = useState<Date | null>(null);
	const [search, setSearch] = useState<string>('');
	const [wordsWar, setWordsWar] = useState<IWordsWar[]>();
	const [hasError, setHasError] = useState(false);

	const handleSearch = () => {
		if (!search) {
			setHasError(true);
		} else {
			setHasError(false);
			const query = queryCreator({ users, tweetTypes, fromDate, toDate, search });
			fetchWordsWar(query).then(setWordsWar);
		}
	};

	return (
		<Container sx={{ my: 15 }}>
			<FlexCenter>
				<Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} variant='h5'>
					Words War
				</Typography>
				<TooltipHelp title='Comparison of words occurrences per month. Comparison is regarding to search terms.' />
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
				<TooltipHelp title='Search terms compares words occurrences. Separate words with comma (,)' />
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
