export default {
  name: 'organization',
  type: 'document',
  title: 'Organization Information',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'phoneNumber',
      type: 'string',
      title: 'Phone Number',
    },
    {
      name: 'slogan',
      type: 'string',
      title: 'Slogan',
    },
    {
      name: 'operatingSchedule',
      type: 'document',
      title: 'Operating Schedule',
      fields: [
        {
          name: 'mondayHours',
          type: 'string',
          title: 'Monday Hours',
        },
        {
          name: 'tuesdayHours',
          type: 'string',
          title: 'Tuesday Hours',
        },
        {
          name: 'wednesdayHours',
          type: 'string',
          title: 'Wednesday Hours',
        },
        {
          name: 'thursdayHours',
          type: 'string',
          title: 'Thursday Hours',
        },
        {
          name: 'fridayHours',
          type: 'string',
          title: 'Friday Hours',
        },
        {
          name: 'saturdayHours',
          type: 'string',
          title: 'Saturday Hours',
        },
        {
          name: 'sundayHours',
          type: 'string',
          title: 'Sunday Hours',
        },
      ],
    },
    {
      name: 'location',
      type: 'document',
      title: 'Location',
      fields: [
        {
          name: 'street',
          type: 'string',
          title: 'Street Address',
        },
        {
          name: 'city',
          type: 'string',
          title: 'City',
        },
        {
          name: 'state',
          type: 'string',
          title: 'State',
        },
        {
          name: 'zipCode',
          type: 'string',
          title: 'Zip Code',
        },
      ],
    },
    {
      name: 'social',
      type: 'document',
      title: 'Social',
      fields: [
        {
          name: 'facebook',
          type: 'url',
          title: 'Facebook Link',
        },
        {
          name: 'instagram',
          type: 'url',
          title: 'Instagram Link',
        },
        {
          name: 'youtube',
          type: 'url',
          title: 'Youtube Link',
        },
      ],
    },
    {
      name: 'serviceLocations',
      title: 'Service Locations',
      type: 'array',
      of: [
        {
          name: 'stateAndCities',
          type: 'document',
          title: 'State and Cities',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'State Name',
            },
            {
              name: 'cities',
              type: 'array',
              title: 'Cities',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
    },
  ],
};
