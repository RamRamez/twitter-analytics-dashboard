import { Typography } from '@mui/material';
import styled from '@emotion/styled';

function HashtagsAbundance() {
	return (
		<Wrapper>
			<Typography sx={{ fontWeight: 'bold', textAlign: 'center', my: 5 }} variant='h5'>
				Hashtags Abundance
			</Typography>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin: 50px auto;
`;

export default HashtagsAbundance;
