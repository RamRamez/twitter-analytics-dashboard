import { useEffect, useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { addToken, fetchToken } from '../../../api/apiRequests';
import { showToastError } from '../../../lib/helpers';
import { EToastType, gToast } from '../../gToast';

export default function AdminIndex() {
	const [token, setToken] = useState('');
	const [newToken, setNewToken] = useState('');

	const handleSetToken = () => {
		addToken({ token: newToken })
			.then(res => {
				gToast(res.message, { type: EToastType.SUCCESS });
				setToken(newToken);
			})
			.catch(showToastError);
	};

	useEffect(() => {
		fetchToken()
			.then(res => setToken(res.token))
			.catch(showToastError);
	}, []);

	return (
		<Container sx={{ my: 15, mx: 'auto', maxWidth: '500px' }}>
			<Typography
				sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2 }}
				variant='h5'
			>
				Twitter API Token
			</Typography>
			<CurrentToken>
				{token ? `Current token: ${token}` : 'No token found'}
			</CurrentToken>
			<AddToken>
				<TextField
					onChange={e => setNewToken(e.target.value)}
					label='Add Token'
					variant='standard'
				/>
				<Button onClick={handleSetToken} variant='contained'>
					Add
				</Button>
			</AddToken>
		</Container>
	);
}

const CurrentToken = styled.div`
	word-break: break-all;
`;

const AddToken = styled.div`
	display: flex;
	align-items: center;
	margin: 20px 0;
`;
