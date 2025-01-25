import nodemailer from "nodemailer";
import { UserModel } from "../../src/app/models/user.model";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

interface EmailOptions {
  email: string;
  emailType: "VERIFY" | "RESET";
  userId: string;
}

export async function sendEmail({ email, emailType, userId }: EmailOptions) {
  try {
    const token = uuidv4();
    const tokenExpirationTime = new Date(Date.now() + 3600000); // 1 hour

    const updateData =
      emailType === "VERIFY"
        ? {
            verifyToken: token,
            verifyTokenExpires: tokenExpirationTime,
          }
        : {
            forgotPasswordToken: token,
            forgotPasswordTokenExpires: tokenExpirationTime,
          };

    const user = await UserModel.findByIdAndUpdate(userId, updateData);
    if (!user) throw new Error("User not found");

    // Debugging: Check if the environment variables are loaded correctly
    console.log("SMTP_HOST:", process.env.SMTP_HOST); // Should print smtp.gmail.com
    console.log("SMTP_PORT:", process.env.SMTP_PORT); // Should print 465
    console.log("SMTP_USER:", process.env.SMTP_USER); // Should print your email
    console.log("SMTP_PASS:", process.env.SMTP_PASS); // Should print your password (ensure you don't log sensitive information in production)

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com", // Default to smtp.gmail.com if undefined
      port: Number(process.env.SMTP_PORT) || 465, // Default to 465 if undefined
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const emailSubject =
      emailType === "VERIFY" ? "Verify Your Email" : "Reset Your Password";
    const emailLink = `${process.env.NEXT_PUBLIC_APP_URL}/${
      emailType === "VERIFY" ? "verify-email" : "reset-password"
    }?token=${token}&userId=${userId}`;

    await transporter.sendMail({
      from: process.env.SMTP_FROM, // Ensure SMTP_FROM is set correctly in .env
      to: email,
      subject: emailSubject,
      html: `
        <div>
          <h2>${emailSubject}</h2>
          <p>Click the link below to ${
            emailType === "VERIFY" ? "verify your email" : "reset your password"
          }:</p>
          <a href="${emailLink}">${emailLink}</a>
          <p>This link expires in 1 hour.</p>
        </div>
      `,
    });
  } catch (error) {
    console.error("[Mail Error]", error);
    throw error;
  }
}
