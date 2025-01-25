import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // Validate email field
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ success: false, error: "Invalid email address" }, { status: 400 });
    }

    // Configure nodemailer transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // Use true for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    

    // Compose the email
    await transporter.sendMail({
      from: `"Newsletter Subscription" <${process.env.SMTP_USER}>`, // Sender email
      to: process.env.TO_EMAIL, // Recipient email
      subject: "New Newsletter Subscription", // Email subject
      text: `You have a new subscriber!\n\nEmail: ${email}`, // Email body (text)
    });

    return NextResponse.json({ success: true, message: "Subscription successful" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
