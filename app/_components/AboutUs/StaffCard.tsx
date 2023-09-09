import Card from '@mui/material/Card';
import sanityUrlFor from '@/sanity/lib/sanityUrlFor';
import Overlay from '../Overlay/Overlay';
import Image from 'next/image';
import { StaffMember } from '@/app/_types';
import Typography from '@mui/material/Typography';

type Props = {
  member: StaffMember;
};

const StaffCard = ({ member }: Props) => {
  return (
    <div className="grid sm:grid-flow-col bg-white rounded-md shadow-xl">
      <Card className="relative rounded-b-none sm:rounded-l-md sm:rounded-r-none shadow-none">
        <div className="relative h-full min-h-[345px] w-full min-w-[345px]">
          <Image
            src={`${sanityUrlFor(member.image).url()}`}
            alt={member.name}
            fill
            priority
            className="z-0 object-cover object-center"
          />
          <div className="absolute bottom-0 left-0 right-0 h-[88px] grid items-center">
            <Overlay>
              <div className="p-4">
                <Typography component="div" className="text-2xl text-white">
                  {member.name}
                </Typography>
                <Typography component="div" className="text-md text-base-100">
                  {member.positionTitle}
                </Typography>
              </div>
            </Overlay>
          </div>
        </div>
      </Card>
      <div className="p-4">
        <Typography className="text-gray prose lg:prose-lg whitespace-pre-line">
          {member.description}
        </Typography>
      </div>
    </div>
  );
};

export default StaffCard;
