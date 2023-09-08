import { StaffMember } from '@/app/_types';
import { sanityClient } from './client';

export default async function getStaffMembers(): Promise<StaffMember[]> {
  const query = `*[_type == "staff"] {
    _id,
    name,
    positionTitle,
    image,
    description
    }`;
  const staffMembers = await sanityClient.fetch(query);
  return staffMembers;
}
