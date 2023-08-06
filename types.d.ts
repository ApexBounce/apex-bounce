export type OrganizationData = {
  _rev: string;
  _type: 'organization';
  operatingSchedule: {
    fridayHours: string;
    thursdayHours: string;
    tuesdayHours: string;
    sundayHours: string;
    _type: 'document';
    mondayHours: string;
    saturdayHours: string;
    wednesdayHours: string;
  };
  phoneNumber: string;
  serviceLocations: {
    cities: string[];
    _type: 'stateAndCities';
    name: string;
    _key: string;
  }[];
  location: {
    _type: 'document';
    state: string;
    zipCode: string;
    city: string;
    street: string;
  };
  _id: string;
  _updatedAt: string;
  slogan: string;
  social: {
    facebook: string;
    _type: 'document';
  };
  _createdAt: string;
  name: string;
  email: string;
};

export type RentalListing = {
  _id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  price: number;
  available: boolean;
  features: string[];
};
