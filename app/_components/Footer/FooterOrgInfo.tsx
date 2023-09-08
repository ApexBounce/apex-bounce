import { OrganizationData } from '@/app/_types';
import { Typography } from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

type Props = {
  organizationData: OrganizationData;
};

const FooterOrgInfo = (props: Props) => {
  return (
    <div className="grid grid-flow-row gap-4 text-sm h-fit">
      <Typography
        variant="h4"
        component="h4"
        className="text-2xl lg:text-3xl uppercase mb-4 text-base-100"
      >
        {props.organizationData.name} Info
      </Typography>
      <div className="grid grid-flow-col gap-4 items-center w-fit">
        <ScheduleIcon />
        <div className="grid grid-cols-2 gap-x-2 gap-y-0 w-fit">
          <Typography component="p">Monday:</Typography>
          <Typography component="p">
            {props.organizationData.operatingSchedule.mondayHours}
          </Typography>
          <Typography component="p">Tuesday:</Typography>
          <Typography component="p">
            {props.organizationData.operatingSchedule.tuesdayHours}
          </Typography>
          <Typography component="p">Wednesday:</Typography>
          <Typography component="p">
            {props.organizationData.operatingSchedule.wednesdayHours}
          </Typography>
          <Typography component="p">Thursday:</Typography>
          <Typography component="p">
            {props.organizationData.operatingSchedule.thursdayHours}
          </Typography>
          <Typography component="p">Friday:</Typography>
          <Typography component="p">
            {props.organizationData.operatingSchedule.fridayHours}
          </Typography>
          <Typography component="p">Saturday:</Typography>
          <Typography component="p">
            {props.organizationData.operatingSchedule.saturdayHours}
          </Typography>
          <Typography component="p">Sunday:</Typography>
          <Typography component="p">
            {props.organizationData.operatingSchedule.sundayHours}
          </Typography>
        </div>
      </div>
      <div className="grid grid-flow-col gap-4 items-center w-fit">
        <CallIcon />
        <a href={`tel:${props.organizationData.phoneNumber}`}>
          {props.organizationData.phoneNumber}
        </a>
      </div>
      <div className="grid grid-flow-col gap-4 items-center w-fit">
        <EmailIcon />
        <a href={`mailto:${props.organizationData.email}`}>
          {props.organizationData.email}
        </a>
      </div>
    </div>
  );
};

export default FooterOrgInfo;
