import styled from '@emotion/styled';
import {
	Box,
	Divider,
	Drawer,
	IconButton,
	List,
	Typography,
	useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import zIndex from '@mui/material/styles/zIndex';
import TwitterIcon from '../../assets/images/twitter.png';
import menuItems from './menuItems';
import MenuItem from './MenuItem';

export default function LeftMenu() {
	const [open, setOpen] = useState(false);
	const theme = useTheme();

	return (
		<>
			<LeftMenuContainer background={theme.palette.primary.main}>
				<IconButton color='inherit' onClick={() => setOpen(true)}>
					<MenuIcon />
				</IconButton>
			</LeftMenuContainer>
			<Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
				<Box sx={{ width: 250 }} role='presentation'>
					<IconContainer>
						<img src={TwitterIcon} width='130px' alt='twitter' />
						<Typography sx={{ fontWeight: 'bold', mt: 2 }} variant='h6'>
							Twitter Analytics Dashboard
						</Typography>
					</IconContainer>
					<Divider />
					<List>
						{menuItems.map(item => (
							<MenuItem
								key={item.label}
								label={item.label}
								icon={item.icon}
								link={item.link}
							/>
						))}
					</List>
				</Box>
			</Drawer>
		</>
	);
}

const LeftMenuContainer = styled.div<{ background: string }>`
	left: 10px;
	background: ${props => props.background};
	position: fixed;
	top: 10px;
	border-radius: 5px;
	color: white;
	z-index: ${zIndex.appBar};
`;

const IconContainer = styled.div`
	margin: 30px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-weight: bold !important;
`;
