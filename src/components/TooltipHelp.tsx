import { IconButton, Tooltip } from '@mui/material';
import { Help } from '@mui/icons-material';

interface ITooltipProps {
	title: string;
}

export default function TooltipHelp({ title }: ITooltipProps) {
	return (
		<Tooltip placement='top' title={title}>
			<IconButton>
				<Help />
			</IconButton>
		</Tooltip>
	);
}
