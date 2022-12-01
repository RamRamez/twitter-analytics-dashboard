import {
	Box,
	Chip,
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchUsers } from '../../api/apiRequests';
import { IUserList } from '../../types/api';

interface IProps {
	error?: boolean;
}

interface ISelectProfilesProps extends IProps {
	selectedUsers: string[];
	setSelectedUsers: (users: string[]) => void;
	multiple: true;
}

interface ISelectProfileProps extends IProps {
	selectedUsers: string;
	setSelectedUsers: (user: string) => void;
	multiple?: false;
}

type TSelectProfileProps = ISelectProfilesProps | ISelectProfileProps;

export default function SelectProfiles(props: TSelectProfileProps) {
	const { selectedUsers, setSelectedUsers, multiple, error } = props;
	const [users, setUsers] = useState<IUserList[]>();

	useEffect(() => {
		fetchUsers().then(setUsers);
	}, []);

	return (
		<Box sx={{ width: 320, mx: 'auto', mt: 5 }}>
			<FormControl fullWidth error={error}>
				<InputLabel>Select Profile{multiple ? 's' : ''}</InputLabel>
				<Select
					value={selectedUsers}
					label={`Select Profile${multiple ? 's' : ''}`}
					multiple={multiple}
					onChange={e => setSelectedUsers(e.target.value as any)}
					renderValue={selected => (
						<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
							{!multiple
								? selected
								: (selected as string[]).map(value => (
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
				{error && <FormHelperText>This field is required</FormHelperText>}
			</FormControl>
		</Box>
	);
}
