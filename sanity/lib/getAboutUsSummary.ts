import { AboutUsContent } from '@/app/_types';
import { sanityClient } from './client';

export default async function getAboutUsSummary(): Promise<AboutUsContent> {
  const query = `*[_type == "aboutUsSummary"][0] {
    _id,
    sectionText,
    sectionTitle,
    sectionImage,
    }`;
  const aboutUsSummary = await sanityClient.fetch(query);
  return aboutUsSummary;
}
