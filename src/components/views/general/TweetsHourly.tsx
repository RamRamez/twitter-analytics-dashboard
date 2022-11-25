import { IconButton, Tooltip, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { Help } from '@mui/icons-material';
import { ITimeRangeProps } from '../../../types/timeRange';
import { ITweetsHourly } from '../../../types/api';
import { fetchTweetsHourly } from '../../../api/apiRequests';
import { FlexCenter } from '../../styled-components/flex';

function TweetsHourly(props: ITimeRangeProps) {
	const { timeRange } = props;
	const [tweetsHourly, setTweetsHourly] = useState<ITweetsHourly[]>();

	useEffect(() => {
		fetchTweetsHourly({ timeRange }).then(setTweetsHourly);
	}, [timeRange]);

	const data = tweetsHourly?.map(i => ({
		name: i.hour,
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
			<FlexCenter>
				<Typography
					sx={{ fontWeight: 'bold', textAlign: 'center', my: 5 }}
					variant='h5'
				>
					Tweets Abundance Hourly
				</Typography>
				<Tooltip placement='top' title='Tweets are saved in GMT time-zone'>
					<IconButton>
						<Help />
					</IconButton>
				</Tooltip>
			</FlexCenter>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin: 50px auto;
`;

export default TweetsHourly;
