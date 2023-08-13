import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

type Props = {
  label: string;
  onChange: (value: any) => void;
};

const CustomDateTimePicker = (props: Props) => {
  return (
    <DateTimePicker
      label={props.label}
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
