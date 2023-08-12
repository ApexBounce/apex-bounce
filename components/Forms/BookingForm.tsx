'use client';

import * as React from 'react';
import { RentalListing } from '@/types';
import DateRangePicker from '../Dates/DateRangePicker';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import {
  emailInputProps,
  isValidEmail,
  isValidName,
  isValidPhoneNumber,
  nameInputProps,
  phoneNumberInputProps,
} from '@/lib/Validation/FormValidation';

type Props = {
  rental: RentalListing;
};

export interface BookingFormContent {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

const BookingForm = ({ rental }: Props) => {
  const initialForm = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  };

  const [disabled, setDisabled] = React.useState<boolean>(false);
  const [form, setForm] = React.useState<BookingFormContent>(initialForm);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setForm((previousFormValue) => ({
      ...previousFormValue,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event: any): void => {
    event.preventDefault();
    onSubmit(form);
    setForm(() => initialForm);
  };

  const isFormValid = (form: BookingFormContent): boolean => {
    return (
      isValidName(form.firstName) &&
      isValidName(form.lastName) &&
      isValidEmail(form.email) &&
      isValidPhoneNumber(form.phoneNumber)
    );
  };

  const onSubmit = (form: BookingFormContent): void => {
    console.log({ form });
  };

  return (
    <Box
      component="form"
      className="grid grid-flow-row gap-8 bg-white text-secondary rounded-md px-4 py-8 lg:p-8 max-w-4xl"
    >
      <Typography component="h2" className="prose-xl xl:prose-2xl">
        Booking Request for
        <br />
        <span className="font-bold">{rental.title}</span>
      </Typography>
      <Typography component="p" className="prose-sm xl:prose-lg">
        Please fill out the form below to send a booking request and a staff
        member will contact you shortly.
      </Typography>
      <div className="grid grid-flow-row lg:grid-cols-2 gap-4">
        <TextField
          id="firstName"
          name="firstName"
          value={form.firstName}
          disabled={disabled}
          type="text"
          label="First Name"
          color="primary"
          required
          inputProps={nameInputProps}
          onChange={handleInputChange}
          error={!!form.firstName && !isValidName(form.firstName)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="lastName"
          name="lastName"
          value={form.lastName}
          disabled={disabled}
          type="text"
          label="Last Name"
          color="primary"
          required
          inputProps={nameInputProps}
          onChange={handleInputChange}
          error={!!form.lastName && !isValidName(form.lastName)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="email"
          name="email"
          value={form.email}
          disabled={disabled}
          type="email"
          label="Email"
          color="primary"
          required
          inputProps={emailInputProps}
          error={!!form.email && !isValidEmail(form.email)}
          onChange={handleInputChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="phoneNumber"
          name="phoneNumber"
          value={form.phoneNumber}
          disabled={disabled}
          type="tel"
          label="Phone Number"
          color="primary"
          required
          inputProps={phoneNumberInputProps}
          onChange={handleInputChange}
          error={!!form.phoneNumber && !isValidPhoneNumber(form.phoneNumber)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocalPhoneIcon />
              </InputAdornment>
            ),
          }}
        />
        <DateRangePicker />
      </div>
      <div className="p-0">
        <Button
          disabled={disabled || !isFormValid(form)}
          onClick={(event) => handleFormSubmit(event)}
          size="large"
          className="max-w-full w-72 mx-auto lg:mx-0 text-white bg-primary hover:bg-accent hover:shadow-lg"
        >
          Request Booking
        </Button>
      </div>
    </Box>
  );
};

export default BookingForm;
