export type OrganizationData = {
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
    name: string;
  }[];
  location: {
    state: string;
    zipCode: string;
    city: string;
    street: string;
  };
  slogan: string;
  social: {
    facebook: string;
  };
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
  senderEmail: string;
  phoneNumber: string;
  additionalInfo?: string | null;
}

export interface RentalBookingRequest extends BookingFormContent {
  orgInfo: OrganizationData;
  rentalDetails: RentalListing;
  timestampMs?: number;
}

export interface FAQ {
  question: string;
  answer: string;
}
