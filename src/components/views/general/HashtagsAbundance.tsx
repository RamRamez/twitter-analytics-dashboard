import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { ITimeAndUserProps } from '../../../types/timeAndUserProps';
import { fetchHashtagsAbundance } from '../../../api/apiRequests';
import { IHashtagAbundance } from '../../../types/api';
import { ITimeAndUserQuery } from '../../../types/query';

function HashtagsAbundance(props: ITimeAndUserProps) {
	const { timeRange, user } = props;
	const [hashtagsAbundance, setHashtagsAbundance] = useState<IHashtagAbundance[]>();

	useEffect(() => {
		const query: ITimeAndUserQuery = { timeRange };
		if (user) query.users = [user];
		fetchHashtagsAbundance(query).then(setHashtagsAbundance);
	}, [timeRange, user]);

	return (
		<Wrapper>
			<Typography
				sx={{ fontWeight: 'bold', textAlign: 'center', my: 5 }}
				variant='h5'
			>
				Hashtags Abundance
			</Typography>
			<TagsContainer>
				{hashtagsAbundance?.map(tag => (
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
