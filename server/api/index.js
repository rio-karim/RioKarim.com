const nodemailer = require('nodemailer');

module.exports = (api) => {
  api.post('/api/contact', (req, res) => {
    // let transport = nodemailer.createTransport({
    //   host: 'smtp.mailtrap.io',
    //   port: 2525,
    //   auth: {
    //      user: 'put_your_username_here',
    //      pass: 'put_your_password_here'
    // }
    // });
    // const message = {
    //     from: 'elonmusk@tesla.com', // Sender address
    //     to: 'to@email.com',         // List of recipients
    //     subject: 'Design Your Model S | Tesla', // Subject line
    //     text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
    // };
    // transport.sendMail(message, function(err, info) {
    //     if (err) {
    //       res.json({
    //         status: 400
    //       })
    //     } else {
    //       res.json({
    //         status: 200
    //       })
    //     }
    // });
    res.json({
      status: 200
    })
  })
}
