import { Typography } from '@mui/material';
import styled from '@emotion/styled';

function TweetsTime() {
	return (
		<Wrapper>
			<Typography
				sx={{ fontWeight: 'bold', textAlign: 'center', my: 5 }}
				variant='h5'
			>
				Tweets Time
			</Typography>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin: 50px auto;
`;

export default TweetsTime;
