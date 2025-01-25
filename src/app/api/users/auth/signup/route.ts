//signup/route.ts
import { connectDB } from "@/config/db";
import { UserModel } from "../../../../models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { username, email, password }: { username: string; email: string; password: string } = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = await UserModel.create({
      name: username,
      email,
      password: hashedPassword,
    });

    await sendEmail({
      email,
      emailType: "VERIFY",
      userId: newUser._id.toString(),
    });

    return NextResponse.json(
      {
        message: "User created successfully",
        success: true,
        user: {
          id: newUser._id,
          email: newUser.email,
          name: newUser.name,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[Signup Error]", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}