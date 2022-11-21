import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FormEvent, useState } from 'react';
import { apiSignIn } from '../../api/apiRequests';
import { showToastError } from '../../lib/helpers';
import { EToastType, gToast } from '../gToast';

interface ISignInProps {
	setIsSignedIn: (isSignedIn: boolean) => void;
}

export default function SignIn(props: ISignInProps) {
	const { setIsSignedIn } = props;
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState({ username: false, password: false });

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const isUsernameValid = username.length > 0;
		const isPasswordValid = password.length > 0;
		setError({ username: !isUsernameValid, password: !isPasswordValid });
		if (isUsernameValid && isPasswordValid) {
			apiSignIn({ username, password })
				.then(res => {
					gToast(`Welcome ${res.name}`, { type: EToastType.SUCCESS });
					setIsSignedIn(true);
				})
				.catch(showToastError);
		}
	};

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign in
				</Typography>
				<Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
					<TextField
						error={error.username}
						helperText={error.username ? 'This field is required' : ''}
						margin='normal'
						required
						fullWidth
						label='Username'
						name='username'
						autoComplete='username'
						autoFocus
						onChange={e => setUsername(e.target.value)}
						value={username}
					/>
					<TextField
						error={error.password}
						helperText={error.password ? 'This field is required' : ''}
						margin='normal'
						required
						fullWidth
						name='password'
						label='Password'
						type='password'
						autoComplete='current-password'
						onChange={e => setPassword(e.target.value)}
						value={password}
					/>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}
					>
						Sign In
					</Button>
				</Box>
			</Box>
		</Container>
	);
}
