require("dotenv").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(
  "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"
);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
console.log(process.env.sendgridkey0);

const msg = {
  to: "0parkjuhwan901@gmail.com",
  from: "appleid1226@gmail.com", // Use the email address or domain you verified above
  subject: "TESTING",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
//ES8
sgMail
  .send(msg)
  .then((respose) => console.log("Email sent\n", process.env.sendgridkey0))
  .catch((error) => console.log(error.response.body));
