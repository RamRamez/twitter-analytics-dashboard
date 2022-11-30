import { Typography } from '@mui/material';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import styled from '@emotion/styled';
import { IWordsWar } from '../../../types/api';

interface IProps {
	wordsWar: IWordsWar[];
}

export default function WordsWarColumnChart({ wordsWar }: IProps) {
	const series = wordsWar.map(i => ({
		name: i.word,
		data: i.wordsWar.map(j => [new Date(j.date).getTime(), j.count]),
	}));

	// const x: stringx[] = [];
	// wordsWar.forEach(i => {
	// 	i.wordsWar.forEach(j => {
	// 		x.push(j.date);
	// 	});
	// });
	// x.sort();
	// console.log(new Set(x));

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
			// type: 'datetime',
			// labels: {
			// 	formatter() {
			// 		return Highcharts.dateFormat('%b/%e/%Y', Date.now());
			// 	},
			// },
		},
		tooltip: {
			enabled: true,
			pointFormat: '<b>{series.name} count: {point.y}</b>',
		},
		series,
	};

	return (
		<Wrapper>
			<Typography
				sx={{ fontWeight: 'bold', textAlign: 'center', my: 5 }}
				variant='h5'
			>
				Words Abundance Monthly
			</Typography>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin: 50px auto;
`;
