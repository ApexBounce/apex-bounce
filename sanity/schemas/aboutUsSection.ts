export default {
  name: 'aboutUsSection',
  title: 'About Us',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'isSummary',
      title: 'Is Summary',
      type: 'boolean',
      description:
        'Check this if the section is a summary. This content will appear on the Home page.',
    },
    {
      name: 'sectionText',
      title: 'Section Text',
      type: 'text',
    },
    {
      name: 'sectionImage',
      title: 'Section Image',
      type: 'image',
    },
  ],
};
