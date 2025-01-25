// app/api/users/auth/logout/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = NextResponse.json({
      message: "Logout successful",
      success: true,
    });

    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0)
    });

    return response;

  } catch (error) {
    console.error("[Logout Error]", error);
    return NextResponse.json(
      { error: "Logout failed" },
      { status: 500 }
    );
  }
}