import { sanityClient } from './client';

export default async function getOrganizationInfo() {
  const query = `*[_type == "organization"]`;
  const orgInfo = await sanityClient.fetch(query);
  return orgInfo[0];
}
