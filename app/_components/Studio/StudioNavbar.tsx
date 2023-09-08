import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';

function StudioNavbar(props: any) {
  return (
    <div>
      <div className="w-screen h-16 grid grid-flow-col items-center px-4 justify-between gradient-bg text-base-100">
        <Link href={'/'}>
          <Typography
            component="p"
            className="relative grid grid-flow-col gap-2 items-center"
          >
            <ArrowBackIcon />
            Go to Website
          </Typography>
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
}

export default StudioNavbar;
