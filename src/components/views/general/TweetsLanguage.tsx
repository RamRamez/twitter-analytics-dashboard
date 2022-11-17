import { Typography } from '@mui/material';
import styled from '@emotion/styled';

function TweetsLanguage() {
	return (
		<Wrapper>
			<Typography sx={{ fontWeight: 'bold', textAlign: 'center', my: 5 }} variant='h5'>
				Tweets Language
			</Typography>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin: 50px auto;
`;

export default TweetsLanguage;
