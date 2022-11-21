import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { hashtagAbundance } from './General.index';

interface IProps {
	tags?: hashtagAbundance[];
}

function HashtagsAbundance(props: IProps) {
	const { tags } = props;
	return (
		<Wrapper>
			<Typography
				sx={{ fontWeight: 'bold', textAlign: 'center', my: 5 }}
				variant='h5'
			>
				Hashtags Abundance
			</Typography>
			<TagsContainer>
				{tags?.map(tag => (
					<div key={tag.tag}>
						<Typography variant='h6'>{tag.tag}</Typography>
						<Typography
							sx={{ mt: 1, fontWeight: 'bold' }}
							variant='h5'
							color='text.secondary'
						>
							{tag.count}
						</Typography>
					</div>
				))}
			</TagsContainer>
		</Wrapper>
	);
}

const TagsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 20px;
	text-align: center;
`;

const Wrapper = styled.div`
	margin: 50px auto;
`;

export default HashtagsAbundance;
