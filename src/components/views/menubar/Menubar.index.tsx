import { useState } from 'react';
import { Drawer, List, Box, Divider, Typography, IconButton, useTheme } from '@mui/material';
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import zIndex from '@mui/material/styles/zIndex';
import MenuItem from './MenuItem';
import menuItems from './menuItems';
import TwitterIcon from '../../../assets/images/twitter.png';

function MenubarIndex() {
	const [open, setOpen] = useState(false);
	const theme = useTheme();

	return (
		<>
			<MenuContainer background={theme.palette.primary.main}>
				<IconButton color='inherit' onClick={() => setOpen(true)}>
					<MenuIcon />
				</IconButton>
			</MenuContainer>
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

const MenuContainer = styled.div<{ background: string }>`
	position: fixed;
	top: 10px;
	left: 10px;
	border-radius: 5px;
	color: white;
	background: ${props => props.background};
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

export default MenubarIndex;
