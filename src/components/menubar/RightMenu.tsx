import { Divider, IconButton, ListItemIcon, MenuItem, useTheme } from '@mui/material';
import { Logout, Settings } from '@mui/icons-material';
import styled from '@emotion/styled';
import zIndex from '@mui/material/styles/zIndex';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { EDashboardUserRole } from '../../types/userRole';
import routes from '../../application/routes';
import { apiSignOut } from '../../api/apiRequests';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

interface IProps {
	user: { name: string; role: string };
	setIsSignedIn: (isSignedIn: boolean) => void;
}

export default function RightMenu(props: IProps) {
	const { user, setIsSignedIn } = props;
	const { name, role } = user;

	const [isOpen, setIsOpen] = useState(false);
	const theme = useTheme();

	const menuRef = useRef<HTMLDivElement>(null);

	const handleClose = () => setIsOpen(false);
	const handleClick = () => setIsOpen(!isOpen);

	useOnClickOutside(menuRef, handleClose);

	const handleLogout = () => {
		apiSignOut().then(() => setIsSignedIn(false));
	};

	return (
		<div ref={menuRef}>
			<RightMenuContainer background={theme.palette.primary.main}>
				<IconButton color='inherit' onClick={handleClick}>
					<Settings />
				</IconButton>
			</RightMenuContainer>
			{isOpen && (
				<DropDown onClick={handleClose}>
					<MenuItem>Welcome, {name}</MenuItem>
					<Divider />
					{role === EDashboardUserRole.admin && (
						<Link to={routes.admin}>
							<MenuItem>
								<ListItemIcon>
									<Settings fontSize='small' />
								</ListItemIcon>
								Admin Dashboard
							</MenuItem>
						</Link>
					)}
					<MenuItem onClick={handleLogout}>
						<ListItemIcon>
							<Logout fontSize='small' />
						</ListItemIcon>
						Logout
					</MenuItem>
				</DropDown>
			)}
		</div>
	);
}

const DropDown = styled.div`
	position: fixed;
	top: 55px;
	right: 10px;
	background: white;
	border-radius: 5px;
	z-index: ${zIndex.appBar};
	box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
	padding: 10px 0;
`;

const RightMenuContainer = styled.div<{ background: string }>`
	position: fixed;
	top: 10px;
	border-radius: 5px;
	color: white;
	z-index: ${zIndex.appBar};
	right: 10px;
	background: ${props => props.background};
`;
