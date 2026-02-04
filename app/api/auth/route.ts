import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { email, password, mode } = await req.json();

    if (!email || !password || !mode) {
      return NextResponse.json(
        { error: "Invalid payload" },
        { status: 400 }
      );
    }

    if (mode === "register") {
      const exists = await prisma.user.findUnique({
        where: { email },
      });

      if (exists) {
        return NextResponse.json(
          { error: "Email already in use" },
          { status: 409 }
        );
      }

      const hash = await bcrypt.hash(password, 10);

      const user = await prisma.user.create({
        data: { email, password: hash },
      });

      return NextResponse.json({ userId: user.id });
    }

    // login
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Not found" },
        { status: 404 }
      );
    }

    const ok = await bcrypt.compare(password, user.password);

    if (!ok) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    return NextResponse.json({ userId: user.id });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Auth error" },
      { status: 500 }
    );
  }
}
