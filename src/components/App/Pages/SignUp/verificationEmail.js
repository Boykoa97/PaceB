// import nodemailer from "nodemailer";

// nodemailer.createTestAccount((err, account) => {
//   if (err) {
//     console.error("Failed to create a testing account");
//     console.error(err);
//     return process.exit(1);
//   }

//   console.log("Credentials obtained, sending message...");

//   // NB! Store the account object values somewhere if you want
//   // to re-use the same account for future mail deliveries

//   // Create a SMTP transporter object
//   const transporter = nodemailer.createTransport(
//     {
//       host: "smtp.mailtrap.io",
//       port: 2525,
//       auth: {
//         user: "3aaee0a1838d94",
//         pass: "7e2b6805dc298a",
//       },
//       logger: true,
//       debug: false, // include SMTP traffic in the logs
//     },
//     {
//       // default message fields

//       // sender info
//       from: "a071e15e2a-d350de@inbox.mailtrap.io",
//       headers: {
//         "   X-Laziness-level": 1000, // just an example header, no need to use this
//       },
//     }
//   );

//   // Message object
//   let message = {
//     // Comma separated list of recipients
//     to: "<" + account + ">",

//     // Subject of the message
//     subject: "Welcome to your mentorship" + Date.now(),

//     // HTML body
//     html: `<body>
//                 <p>Thank you for signing up to be a mentor service!<br/>
//             </body>`,

//     // AMP4EMAIL
//     amp: `<!doctype html>
//         <html ⚡4email>
//           <head>
//             <meta charset="utf-8">
//             <style amp4email-boilerplate>body{visibility:hidden}</style>
//             <script async src="https://cdn.ampproject.org/v0.js"></script>
//             <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
//           </head>
//           <body>
//             <p>Thank you for signing up for our mentor service!<br/>
//           </body>
//         </html>`,
//   };

//   transporter.sendMail(message, (error, info) => {
//     if (error) {
//       console.log("Error occurred");
//       console.log(error.message);
//       return process.exit(1);
//     }

//     console.log("Message sent successfully!");
//     console.log(nodemailer.getTestMessageUrl(info));

//     // only needed when using pooled connections
//     transporter.close();
//   });
// });
