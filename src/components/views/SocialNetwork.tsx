import {
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Typography,
} from '@mui/material';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { FlexCenter } from '../styled-components/flex';
import { fetchSocialNetwork } from '../../api/apiRequests';
import { ISocialNetwork } from '../../types/api';
import { EReferencedTweetsType } from '../../types/referencedTweetsType';
import { ITimeAndUserProps } from '../../types/timeAndUserProps';
import { ISocialNetworkQuery } from '../../types/query';
import TooltipHelp from '../TooltipHelp';

function SocialNetwork(props: ITimeAndUserProps) {
	const { timeRange, user } = props;
	const [socialNetwork, setSocialNetwork] = useState<ISocialNetwork[]>();
	const [type, setType] = useState(EReferencedTweetsType.retweeted);

	useEffect(() => {
		const query: ISocialNetworkQuery = { timeRange, type };
		if (user) query.users = [user];
		fetchSocialNetwork(query).then(setSocialNetwork);
	}, [type, timeRange, user]);

	return (
		<Wrapper>
			<FlexCenter>
				<Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} variant='h5'>
					Social Network Analysis
				</Typography>
				<TooltipHelp title={tooltipCopy} />
			</FlexCenter>
			<Box sx={{ width: 220, mx: 'auto', mt: 5 }}>
				<FormControl fullWidth>
					<InputLabel>Type</InputLabel>
					<Select
						value={type}
						label='Select Type'
						onChange={e => setType(e.target.value as EReferencedTweetsType)}
					>
						<MenuItem value={EReferencedTweetsType.retweeted}>
							Retweeted
						</MenuItem>
						<MenuItem value={EReferencedTweetsType.quoted}>Quoted</MenuItem>
						<MenuItem value={EReferencedTweetsType.replied_to}>
							Replied to
						</MenuItem>
					</Select>
				</FormControl>
			</Box>
			<TagsContainer>
				{socialNetwork?.map(i => (
					<div key={i.username}>
						<Typography variant='h6'>{i.username}</Typography>
						<Typography
							sx={{ mt: 1, fontWeight: 'bold' }}
							variant='h5'
							color='text.secondary'
						>
							{i.count}
						</Typography>
					</div>
				))}
			</TagsContainer>
		</Wrapper>
	);
}

const tooltipCopy =
	'Social Network Analysis shows which twitter users has influenced DB users (or selected user) the most. It has three types: retweeted, quoted and replied to. e.g. type retweeted means that the user/DB users has retweeted whose tweets the most.';

const TagsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 20px;
	text-align: center;
	margin-top: 20px;
`;

const Wrapper = styled.div`
	margin: 50px auto;
`;

export default SocialNetwork;
