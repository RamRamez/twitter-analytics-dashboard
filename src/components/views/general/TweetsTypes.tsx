import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { fetchTweetsTypes } from '../../../api/apiRequests';
import { ITimeAndUserProps } from '../../../types/timeAndUserProps';
import { ITweetsType } from '../../../types/api';
import { FlexCenter } from '../../styled-components/flex';
import { ITimeAndUserQuery } from '../../../types/query';
import TooltipHelp from '../../TooltipHelp';

function TweetsTypes(props: ITimeAndUserProps) {
	const { timeRange, user } = props;
	const [tweetsTypes, setTweetsTypes] = useState<ITweetsType[]>();

	useEffect(() => {
		const query: ITimeAndUserQuery = { timeRange };
		if (user) query.users = [user];
		fetchTweetsTypes(query).then(setTweetsTypes);
	}, [timeRange, user]);

	const data = tweetsTypes?.map(i => ({
		name: i.type,
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
			<FlexCenter>
				<Typography sx={{ fontWeight: 'bold', textAlign: 'center' }} variant='h5'>
					Tweets Types
				</Typography>
				<TooltipHelp title={tooltipCopy} />
			</FlexCenter>
			<br />
			<HighchartsReact highcharts={Highcharts} options={options} />
		</Wrapper>
	);
}

const tooltipCopy =
	'Some reply tweets contain quotes. Thus, the sum of tweet types may be greater than the total number of tweets.';

const Wrapper = styled.div`
	margin: 50px auto;
`;

export default TweetsTypes;
