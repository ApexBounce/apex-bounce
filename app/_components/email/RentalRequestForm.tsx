import React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';
import { RentalBookingRequest } from '@/app/_types';

export default function RentalRequestForm(props: RentalBookingRequest) {
  return (
    <Html>
      <Head />
      <Preview>
        {props.orgInfo.name} Rental Request for the {props.rentalDetails.title}
      </Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                Rental Request for {props.rentalDetails.title}
              </Heading>
              <Text className="font-bold">Customer Information:</Text>
              <Text>
                Name: {props.firstName} {props.lastName}
              </Text>
              <Text>Email: {props.senderEmail}</Text>
              <Text>Phone: {props.phoneNumber}</Text>
              <Hr />
              <Text className="font-bold">Request Details:</Text>
              <Text>Item Name: {props.rentalDetails.title}</Text>
              <Text>
                Requested Date/Time:
                <br />
                From: {props.startDateTime}
                <br />
                To: {props.endDateTime}
              </Text>
              {!!props.additionalInfo && (
                <Text>
                  Additional Info:
                  <br />
                  {props.additionalInfo}
                </Text>
              )}
              <Hr />
              <Text>The sender&apos;s email is: {props.senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
