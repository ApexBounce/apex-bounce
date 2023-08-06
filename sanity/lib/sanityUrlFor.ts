import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { sanityClient } from './client';

const builder = imageUrlBuilder(sanityClient);

export default function sanityUrlFor(source: SanityImageSource | string) {
  return builder.image(source);
}
