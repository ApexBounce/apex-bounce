'use client';

import * as React from 'react';
import { BookingFormContent, RentalListing } from '@/types';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import {
  additionalInfoInputProps,
  emailInputProps,
  isDateTimeRangeValid,
  isValidAdditionalInfo,
  isValidEmail,
  isValidName,
  isValidPhoneNumber,
  nameInputProps,
  phoneNumberInputProps,
} from '@/lib/Validation/FormValidation';
import { DateTimePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { READABLE_DATES_FORMAT } from '@/lib/Dates/Formats';

type Props = {
  rental: RentalListing;
};

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  startDateTime: '',
  endDateTime: '',
  additionalInfo: '',
};

const BookingForm = ({ rental }: Props) => {
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

  const onStartDateChange = (value: any): void => {
    const asDate = dayjs(value);
    if (asDate.isValid()) {
      const asDateString = asDate.format(READABLE_DATES_FORMAT);
      setForm((previousFormValue) => ({
        ...previousFormValue,
        startDateTime: asDateString,
      }));
    }
  };

  const onEndDateChange = (value: any): void => {
    const asDate = dayjs(value);
    if (asDate.isValid()) {
      const asDateString = asDate.format(READABLE_DATES_FORMAT);
      setForm((previousFormValue) => ({
        ...previousFormValue,
        endDateTime: asDateString,
      }));
    }
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
      isDateTimeRangeValid(form.startDateTime, form.endDateTime)
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
      <div className="grid grid-flow-row gap-8">
        <div className="grid grid-flow-row lg:grid-cols-2 gap-8">
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
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className="grid gap-2 grid-flow-row">
            <div className="grid gap-8 grid-flow-row lg:grid-flow-col">
              <DateTimePicker
                label="Start Date/Time"
                format={READABLE_DATES_FORMAT}
                value={form.startDateTime}
                onAccept={onStartDateChange}
                disablePast
                slotProps={{
                  textField: {
                    required: true,
                  },
                }}
              />
              <DateTimePicker
                label="End Date/Time"
                format={READABLE_DATES_FORMAT}
                value={form.endDateTime}
                onAccept={onEndDateChange}
                disablePast
                slotProps={{
                  textField: {
                    required: true,
                  },
                }}
              />
            </div>
            {!!form.startDateTime &&
              !!form.endDateTime &&
              !isDateTimeRangeValid(form.startDateTime, form.endDateTime) && (
                <Typography component="p" className="text-error text-sm">
                  End Date must be after the Start Date
                </Typography>
              )}
          </div>
        </LocalizationProvider>
        <TextField
          id="additionalInfo"
          name="additionalInfo"
          value={form.additionalInfo}
          label="Additional Information"
          type="text"
          disabled={disabled}
          color="primary"
          inputProps={additionalInfoInputProps}
          onChange={handleInputChange}
          multiline
          rows={4}
          placeholder="Any additional comments or concerns..."
          helperText={`${form.additionalInfo.length} / ${additionalInfoInputProps.maxLength}`}
          error={!isValidAdditionalInfo(form.additionalInfo)}
        />
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
