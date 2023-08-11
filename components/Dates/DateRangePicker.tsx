'use client';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CustomDateTimePicker from './DateTimePicker';

type Props = {};

const DateRangePicker = (props: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="grid gap-4 grid-flow-row lg:grid-flow-col">
        <CustomDateTimePicker label="Start date/time" />
        <CustomDateTimePicker label="End Date/Time" />
      </div>
    </LocalizationProvider>
  );
};

export default DateRangePicker;
