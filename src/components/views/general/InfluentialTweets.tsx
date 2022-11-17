import { Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import styled from '@emotion/styled';

function InfluentialTweets() {
	return (
		<Wrapper>
			<Typography sx={{ fontWeight: 'bold', textAlign: 'center', mb: 5 }} variant='h5'>
				Most Influential Tweets
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

export default InfluentialTweets;
