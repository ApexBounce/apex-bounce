import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

type Props = {
  label: string;
};

const CustomDateTimePicker = (props: Props) => {
  return (
    <DateTimePicker label={props.label} disablePast className="rounded-lg" />
  );
};

export default CustomDateTimePicker;
