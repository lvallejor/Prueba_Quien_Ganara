const nodemailer = require("nodemailer");

const enviar = async (to, subject, html) => {
  let transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "nodemaileradl@gmail.com",
      pass: "desafiolatam",
    },
  });

  let mailOption = {
    from: "nodemaileradl@gmail.com",
    to,
    subject,
    html,
  };

  const envioCorreo = await transporter.sendMail(mailOption);
  return envioCorreo;
};

module.exports = enviar;
