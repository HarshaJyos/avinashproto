// app/api/users/auth/forgot-password/route.ts
import { connectDB } from "@/config/db";
import { UserModel } from "@/app/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helpers/mailer";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Find user
    const user = await UserModel.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "If an account exists with this email, you will receive a password reset link" },
        { status: 200 } // Using 200 for security to prevent email enumeration
      );
    }

    // Check if a reset link was recently sent (within last 5 minutes)
    const lastResetTime = user.forgotPasswordTokenExpires;
    if (lastResetTime && Date.now() < new Date(lastResetTime).getTime() - 3300000) { // 55 minutes ago
      return NextResponse.json(
        { error: "A reset link was recently sent. Please wait 5 minutes before requesting another." },
        { status: 429 }
      );
    }

    // Send password reset email
    await sendEmail({
      email: user.email,
      emailType: "RESET",
      userId: user._id.toString()
    });

    return NextResponse.json(
      {
        message: "If an account exists with this email, you will receive a password reset link",
        success: true
      },
      { status: 200 }
    );

  } catch (error) {
    console.error("[Forgot Password Error]", error);
    return NextResponse.json(
      { error: "Failed to process request. Please try again later." },
      { status: 500 }
    );
  }
}