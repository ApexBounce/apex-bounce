'use client';

import * as React from 'react';
import { ContactUsFormContent, OrganizationData } from '@/app/_types';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonIcon from '@mui/icons-material/Person';
import {
  additionalInfoInputProps,
  emailInputProps,
  isValidAdditionalInfo,
  isValidEmail,
  isValidName,
  isValidPhoneNumber,
  nameInputProps,
  phoneNumberInputProps,
} from '@/lib/Validation/FormValidation';
import Snackbar from '@mui/material/Snackbar';
import Alert from '../Alerts/Alert';
import { sendContactUsEmail } from '@/Actions/sendContactUsEmail';
import CommonSubmitButton from './CommonSubmitButton';

type Props = {
  orgInfo: OrganizationData;
};

const initialForm: ContactUsFormContent = {
  firstName: '',
  lastName: '',
  senderEmail: '',
  phoneNumber: '',
  additionalInfo: '',
};

const initialCommonToastState = {
  open: false,
  success: true,
  message: '',
};

const ContactUsForm = ({ orgInfo }: Props) => {
  const [form, setForm] = React.useState<ContactUsFormContent>(initialForm);
  const [toastState, setToastState] = React.useState<
    typeof initialCommonToastState
  >(initialCommonToastState);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setForm((previousFormValue) => ({
      ...previousFormValue,
      [name]: value,
    }));
  };

  return (
    <form
      className="grid grid-flow-row gap-8 bg-white text-secondary max-w-4xl"
      action={async (formData) => {
        const { data, error } = await sendContactUsEmail(formData, orgInfo);

        if (error) {
          setToastState({
            open: true,
            success: false,
            message: error,
          });
          return;
        }

        setForm(initialForm);

        setToastState({
          open: true,
          success: true,
          message: 'Contact request sent successfully!',
        });
      }}
    >
      <div className="grid grid-flow-row gap-8">
        <div className="grid grid-flow-row lg:grid-cols-2 gap-8">
          <TextField
            id="firstName"
            name="firstName"
            value={form.firstName}
            type="text"
            label="First Name"
            color="primary"
            required
            placeholder="What's your first name?"
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
            type="text"
            label="Last Name"
            color="primary"
            required
            placeholder="What's your last name?"
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
            id="senderEmail"
            name="senderEmail"
            value={form.senderEmail}
            type="email"
            label="Email"
            color="primary"
            required
            inputProps={emailInputProps}
            error={!!form.senderEmail && !isValidEmail(form.senderEmail)}
            onChange={handleInputChange}
            placeholder="What's your email?"
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
            type="tel"
            label="Phone Number"
            color="primary"
            required
            inputProps={phoneNumberInputProps}
            onChange={handleInputChange}
            error={!!form.phoneNumber && !isValidPhoneNumber(form.phoneNumber)}
            placeholder="What's your phone number?"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocalPhoneIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <TextField
          id="additionalInfo"
          name="additionalInfo"
          value={form.additionalInfo}
          label="Additional Information"
          type="text"
          color="primary"
          inputProps={additionalInfoInputProps}
          InputLabelProps={{ shrink: true }}
          onChange={handleInputChange}
          multiline
          rows={4}
          placeholder="Any additional comments or concerns..."
          helperText={`${form.additionalInfo?.length} / ${additionalInfoInputProps.maxLength}`}
          error={
            !!form.additionalInfo && !isValidAdditionalInfo(form.additionalInfo)
          }
        />
      </div>
      <div className="p-0">
        <CommonSubmitButton />
      </div>
      <Snackbar
        open={toastState.open}
        autoHideDuration={6000}
        onClose={() =>
          setToastState({
            ...initialCommonToastState,
            // prevents color change before close
            success: toastState.success,
          })
        }
      >
        <Alert
          severity={toastState.success ? 'success' : 'error'}
          sx={{ width: '100%' }}
        >
          {toastState.message}
        </Alert>
      </Snackbar>
    </form>
  );
};

export default ContactUsForm;
