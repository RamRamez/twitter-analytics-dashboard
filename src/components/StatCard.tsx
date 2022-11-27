import { Card, CardContent, colors, Typography } from '@mui/material';
import styled from '@emotion/styled';

interface IStatCardProps {
	title: string;
	value?: number | string;
	icon: string;
}

function StatCard(props: IStatCardProps) {
	const { title, value, icon } = props;
	return (
		<Card sx={{ width: 390, overflow: 'unset', background: colors.grey[100] }}>
			<ImageContainer>
				<img src={icon} alt={title} />
			</ImageContainer>
			<CardContent sx={{ textAlign: 'center' }}>
				<Typography gutterBottom variant='h6' component='div'>
					{title}
				</Typography>
				<Typography
					sx={{ fontWeight: 'bold' }}
					variant='h5'
					color='text.secondary'
				>
					{value}
				</Typography>
			</CardContent>
		</Card>
	);
}

const ImageContainer = styled.div`
	object-fit: contain;
	width: 100%;
	margin-top: -50px;
	text-align: center;
	overflow: unset;
	> img {
		width: 30%;
	}
`;

export default StatCard;
