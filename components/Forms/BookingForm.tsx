'use client';

import * as React from 'react';
import { RentalListing } from '@/types';
import DateRangePicker, {
  DateTimeRangeForm,
  initialDateTimeFormForm,
} from '../Dates/DateRangePicker';
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

export interface BookingFormContent extends DateTimeRangeForm {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

const BookingForm = ({ rental }: Props) => {
  const initialForm = {
    ...initialDateTimeFormForm,
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

  const handleDateTimeChange = (dateTimeRange: DateTimeRangeForm): void => {
    setForm((previousFormValue) => ({
      ...previousFormValue,
      ...dateTimeRange,
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
      isValidPhoneNumber(form.phoneNumber) &&
      form.isDateTimeRangeValid
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
          placeholder="John"
          inputProps={nameInputProps}
          onChange={handleInputChange}
          error={!!form.firstName && !isValidName(form.firstName)}
          helperText={`Must be between ${nameInputProps.minLength} and ${nameInputProps.maxLength} characters`}
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
          placeholder="Smith"
          inputProps={nameInputProps}
          onChange={handleInputChange}
          error={!!form.lastName && !isValidName(form.lastName)}
          helperText={`Must be between ${nameInputProps.minLength} and ${nameInputProps.maxLength} characters`}
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
          placeholder="captainJohnSmith@email.com"
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
          placeholder="(123)456-7890"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocalPhoneIcon />
              </InputAdornment>
            ),
          }}
        />
        <DateRangePicker onChange={handleDateTimeChange} />
      </div>
      <div className="p-0">
        <Button
          disabled={!isFormValid(form)}
          onClick={(event) => handleFormSubmit(event)}
          size="large"
          className="w-full lg:w-52 mx-auto lg:mx-0 text-white bg-primary hover:bg-accent hover:shadow-lg"
        >
          Request Booking
        </Button>
      </div>
    </Box>
  );
};

export default BookingForm;
