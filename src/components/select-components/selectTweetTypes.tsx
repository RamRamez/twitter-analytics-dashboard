import { Box, Chip, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import {
	EReferencedTweetsType,
	TTweetOnly,
	TTweetTypes,
} from '../../types/referencedTweetsType';

interface ISelectTweetTypesProps {
	selectedTweetTypes: TTweetTypes[];
	setSelectedTweetTypes: (tweetTypes: TTweetTypes[]) => void;
}

export default function SelectTweetTypes(props: ISelectTweetTypesProps) {
	const { selectedTweetTypes, setSelectedTweetTypes } = props;
	return (
		<Box sx={{ width: 320, mx: 'auto', mt: 5 }}>
			<FormControl fullWidth>
				<InputLabel>Select Tweet Types</InputLabel>
				<Select
					value={selectedTweetTypes}
					label='Select Tweet Types'
					multiple
					onChange={e => setSelectedTweetTypes(e.target.value as TTweetTypes[])}
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
	);
}

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
