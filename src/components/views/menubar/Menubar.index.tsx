import { useState } from 'react';
import { Button, Drawer, List, Box } from '@mui/material';
import MenuItem from './MenuItem';
import menuItems from './menuItems';

function MenubarIndex() {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Button onClick={() => setOpen(true)}>Click</Button>
			<Drawer anchor='left' open={open} onClose={() => setOpen(false)}>
				<Box sx={{ width: 250 }} role='presentation'>
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

export default MenubarIndex;
