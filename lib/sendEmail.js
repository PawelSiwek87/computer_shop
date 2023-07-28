//const sgMail = require('@sendgrid/mail')
//import sgMail from "@sendgrid/mail"

export default async function sendEmail() {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to,
    from,
    subject,
    html,
  };

  try {
    await sgMail.send(msg);
    console.log('E-mail został wysłany!');
  } catch (error) {
    console.error('Błąd podczas wysyłania e-maila:', error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
}
