import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { useEffect, useState } from 'react';
import { ITweetsSource } from '../../../types/api';
import { fetchTweetsSource } from '../../../api/apiRequests';
import { ITimeRangeProps } from '../../../types/timeRange';

function TweetsSource(props: ITimeRangeProps) {
	const { timeRange } = props;
	const [tweetsSource, setTweetsSource] = useState<ITweetsSource[]>();

	useEffect(() => {
		fetchTweetsSource().then(setTweetsSource);
	}, [timeRange]);

	const data = tweetsSource?.map(i => ({
		name: i.source,
		y: i.count,
	}));
	const options = {
		chart: {
			plotBackgroundColor: null,
			type: 'pie',
		},
		title: {
			text: null,
		},
		tooltip: {
			enabled: true,
			pointFormat: '<b>Count: {point.y}</b>',
		},
		series: [
			{
				colorByPoint: true,
				data,
			},
		],
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					format: '<b>{point.name}</b>: {point.percentage:.1f} %',
				},
			},
		},
	};

	return (
		<Wrapper>
			<Typography
				sx={{ fontWeight: 'bold', textAlign: 'center', my: 5 }}
				variant='h5'
			>
				Tweets Source
			</Typography>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin: 50px auto;
`;

export default TweetsSource;
