import toast, { ToastPosition } from 'react-hot-toast';
import styled from '@emotion/styled';
import { colors, Typography } from '@mui/material';
import { Cancel, CheckCircle, Info } from '@mui/icons-material';

export enum EToastType {
	INFO = 'INFO',
	SUCCESS = 'SUCCESS',
	DANGER = 'DANGER',
}

export interface IToast {
	type?: EToastType;
	title?: string;
	position?: ToastPosition;
	duration?: number;
}

const toastIcon = (type: EToastType) => {
	switch (type) {
		case EToastType.INFO:
			return <Info />;
		case EToastType.SUCCESS:
			return <CheckCircle />;
		case EToastType.DANGER:
			return <Cancel />;
		default:
			return <CheckCircle />;
	}
};

export const gToast = (message: string, options: IToast) => {
	const {
		type = EToastType.SUCCESS,
		title,
		position = 'top-center',
		duration = 4000,
	} = options;
	toast.custom(
		<ToastContainer {...options}>
			<LeftIconContainer>{toastIcon(type)}</LeftIconContainer>
			<div>
				{title && <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>}
				<div>{message}</div>
			</div>
		</ToastContainer>,
		{
			duration,
			position,
		},
	);
};

const ToastContainer = styled.div<IToast>`
	display: flex;
	padding: 16px;
	gap: 16px;
	align-items: center;
	border-radius: 8px;
	color: ${props => {
		switch (props.type) {
			case EToastType.INFO:
				return colors.blue[700];
			case EToastType.SUCCESS:
				return colors.green[700];
			case EToastType.DANGER:
				return colors.red[700];
			default:
				return colors.green[700];
		}
	}};
	background-color: ${props => {
		switch (props.type) {
			case EToastType.INFO:
				return colors.blue[100];
			case EToastType.SUCCESS:
				return colors.green[100];
			case EToastType.DANGER:
				return colors.red[100];
			default:
				return colors.green[100];
		}
	}};
	border: 1px solid
		${props => {
			switch (props.type) {
				case EToastType.INFO:
					return colors.blue[700];
				case EToastType.SUCCESS:
					return colors.green[700];
				case EToastType.DANGER:
					return colors.red[700];
				default:
					return colors.green[700];
			}
		}};
`;

const LeftIconContainer = styled.div`
	display: flex;
`;
