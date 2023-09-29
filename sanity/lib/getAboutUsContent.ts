import { AboutUsContent } from '@/app/_types';
import { sanityClient } from './client';

type Props =
  | {
      summaryOnly?: boolean;
    }
  | undefined;

export default async function getAboutUsContent(
  props?: Props
): Promise<AboutUsContent[]> {
  const query = `*[_type == "aboutUsSection" && isSummary == $summaryOnly] {
    _id,
    sectionText,
    sectionTitle,
    sectionImage,
    }`;
  const params = { summaryOnly: props?.summaryOnly ?? false };
  const aboutUsContent = await sanityClient.fetch(query, params);
  return aboutUsContent;
}
