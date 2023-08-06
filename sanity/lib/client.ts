import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId, useCdn } from '../env.local';

export const sanityClient = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});
