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
import { ContactUsRequest } from '@/types';

export default function ContactUsForm(props: ContactUsRequest) {
  return (
    <Html>
      <Head />
      <Preview>{props.orgInfo.name} Contact Request</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                Contact Request from {props.firstName} {props.lastName}
              </Heading>
              <Text className="font-bold">Contact Information:</Text>
              <Text>
                Name: {props.firstName} {props.lastName}
              </Text>
              <Text>Email: {props.senderEmail}</Text>
              <Text>Phone: {props.phoneNumber}</Text>
              {!!props.additionalInfo && (
                <Text>
                  Additional Info:
                  <br />
                  {props.additionalInfo}
                </Text>
              )}
              <Hr />
              <Text>The sender's email is: {props.senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
