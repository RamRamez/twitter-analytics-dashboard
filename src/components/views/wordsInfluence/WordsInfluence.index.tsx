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
import { fetchWordCloud } from '../../../api/apiRequests';
import { IWordCloud } from '../../../types/api';
import { queryCreator } from '../../../lib/helpers';
import WordCloudChart from '../wordCloud/WordCloudChart';

export default function WordsInfluenceIndex() {
	const [users, setUsers] = useState<string[]>([]);
	const [tweetTypes, setTweetTypes] = useState<TTweetTypes[]>([]);
	const [fromDate, setFromDate] = useState<Date | null>(null);
	const [toDate, setToDate] = useState<Date | null>(null);
	const [search, setSearch] = useState<string>('');
	const [wordsInfluence, setWordsInfluence] = useState<IWordCloud[]>();

	const handleSearch = () => {
		const query = queryCreator({ users, tweetTypes, fromDate, toDate, search });
		fetchWordCloud(query).then(setWordsInfluence);
	};

	return (
		<Container sx={{ my: 15 }}>
			<FlexCenter>
				<Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} variant='h5'>
					Words Influence
				</Typography>
				<TooltipHelp title='Word Influence shows average retweet count for filtered tweets. The retweet count for a retweet belongs to the original tweet, so to have valid retweet average for a profile, you should exclude retweets.' />
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
					label='Search'
					variant='outlined'
					sx={{ width: '100%' }}
				/>
				<TooltipHelp title='Search inside tweets text to limit words influence tweets range.' />
			</SearchContainer>
			<Box sx={{ width: 320, mx: 'auto' }}>
				<Button size='large' onClick={handleSearch} variant='contained'>
					Search
				</Button>
			</Box>
			{wordsInfluence && <WordCloudChart wordCloud={wordsInfluence} />}
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
