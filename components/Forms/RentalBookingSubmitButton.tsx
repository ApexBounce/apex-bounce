import React from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const RentalBookingSubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="large"
      className="w-full lg:w-52 mx-auto lg:mx-0 text-white bg-primary hover:bg-accent hover:shadow-lg"
      disabled={pending}
    >
      {pending ? (
        <CircularProgress size="26.25px" style={{ color: 'gold' }} />
      ) : (
        <span>Request Booking</span>
      )}
    </Button>
  );
};

export default RentalBookingSubmitButton;
