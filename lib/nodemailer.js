import nodemailer from "nodemailer";

const email = process.env.EMAIL_HOST;//"pablosen87@gmail.com"//
const pass = process.env.EMAIL_HOST_PASS;//"thglkyxyyirtxujn"// 
//process.env.EMAIL_HOST_PASS


export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  }
});

export const mailOptions = {
  from: email
  //to: 'pawel.siwek87@gmail.com',
};