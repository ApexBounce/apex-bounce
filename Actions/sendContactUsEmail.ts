'use server';

import React from 'react';
import { Resend } from 'resend';
import {
  additionalInfoInputProps,
  emailInputProps,
  getErrorMessage,
  isValidEmail,
  isValidPhoneNumber,
  nameInputProps,
  validateString,
} from '@/lib/Validation/FormValidation';
import { OrganizationData } from '@/app/_types';
import ContactUsForm from '@/components/email/ContactUsForm';

const resend = new Resend(process.env.RESEND_API_KEY);
const to = process.env.EMAIL_TO;
const from = process.env.EMAIL_FROM;

export const sendContactUsEmail = async (
  formData: FormData,
  orgInfo: OrganizationData
) => {
  const firstName = formData.get('firstName');
  const lastName = formData.get('lastName');
  const senderEmail = formData.get('senderEmail');
  const phoneNumber = formData.get('phoneNumber');
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

  let data;
  try {
    data = await resend.emails.send({
      from: `${orgInfo.name} Contact Request <${from}>`,
      to: to as string,
      subject: 'Contact Request',
      reply_to: senderEmail,
      react: React.createElement(ContactUsForm, {
        firstName,
        lastName,
        senderEmail,
        phoneNumber: phoneNumber as string,
        additionalInfo,
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
