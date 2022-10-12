var nodemailer = require('nodemailer');
var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9046bf8df1f437",
    pass: "0a7b7bd27dd355"
  }
});

var mailOptions = {
  from: '"Example Team" <vatsal@tristate.com>',
  to: 'user1@example.com',
  subject: 'Nice Nodemailer test',
  text: 'Hey there, its our first message sent with Nodemailer ',
  html: '<b> Welcome to nodemailer </b>',
//   attachments: [
//     {
//       filename: 'mailtrap.png',
//       path: __dirname + '/mailtrap.png',
//       cid: 'uniq-mailtrap.png' 
//     }
//   ]
};

transport.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

});