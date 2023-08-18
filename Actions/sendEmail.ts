'use server';

import React from 'react';
import { Resend } from 'resend';
import {
  additionalInfoInputProps,
  emailInputProps,
  getErrorMessage,
  isDateTimeRangeValid,
  isValidEmail,
  isValidPhoneNumber,
  nameInputProps,
  validateString,
} from '@/lib/Validation/FormValidation';
import RentalRequestForm from '@/email/RentalRequestForm';
import { OrganizationData, RentalListing } from '@/types';
import getRentalDetails from '@/sanity/lib/getRentalDetails';

const resend = new Resend(process.env.RESEND_API_KEY);
const to = process.env.EMAIL_TO;
const from = process.env.EMAIL_FROM;

export const sendEmail = async (
  formData: FormData,
  rentalId: string,
  orgInfo: OrganizationData
) => {
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const senderEmail = formData.get('senderEmail');
  const phoneNumber = formData.get('phoneNumber');
  const startDateTime = formData.get('startDateTime');
  const endDateTime = formData.get('endDateTime');
  const additionalInfo = formData.get('additionalInfo');

  // simple server-side validation
  if (!to || !from) {
    console.error('Email TO and/or FROM environment variables were not found.');
    return {
      error: 'Something went wrong',
    };
  }
  if (
    !validateString(firstName, nameInputProps.maxLength) ||
    !validateString(lastName, nameInputProps.maxLength)
  ) {
    return {
      error: 'Invalid name',
    };
  }
  if (
    !validateString(senderEmail, emailInputProps.maxLength) ||
    !isValidEmail(senderEmail)
  ) {
    return {
      error: 'Invalid sender email',
    };
  }
  if (
    additionalInfo &&
    !validateString(additionalInfo, additionalInfoInputProps.maxLength)
  ) {
    return {
      error: 'Invalid additional info',
    };
  }
  if (!isValidPhoneNumber(phoneNumber)) {
    return {
      error: 'Invalid phone number',
    };
  }
  if (!isDateTimeRangeValid(startDateTime as string, endDateTime as string)) {
    return {
      error: 'Invalid dates',
    };
  }

  let rentalDetails: RentalListing | undefined;
  if (rentalId && typeof rentalId === 'string') {
    rentalDetails = await getRentalDetails(rentalId);

    if (!rentalDetails?.available) {
      return {
        error: 'Item unavailable',
      };
    }
  } else {
    return {
      error: 'Something went wrong',
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: `${orgInfo.name} Rental Request <${from}>`,
      to: to as string,
      subject: 'Rental Request',
      reply_to: senderEmail,
      react: React.createElement(RentalRequestForm, {
        firstName,
        lastName,
        senderEmail,
        phoneNumber: phoneNumber as string,
        additionalInfo,
        startDateTime: startDateTime as string,
        endDateTime: endDateTime as string,
        rentalDetails,
        orgInfo,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
