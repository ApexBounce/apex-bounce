import { NextApiRequest, NextApiResponse } from 'next';

/////////////////////////////// GUIDeS /////////////////////////////////////

//https://www.brevo.com/blog/send-transactional-emails-with-next-js-and-sendinblue/

//https:/ / developers.brevo.com / reference / sendtransacemail;

///////////////////////////////////////////////////////////////////////////
// import mail from '@sendgrid/mail';
import SibApiV3Sdk from 'sib-api-v3-typescript';

let apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

let apiKey = apiInstance['authentications']['apiKey'];
apiKey.apiKey = process.env.BREVO_API_KEY as string;

interface RentalBookingRequest extends NextApiRequest {
  body: {
    itemTitle: string;
    firstName: string;
    lastName: string;
    phoneNumber: number;
    email: string;
    startDateTime: string;
    endDateTime: string;
    additionalInfo: string;
    timestampMs?: number;
  };
}

export default async function handler(
  req: RentalBookingRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST':
      const bodyObject = {
        ...req.body,
        timestampMs: Date.now(),
      };

      const to = process.env.EMAIL_TO;
      const from = process.env.EMAIL_FROM;

      if (to && from) {
        let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

        const message = `
            This email is auto generated. Do not respond to this email.\r\n
            Instead, click the email or phone number links in the Contact Information below.\r\n\r\n
            Contact Information:\r\n
            Item Title: ${bodyObject.itemTitle}\r\n
            First Name: ${bodyObject.firstName}\r\n
            Last Name: ${bodyObject.lastName}\r\n
            Email: ${bodyObject.email}\r\n
            Phone Number: ${bodyObject.phoneNumber}\r\n
            Dates/Times: ${bodyObject.startDateTime} to ${
          bodyObject.endDateTime
        }\r\n
            Additional Info: ${bodyObject.additionalInfo}\r\n
            Requested Date/Time: ${new Date(
              bodyObject.timestampMs
            ).toLocaleString('en-US', {
              timeZone: 'America/New_York',
              dateStyle: 'full',
              timeStyle: 'full',
            })}
          `;

        const data = {
          to,
          from,
          subject: 'New Rental Request from the Apex Bounce website!',
          text: message,
          html: message.replace(/\r\n/g, '<br>'),
        };

        sendSmtpEmail.subject = data.subject;
        sendSmtpEmail.htmlContent = data.html;
        sendSmtpEmail.sender = { email: from };
        sendSmtpEmail.to = [{ email: to }];

        apiInstance.sendTransacEmail(sendSmtpEmail).then(
          function (data: any) {
            console.log(
              'API called successfully. Returned data: ' + JSON.stringify(data)
            );
          },
          function (error: any) {
            console.error(error);
          }
        );

        // const message = `
        //     This email is auto generated. Do not respond to this email.\r\n
        //     Instead, click the email or phone number links in the Contact Information below.\r\n\r\n
        //     Contact Information:\r\n
        //     Item Title: ${bodyObject.itemTitle}\r\n
        //     First Name: ${bodyObject.firstName}\r\n
        //     Last Name: ${bodyObject.lastName}\r\n
        //     Email: ${bodyObject.email}\r\n
        //     Phone Number: ${bodyObject.phoneNumber}\r\n
        //     Dates/Times: ${bodyObject.startDateTime} to ${
        //   bodyObject.endDateTime
        // }\r\n
        //     Additional Info: ${bodyObject.additionalInfo}\r\n
        //     Requested Date/Time: ${new Date(
        //       bodyObject.timestampMs
        //     ).toLocaleString('en-US', {
        //       timeZone: 'America/New_York',
        //       dateStyle: 'full',
        //       timeStyle: 'full',
        //     })}
        //   `;

        // const data = {
        //   to,
        //   from,
        //   subject: 'New Rental Request from the Apex Bounce website!',
        //   text: message,
        //   html: message.replace(/\r\n/g, '<br>'),
        // };

        // try {
        //   await mail.send(data);
        // } catch (error) {
        //   console.error(error);
        // }
      } else {
        console.error(
          'Email TO and/or FROM environment variables were not found.'
        );
      }
      break;
  }
}
