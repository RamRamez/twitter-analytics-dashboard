import { Typography } from '@mui/material';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import styled from '@emotion/styled';
import { IWordsInfluence } from '../../../types/api';

interface IProps {
	wordsInfluence: IWordsInfluence[];
}

export default function WordsInfluenceChart({ wordsInfluence }: IProps) {
	const series = wordsInfluence.map(i => ({
		name: i.word,
		data: i.wordsInfluence.map(j => [
			new Date(j.date).getTime(),
			Math.round(j.retweetAverage),
		]),
	}));

	const options = {
		chart: {
			type: 'column',
			zoomType: 'x',
		},
		title: { text: null },
		subtitle: {
			text: '(Click and drag to zoom in)',
		},
		xAxis: {
			type: 'datetime',
		},
		tooltip: {
			enabled: true,
			headerFormat: '',
			pointFormat: '<b>{series.name} retweet avg: {point.y}</b>',
		},
		series,
	};

	return (
		<Wrapper>
			<Typography
				sx={{ fontWeight: 'bold', textAlign: 'center', my: 5 }}
				variant='h5'
			>
				Retweet Average Monthly
			</Typography>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin: 50px auto;
`;
