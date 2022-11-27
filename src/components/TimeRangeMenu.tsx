import styled from '@emotion/styled';
import zIndex from '@mui/material/styles/zIndex';
import { colors, Divider, IconButton, MenuItem } from '@mui/material';
import { History } from '@mui/icons-material';
import { useRef, useState } from 'react';
import { ETimeRange } from '../types/timeAndUserProps';
import { useOnClickOutside } from '../hooks/useOnClickOutside';

interface IProps {
	setTimeRange: (timeRange: ETimeRange) => void;
	timeRange: ETimeRange;
}

export default function TimeRangeMenu(props: IProps) {
	const { setTimeRange, timeRange } = props;

	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	const handleClose = () => setIsOpen(false);
	const handleClick = () => setIsOpen(!isOpen);

	useOnClickOutside(menuRef, handleClose);

	return (
		<div ref={menuRef}>
			<MenuContainer onClick={handleClick}>
				<IconButton color='inherit'>
					<History />
				</IconButton>
			</MenuContainer>
			{isOpen && (
				<DropDown onClick={handleClose}>
					<MenuItem>Analysis Time Range</MenuItem>
					<Divider />
					{timeRangeItems.map(i => (
						<MenuItem
							selected={timeRange === i.value}
							key={i.value}
							onClick={() => setTimeRange(i.value)}
						>
							{i.label}
						</MenuItem>
					))}
				</DropDown>
			)}
		</div>
	);
}

const timeRangeItems = [
	{ label: 'Last week', value: ETimeRange.week },
	{ label: 'Last month', value: ETimeRange.month },
	{ label: 'Last three months', value: ETimeRange.threeMonth },
	{ label: 'Last six months', value: ETimeRange.halfYear },
	{ label: 'Last year', value: ETimeRange.year },
	{ label: 'All time', value: ETimeRange.all },
];

const DropDown = styled.div`
	position: fixed;
	top: 105px;
	left: 10px;
	background: white;
	border-radius: 5px;
	z-index: ${zIndex.appBar};
	box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
	padding: 10px 0;
`;

const MenuContainer = styled.div`
	left: 10px;
	background: ${colors.green[500]};
	position: fixed;
	top: 60px;
	border-radius: 5px;
	color: white;
	z-index: ${zIndex.appBar};
`;
