import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { ITimeRangeProps } from '../../../types/timeRange';
import { ITweetsMonthly } from '../../../types/api';
import { fetchTweetsMonthly } from '../../../api/apiRequests';

function TweetsMonthly(props: ITimeRangeProps) {
	const { timeRange } = props;
	const [tweetsMonthly, setTweetsMonthly] = useState<ITweetsMonthly[]>();

	useEffect(() => {
		fetchTweetsMonthly({ timeRange }).then(setTweetsMonthly);
	}, [timeRange]);

	const data = tweetsMonthly?.map(i => ({
		name: i.date,
		y: i.count,
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
			type: 'category',
		},
		tooltip: {
			enabled: true,
			pointFormat: '<b>Count: {point.y}</b>',
		},
		legend: {
			enabled: false,
		},
		series: [{ data }],
	};

	return (
		<Wrapper>
			<Typography
				sx={{ fontWeight: 'bold', textAlign: 'center', my: 5 }}
				variant='h5'
			>
				Tweets Abundance Monthly
			</Typography>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin: 50px auto;
`;

export default TweetsMonthly;
