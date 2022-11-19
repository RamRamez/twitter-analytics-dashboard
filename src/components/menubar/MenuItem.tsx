import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface IMenuItemProps {
	label: string;
	icon: ReactNode;
	link: string;
}

function MenuItem(props: IMenuItemProps) {
	const { label, icon, link } = props;
	return (
		<Link to={link}>
			<ListItem disablePadding>
				<ListItemButton>
					<ListItemIcon>{icon}</ListItemIcon>
					<ListItemText primary={label} />
				</ListItemButton>
			</ListItem>
		</Link>
	);
}

export default MenuItem;
