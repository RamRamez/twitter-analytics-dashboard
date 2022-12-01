import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, TextField } from '@mui/material';

interface IProps {
	fromDate: Date | null;
	setFromDate: (date: Date | null) => void;
}

export default function SelectFromDate(props: IProps) {
	const { fromDate, setFromDate } = props;
	return (
		<Box sx={{ width: 320, mx: 'auto', mt: 5 }}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DesktopDatePicker
					label='From Date'
					inputFormat='MM/DD/YYYY'
					value={fromDate}
					onChange={setFromDate}
					renderInput={params => <TextField fullWidth {...params} />}
				/>
			</LocalizationProvider>
		</Box>
	);
}
