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
  images: Array<{
    _key: string;
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
    };
  }>;
  price: number;
  available: boolean;
  features: string[];
};

export interface DateTimeRangeForm {
  startDateTime: string | undefined;
  endDateTime: string | undefined;
  isDateTimeRangeValid?: boolean;
}

export interface BookingFormContent extends DateTimeRangeForm {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  additionalInfo: string;
}
