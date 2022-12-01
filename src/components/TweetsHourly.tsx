import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import { ITimeAndUserProps } from '../types/timeAndUserProps';
import { ITweetsHourly } from '../types/api';
import { fetchTweetsHourly } from '../api/apiRequests';
import { FlexCenter } from './styled-components/flex';
import TooltipHelp from './TooltipHelp';
import { ITimeAndUserQuery } from '../types/query';

function TweetsHourly(props: ITimeAndUserProps) {
	const { timeRange, user } = props;
	const [tweetsHourly, setTweetsHourly] = useState<ITweetsHourly[]>();

	useEffect(() => {
		const query: ITimeAndUserQuery = { timeRange };
		if (user) query.users = [user];
		fetchTweetsHourly(query).then(setTweetsHourly);
	}, [timeRange, user]);

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
					Tweets Created Hourly
				</Typography>
				<TooltipHelp title='Shows tweets created time (hourly). Tweets are saved in GMT time-zone' />
			</FlexCenter>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin: 50px auto;
`;

export default TweetsHourly;
