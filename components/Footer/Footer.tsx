import { OrganizationData } from '@/types';
import FooterOrgInfo from './FooterOrgInfo';
import FooterNav from './FooterNav';

type Props = {
  organizationData: OrganizationData;
};

const Footer = (props: Props) => {
  return (
    <footer className="gradient-bg grid grid-flow-row lg:grid-flow-col gap-8 justify-evenly px-4 py-8 lg:px-6 lg:py-10 text-neutral">
      <FooterOrgInfo organizationData={props.organizationData} />
      <FooterNav />
    </footer>
  );
};

export default Footer;
