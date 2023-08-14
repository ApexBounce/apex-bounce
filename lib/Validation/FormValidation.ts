import dayjs from 'dayjs';

export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const phoneNumberRegex =
  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;

export const emailInputProps = {
  maxLength: 50,
  minLength: 12,
};

export const isValidEmail = (email: string): boolean => {
  return (
    !!email &&
    email.length >= emailInputProps.minLength &&
    email.length <= emailInputProps.maxLength &&
    !!email.match(emailRegex)
  );
};

export const nameInputProps = {
  maxLength: 20,
  minLength: 2,
};

export const additionalInfoInputProps = {
  maxLength: 500,
  minLength: 0,
};

export const isValidName = (name: string): boolean => {
  return (
    !!name &&
    name.length >= nameInputProps.minLength &&
    name.length <= nameInputProps.maxLength
  );
};

export const phoneNumberInputProps = {
  maxLength: 13,
};

export const isValidPhoneNumber = (phoneNumber: string | number): boolean => {
  const pn = phoneNumber?.toString();
  return (
    !!pn &&
    pn.length <= phoneNumberInputProps.maxLength &&
    !!pn.match(phoneNumberRegex)
  );
};

export const isValidAdditionalInfo = (info: string): boolean => {
  return info.length <= additionalInfoInputProps.maxLength;
};

export const isDateTimeRangeValid = (
  startDateTime: dayjs.Dayjs | string | undefined,
  endDateTime: dayjs.Dayjs | string | undefined
): boolean => {
  const startDate = dayjs(startDateTime);
  const endDate = dayjs(endDateTime);
  return (
    startDate.isValid() && endDate.isValid() && startDate.isBefore(endDate)
  );
};
