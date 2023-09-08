import { AboutUsContent } from '@/app/_types';
import { sanityClient } from './client';

export default async function getAboutUsContent(): Promise<AboutUsContent[]> {
  const query = `*[_type == "aboutUsSection"] {
    _id,
    sectionText,
    sectionTitle,
    sectionImage,
    }`;
  const aboutUsContent = await sanityClient.fetch(query);
  return aboutUsContent;
}
