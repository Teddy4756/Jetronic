const email = require('./email');

module.exports = {
  async contact(info) {
    const html = `
        <!doctype html>
          <html>
            <head>
              <meta name="viewport" content="width=device-width">
              <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
              <script src="https://kit.fontawesome.com/bc307ed344.js" crossorigin="anonymous"></script>
              <title>Mot de passe</title>
            <style>
          @media only screen and (max-width: 620px) {
            table[class=body] h1 {
              font-size: 28px !important;
              margin-bottom: 10px !important;
            }

            table[class=body] p,
            table[class=body] ul,
            table[class=body] ol,
            table[class=body] td,
            table[class=body] span,
            table[class=body] a {
              font-size: 16px !important;
            }

            table[class=body] .wrapper,
          table[class=body] .article {
              padding: 10px !important;
            }

            table[class=body] .content {
              padding: 0 !important;
            }

            table[class=body] .container {
              padding: 0 !important;
              width: 100% !important;
            }

            table[class=body] .main {
              border-left-width: 0 !important;
              border-radius: 0 !important;
              border-right-width: 0 !important;
            }

            table[class=body] .btn table {
              width: 100% !important;
            }

            table[class=body] .btn a {
              width: 100% !important;
            }

            table[class=body] .img-responsive {
              height: auto !important;
              max-width: 100% !important;
              width: auto !important;
            }
          }
          @media all {
            .ExternalClass {
              width: 100%;
            }

            .ExternalClass,
          .ExternalClass p,
          .ExternalClass span,
          .ExternalClass font,
          .ExternalClass td,
          .ExternalClass div {
              line-height: 100%;
            }

            .apple-link a {
              color: inherit !important;
              font-family: inherit !important;
              font-size: inherit !important;
              font-weight: inherit !important;
              line-height: inherit !important;
              text-decoration: none !important;
            }

            .btn-primary table td:hover {
              background-color: #00796B !important;
            }

            .btn-primary a:hover {
              background-color: #00796B !important;
              border-color: #00796B !important;
            }
          }
          </style></head>
            <body class style="background-color: #eaebed; font-family: 'Poppins', sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; background-color: #eaebed; width: 100%;" width="100%" bgcolor="#eaebed">
                <tr>
                  <td style="font-family: 'Poppins', sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
                  <td class="container" style="font-family: 'Poppins', sans-serif; font-size: 14px; vertical-align: top; display: block; max-width: 580px; padding: 10px; width: 580px; Margin: 0 auto;" width="580" valign="top">
                    <div class="header" style="padding: 20px 0;">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; width: 100%;">
                        <tr>
                          <td class="align-center" width="100%" style="font-family: 'Poppins', sans-serif; font-size: 14px; vertical-align: top; text-align: center;" valign="top" align="center">
                            <a href="https://ekena.ga" style="color: #00796B; text-decoration: underline;"><img src="https://ekena.ga/images/logos/ekena_logo.png" height="100" alt="EKENA" style="border: none; -ms-interpolation-mode: bicubic; max-width: 100%;"></a>
                          </td>
                        </tr>
                      </table>
                    </div>
                    <div class="content" style="box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px;">

                      <!-- START CENTERED WHITE CONTAINER -->
                      <table role="presentation" class="main" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">

                        <!-- START MAIN CONTENT AREA -->
                        <tr>
                          <td class="wrapper" style="font-family: 'Poppins', sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;" valign="top">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; width: 100%;" width="100%">
                              <tr>
                                <td style="font-family: 'Poppins', sans-serif; font-size: 14px; vertical-align: top;" valign="top">
                                  <p style="font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Email : ${info.email}</p>
                                  <p style="font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Tel : ${info.content}</p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>

                      <!-- END MAIN CONTENT AREA -->
                      </table>

                      <!-- START FOOTER -->
                      <div class="footer" style="clear: both; Margin-top: 10px; text-align: center; width: 100%;">
                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; width: 100%;" width="100%">
                          <tr>
                            <td class="content-block" style="font-family: 'Poppins', sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #9a9ea6; font-size: 12px; text-align: center;" valign="top" align="center">
                              <span class="apple-link" style="color: #9a9ea6; font-size: 12px; text-align: center;">Copyright © Ekena 202vdf1. Tous drohhyhits réservés.</span>
                            </td>
                          </tr>
                          <tr>
                            <td class="content-block powered-by" style="font-family: 'Poppins', sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; color: #9a9ea6; font-size: 12px; text-align: center;" valign="top" align="center">
                              <a href="#" target="_blank"><img src="https://ekena.ga/images/reseaux/facebook.png" height="25" alt="Facebook" style="border: none; -ms-interpolation-mode: bicubic; max-width: 100%;"></a>
                              <a href="#" target="_blank"><img src="https://ekena.ga/images/reseaux/whatsapp.png" height="25" alt="Whatsapp" style="border: none; -ms-interpolation-mode: bicubic; max-width: 100%;"></a>
                              <a href="#" target="_blank"><img src="https://ekena.ga/images/reseaux/linkedin.png" height="25" alt="Linkedin" style="border: none; -ms-interpolation-mode: bicubic; max-width: 100%;"></a>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <!-- END FOOTER -->

                    <!-- END CENTERED WHITE CONTAINER -->
                    </div>
                  </td>
                  <td style="font-family: 'Poppins', sans-serif; font-size: 14px; vertical-align: top;" valign="top">&nbsp;</td>
                </tr>
              </table>
            </body>
          </html>
          `;
        email.sendEmail("teddymba4@gmail.com", "demande d'infos : "+info.email, html)
      }
}