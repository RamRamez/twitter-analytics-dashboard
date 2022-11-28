import {
	Box,
	Chip,
	Container,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { FlexCenter } from '../../styled-components/flex';
import TooltipHelp from '../../TooltipHelp';
import { IUserList } from '../../../types/api';
import { fetchUsers } from '../../../api/apiRequests';
import {
	EReferencedTweetsType,
	TTweetOnly,
	TTweetTypes,
} from '../../../types/referencedTweetsType';
import { ESortByDate } from '../../../types/sortBy';
import { EPublicMetrics } from '../../../types/publicMetrics';

export default function FilterIndex() {
	const [users, setUsers] = useState<IUserList[]>();
	const [selectedUsers, setSelectedUsers] = useState<string[]>([]);
	const [selectedTweetTypes, setSelectedTweetTypes] = useState<TTweetTypes[]>([]);
	const [selectedSortBy, setSelectedSortBy] = useState<
		ESortByDate | EPublicMetrics | ''
	>('');
	const [fromDate, setFromDate] = useState<Date | null>(null);
	const [toDate, setToDate] = useState<Date | null>(null);

	console.log(selectedUsers);

	useEffect(() => {
		fetchUsers().then(setUsers);
	}, []);

	return (
		<Container sx={{ my: 15 }}>
			<FlexCenter>
				<Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} variant='h5'>
					Advanced Filters
				</Typography>
				<TooltipHelp title={tooltipCopy} />
			</FlexCenter>
			<Box sx={{ width: 320, mx: 'auto', mt: 5 }}>
				<FormControl fullWidth>
					<InputLabel>Select Profiles</InputLabel>
					<Select
						value={selectedUsers}
						label='Select Profiles'
						multiple
						onChange={e => setSelectedUsers(e.target.value as string[])}
						renderValue={selected => (
							<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
								{selected.map(value => (
									<Chip key={value} label={value} />
								))}
							</Box>
						)}
					>
						{users?.map(i => (
							<MenuItem value={i.username} key={i.username}>
								{i.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
			<Box sx={{ width: 320, mx: 'auto', mt: 5 }}>
				<FormControl fullWidth>
					<InputLabel>Select Tweet Types</InputLabel>
					<Select
						value={selectedTweetTypes}
						label='Select Tweet Types'
						multiple
						onChange={e =>
							setSelectedTweetTypes(e.target.value as TTweetTypes[])
						}
						renderValue={selected => (
							<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
								{selected.map(value => (
									<Chip key={value} label={value} />
								))}
							</Box>
						)}
					>
						{tweetTypes.map(i => (
							<MenuItem value={i.value} key={i.value}>
								{i.label}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
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
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DesktopDatePicker
					label='From Date'
					inputFormat='MM/DD/YYYY'
					value={fromDate}
					onChange={setFromDate}
					renderInput={params => <TextField {...params} />}
				/>
			</LocalizationProvider>
		</Container>
	);
}

const tooltipCopy = 'Advanced filtering options for DB tweets.';

const tweetTypes = [
	{
		label: 'Retweet',
		value: EReferencedTweetsType.retweeted,
	},
	{
		label: 'Quote',
		value: EReferencedTweetsType.quoted,
	},
	{
		label: 'Reply',
		value: EReferencedTweetsType.replied_to,
	},
	{
		label: 'Tweet',
		value: TTweetOnly.tweet,
	},
];

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
