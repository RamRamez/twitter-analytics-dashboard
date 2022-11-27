import { useEffect, useState } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { fetchUsers } from '../../../api/apiRequests';
import { IUserList } from '../../../types/api';

interface IProfileSelectProps {
	user: string | undefined;
	setUser: (user: string) => void;
}

export default function ProfileSelect(props: IProfileSelectProps) {
	const { user, setUser } = props;
	const [users, setUsers] = useState<IUserList[]>();

	useEffect(() => {
		fetchUsers().then(setUsers);
	}, []);

	return (
		<div>
			<Box sx={{ width: 320, mx: 'auto', mt: 5 }}>
				<FormControl fullWidth>
					<InputLabel>Profile</InputLabel>
					<Select
						value={user}
						label='Select Profile'
						onChange={e => setUser(e.target.value)}
					>
						{users?.map(i => (
							<MenuItem value={i.username} key={i.username}>
								{i.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
		</div>
	);
}
