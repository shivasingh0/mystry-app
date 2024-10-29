import { ApiResponse } from "@/types/ApiResponse";
import { transporter } from "@/lib/mailer";
// import EmailTemplate from "./emailTemplate/EmailTemplate";

export async function sendVerificationEmail(
  email: string,
  verifyCode: string,
  username: string
): Promise<ApiResponse> {
  try {
    if (!email || !verifyCode || !username) {
      return { success: false, message: "Invalid parameters provided" };
    }

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f5f5f5;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #ffffff;
              border-radius: 5px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            h1 {
              color: #333333;
            }
            p {
              color: #666666;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>Mystry message | Verification code</h1>
            <p>Hello, ${username}.</p>
            <p>Your verification code is: ${verifyCode}</p>
          </div>
        </body>
      </html>
      `;

    await transporter.sendMail({
      from: process.env.VERIFICATION_EMAIL!,
      to: email,
      subject: "Your Verification Code",
      html: emailHtml,
    });

    return { success: true, message: "Verification email sent successfully" };
  } catch (emailError) {
    console.error("Error sending verification email", emailError);
    return { success: false, message: "Failed to send verification email" };
  }
}
