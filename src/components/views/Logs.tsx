import { Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { fetchLogs } from '../../api/apiRequests';
import { showToastError } from '../../lib/helpers';
import TooltipHelp from '../TooltipHelp';
import { FlexCenter } from '../styled-components/flex';

const logUpdateInterval = 3;

export default function Logs() {
	const [logs, setLogs] = useState<string>('');

	const handleFetchLogs = () => {
		fetchLogs()
			.then(res => setLogs(res.logs))
			.catch(showToastError);
	};

	useEffect(() => {
		handleFetchLogs();
		const logFetchInterval = setInterval(handleFetchLogs, logUpdateInterval * 1000);
		return () => {
			clearInterval(logFetchInterval);
		};
	}, []);

	return (
		<ContainerStyled>
			<div>
				<FlexCenter>
					<Typography sx={{ fontWeight: 'bold' }} variant='h4'>
						Logs
					</Typography>
					<TooltipHelp title={tooltipCopy} />
				</FlexCenter>
				<br />
				<div>{logs}</div>
			</div>
		</ContainerStyled>
	);
}

const tooltipCopy = `Logs are a great way to see what's going on behind the scenes. No need to refresh the page, logs will be updated automatically every ${logUpdateInterval} seconds.`;

const ContainerStyled = styled(Container)`
	margin-top: 100px;
	margin-bottom: 50px;
	white-space: pre-wrap;
	> div {
		margin: 0 50px;
	}
`;
