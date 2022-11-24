import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { useEffect, useState } from 'react';
import { ITweetsLanguages } from '../../../types/api';
import { fetchTweetsLanguages } from '../../../api/apiRequests';
import { ITimeRangeProps } from '../../../types/timeRange';

function TweetsLanguage(props: ITimeRangeProps) {
	const { timeRange } = props;
	const [tweetsLanguages, setTweetsLanguages] = useState<ITweetsLanguages[]>();

	useEffect(() => {
		fetchTweetsLanguages().then(setTweetsLanguages);
	}, [timeRange]);

	const data = tweetsLanguages?.map(i => ({
		name: i.lang,
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
				Tweets Language
			</Typography>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin: 50px auto;
`;

export default TweetsLanguage;
