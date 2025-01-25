// app/api/users/auth/reset-password/route.ts
import { connectDB } from "@/config/db";
import { UserModel } from "@/app/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { token, userId, newPassword } = await req.json();

    if (!token || !userId || !newPassword) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Find user and check if token matches and hasn't expired
    const user = await UserModel.findOne({
      _id: userId,
      forgotPasswordToken: token,
      forgotPasswordTokenExpires: { $gt: new Date() }
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid or expired reset link" },
        { status: 400 }
      );
    }

    // Password validation
    if (newPassword.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters long" },
        { status: 400 }
      );
    }

    // Hash the new password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(newPassword, salt);

    // Update user's password and clear reset token fields
    user.password = hashedPassword;
    user.forgotPasswordToken = undefined;
    user.forgotPasswordTokenExpires = undefined;
    await user.save();

    return NextResponse.json(
      { 
        message: "Password reset successful. You can now login with your new password.",
        success: true 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Reset Password Error]", error);
    return NextResponse.json(
      { error: "Failed to reset password. Please try again." },
      { status: 500 }
    );
  }
}