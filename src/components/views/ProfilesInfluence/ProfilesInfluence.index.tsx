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
import { fetchProfilesInfluence } from '../../../api/apiRequests';
import { IProfilesInfluence } from '../../../types/api';
import { queryCreator } from '../../../lib/helpers';
import ProfilesInfluenceChart from './ProfilesInfluenceChart';

const defaultTweetTypes = [
	TTweetOnly.tweet,
	EReferencedTweetsType.quoted,
	EReferencedTweetsType.replied_to,
];

export default function ProfilesInfluenceIndex() {
	const [users, setUsers] = useState<string[]>([]);
	const [tweetTypes, setTweetTypes] = useState<TTweetTypes[]>(defaultTweetTypes);
	const [fromDate, setFromDate] = useState<Date | null>(null);
	const [toDate, setToDate] = useState<Date | null>(null);
	const [search, setSearch] = useState<string>('');
	const [profilesInfluence, setProfilesInfluence] = useState<IProfilesInfluence[]>();
	const [hasError, setHasError] = useState(false);

	const handleSearch = () => {
		if (users.length === 0) {
			setHasError(true);
		} else {
			setHasError(false);
			const query = queryCreator({ users, tweetTypes, fromDate, toDate, search });
			fetchProfilesInfluence(query).then(setProfilesInfluence);
		}
	};

	return (
		<Container sx={{ my: 15 }}>
			<FlexCenter>
				<Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} variant='h5'>
					Profiles Influence
				</Typography>
				<TooltipHelp title='Profiles Influence shows average retweet count of filtered tweets for each selected profile. The retweet count for a retweet belongs to the original tweet, so to have valid retweet average for a profile, you should exclude retweets. Influence of different profiles can be compared via select profiles' />
			</FlexCenter>
			<SelectProfiles
				error={hasError}
				multiple
				selectedUsers={users}
				setSelectedUsers={setUsers}
			/>
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
				<TooltipHelp title='Search in tweets text to filter selected tweets' />
			</SearchContainer>
			<Box sx={{ width: 320, mx: 'auto' }}>
				<Button size='large' onClick={handleSearch} variant='contained'>
					Search
				</Button>
			</Box>
			{profilesInfluence && (
				<ProfilesInfluenceChart profilesInfluence={profilesInfluence} />
			)}
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
