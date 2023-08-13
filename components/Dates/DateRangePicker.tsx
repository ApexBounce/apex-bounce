'use client';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CustomDateTimePicker from './DateTimePicker';
import React from 'react';
import dayjs from 'dayjs';
import { Typography } from '@mui/material';

type Props = {
  onChange: Function;
};

export interface DateTimeRangeForm {
  startDateTime: string | undefined;
  endDateTime: string | undefined;
  isDateTimeRangeValid: boolean;
}

export const initialDateTimeFormForm: DateTimeRangeForm = {
  startDateTime: '',
  endDateTime: '',
  isDateTimeRangeValid: false,
};

const DateRangePicker = (props: Props) => {
  const [form, setForm] = React.useState<DateTimeRangeForm>(
    initialDateTimeFormForm
  );

  React.useEffect(() => {
    emitDateTimeRangeUpdate(form);
  }, [form]);

  const onStartDateChange = (value: any): void => {
    const asDate = dayjs(value);
    if (asDate.isValid()) {
      const asDateString = asDate.toISOString();
      setForm((previousFormValue) => ({
        ...previousFormValue,
        startDateTime: asDateString,
      }));
    } else {
      setForm((previousFormValue) => ({
        ...previousFormValue,
        isDateTimeRangeValid: false,
      }));
    }
  };

  const onEndDateChange = (value: any): void => {
    const asDate = dayjs(value);
    if (asDate.isValid()) {
      const asDateString = asDate.toISOString();
      setForm((previousFormValue) => ({
        ...previousFormValue,
        endDateTime: asDateString,
      }));
    } else {
      setForm((previousFormValue) => ({
        ...previousFormValue,
        isDateTimeRangeValid: false,
      }));
    }
  };

  const isDateTimeRangeValid = (givenForm: DateTimeRangeForm): boolean => {
    const startDate = dayjs(givenForm.startDateTime);
    const endDate = dayjs(givenForm.endDateTime);
    return (
      startDate.isValid() && endDate.isValid() && startDate.isBefore(endDate)
    );
  };

  const emitDateTimeRangeUpdate = (givenForm: DateTimeRangeForm): void => {
    const currentFormValue: DateTimeRangeForm = {
      ...givenForm,
      isDateTimeRangeValid: isDateTimeRangeValid(givenForm),
    };

    props.onChange(currentFormValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="grid gap-2 grid-flow-row">
        <div className="grid gap-4 grid-flow-row lg:grid-flow-col">
          <CustomDateTimePicker
            label="Start date/time"
            onChange={onStartDateChange}
          />
          <CustomDateTimePicker
            label="End Date/Time"
            onChange={onEndDateChange}
          />
        </div>
        {!!form.startDateTime &&
          !!form.endDateTime &&
          !isDateTimeRangeValid(form) && (
            <Typography component="p" className="text-error text-sm">
              End Date must be after the Start Date
            </Typography>
          )}
      </div>
    </LocalizationProvider>
  );
};

export default DateRangePicker;
