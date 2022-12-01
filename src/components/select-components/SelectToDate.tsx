import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, TextField } from '@mui/material';

interface IProps {
	toDate: Date | null;
	setToDate: (date: Date | null) => void;
}

export default function SelectToDate(props: IProps) {
	const { toDate, setToDate } = props;
	return (
		<Box sx={{ width: 320, mx: 'auto', mt: 5 }}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DesktopDatePicker
					label='To Date'
					inputFormat='MM/DD/YYYY'
					value={toDate}
					onChange={setToDate}
					renderInput={params => <TextField fullWidth {...params} />}
				/>
			</LocalizationProvider>
		</Box>
	);
}
