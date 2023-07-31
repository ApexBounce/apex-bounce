import { OrganizationData } from '@/types';
import { sanityClient } from './client';

export default async function getOrganizationInfo(): Promise<OrganizationData> {
  const query = `*[_type == "organization"]`;
  const orgInfo = await sanityClient.fetch(query);
  return orgInfo[0];
}
