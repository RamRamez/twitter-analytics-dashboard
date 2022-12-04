import { Box, Button, Container, TextField } from '@mui/material';
import { useState } from 'react';
import { addProfiles } from '../../../api/apiRequests';
import { showToastError } from '../../../lib/helpers';
import { EToastType, gToast } from '../../gToast';
import TooltipHelp from '../../TooltipHelp';
import { FlexCenter } from '../../styled-components/flex';

export default function AddProfilesIndex() {
	const [users, setUsers] = useState<string>('');
	const [error, setError] = useState(false);

	const handleAdd = () => {
		if (!users) {
			setError(true);
			return;
		}
		setError(false);
		gToast('Adding profiles...', { type: EToastType.INFO });
		addProfiles({ users: users.split(',') })
			.then(res => {
				gToast(res.message, { type: EToastType.SUCCESS });
			})
			.catch(showToastError);
	};

	return (
		<Container sx={{ my: 15 }}>
			<Box sx={{ width: 320, mx: 'auto', mt: 5 }}>
				<FlexCenter>
					<TextField
						onChange={e => setUsers(e.target.value)}
						label='Profiles to add to DB'
						variant='outlined'
						required
						sx={{ width: '100%' }}
						error={error}
						helperText={error && 'This field is required'}
					/>
					<TooltipHelp title={tooltipCopy} />
				</FlexCenter>
				<Button
					sx={{ mt: 3 }}
					size='large'
					onClick={handleAdd}
					variant='contained'
				>
					Add Profiles
				</Button>
			</Box>
		</Container>
	);
}

const tooltipCopy =
	'Enter a comma separated list of twitter accounts to add to the database. For example: "Givethio, Generalmagicio, commonsstack"';
