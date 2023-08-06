export default {
  name: 'rental',
  title: 'Rental Listing',
  type: 'document',
  fields: [
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [{ title: 'Inflatables', value: 'inflatables' }],
      },
      description: 'The category of the rental listing',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the rental listing',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the rental',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Main image for the rental listing',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Rental price in USD',
    },
    {
      name: 'available',
      title: 'Available',
      type: 'boolean',
      description: 'Is this rental available for booking?',
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of features or amenities of the rental',
    },
  ],
};
