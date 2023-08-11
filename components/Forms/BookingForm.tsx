import { RentalListing } from '@/types';
import Card from '@mui/material/Card';
import DateRangePicker from '../Dates/DateRangePicker';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import { Typography } from '@mui/material';

type Props = {
  rental: RentalListing;
};

const BookingForm = ({ rental }: Props) => {
  return (
    <Card variant="outlined" className="grid grid-flow-row gap-8 p-4 lg:p-8">
      <Typography component="h2" className="prose xl:prose-xl">
        Booking Request
      </Typography>
      <div className="grid grid-flow-row lg:grid-flow-col gap-4">
        <TextField
          label="Email"
          id="email-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <DateRangePicker />
      </div>
    </Card>
  );
};

export default BookingForm;
