import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';

type Props = {
  label: string;
  value: string | dayjs.Dayjs | undefined;
  onChange: (value: any) => void;
};

const CustomDateTimePicker = (props: Props) => {
  return (
    <DateTimePicker
      label={props.label}
      value={props.value}
      disablePast
      onAccept={props.onChange}
      slotProps={{
        textField: {
          required: true,
        },
      }}
      className="rounded-lg"
    />
  );
};

export default CustomDateTimePicker;
