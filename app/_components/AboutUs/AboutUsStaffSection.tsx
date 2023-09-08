import { StaffMember } from '@/app/_types';
import Typography from '@mui/material/Typography';
import StaffCard from './StaffCard';

type Props = {
  staff: StaffMember[];
};

const AboutUsStaffSection = ({ staff }: Props) => {
  return (
    <section className="bg-light-gray px-4 py-12 lg:px-8">
      <div className="grid grid-flow-row gap-12 max-w-4xl mx-auto">
        <Typography
          component="h2"
          className="prose lg:prose-lg font-bold whitespace-pre-wrap text-4xl lg:text-5xl underline underline-offset-4 text-gray decoration-primary"
        >
          Our Staff
        </Typography>
        <div className="grid gap-12">
          {staff.map((member) => (
            <StaffCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsStaffSection;
