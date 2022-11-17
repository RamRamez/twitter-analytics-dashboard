import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import styled from '@emotion/styled';

function SocialNetwork() {
	return (
		<Wrapper>
			<Typography sx={{ fontWeight: 'bold', textAlign: 'center', my: 5 }} variant='h5'>
				Social Network Analysis
			</Typography>
			<Box sx={{ width: 220, mx: 'auto' }}>
				<FormControl fullWidth>
					<InputLabel>Sort By</InputLabel>
					<Select
						// value={age}
						label='Sort By'
						// onChange={handleChange}
					>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>
			</Box>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin: 50px auto;
`;

export default SocialNetwork;
