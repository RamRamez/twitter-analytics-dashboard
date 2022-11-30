import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import styled from '@emotion/styled';
import wordCloud from 'highcharts/modules/wordcloud';
import { IWordCloud } from '../../../types/api';

interface IProps {
	wordCloud: IWordCloud[];
}

wordCloud(Highcharts);

export default function WordCloudChart({ wordCloud }: IProps) {
	const options = {
		series: [
			{
				type: 'wordcloud',
				data: wordCloud.map(i => [i.word, i.count]),
				name: 'Occurrences',
			},
		],
		chart: {
			height: 600,
		},
		title: { text: null },
		plotOptions: {
			series: {
				animation: {
					duration: 2000,
				},
			},
		},
	};

	return (
		<Wrapper>
			<HighchartsReact highcharts={Highcharts} options={options} />
		</Wrapper>
	);
}

const Wrapper = styled.div`
	margin: 50px auto;
`;
