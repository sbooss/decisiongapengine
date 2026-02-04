import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function dailyLimit(plan: string) {
  if (plan === "INDIVIDUAL") return 5;
  if (plan === "EXECUTIVE") return 3;
  if (plan === "COMPANY") return 3;
  return 0;
}

export async function POST(req: Request) {
  const { userId } = await req.json();

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { usages: true }
  });

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const today = new Date();
  today.setHours(0,0,0,0);

  const usage = await prisma.usage.findFirst({
    where: {
      userId,
      date: { gte: today }
    }
  });

  const limit = dailyLimit(user.plan);

  if (usage && usage.count >= limit) {
    return NextResponse.json({
      blocked: true,
      message: "Daily decision limit reached. Unlock additional access."
    });
  }

  if (usage) {
    await prisma.usage.update({
      where: { id: usage.id },
      data: { count: usage.count + 1 }
    });
  } else {
    await prisma.usage.create({
      data: { userId, count: 1 }
    });
  }

  const preview = `
This decision carries structural consequences.
The visible issue is not the main risk.
Delay increases exposure.
`;

  const locked = `
Full consequence modeling and financial projection
are restricted to authorized access.
`;

  return NextResponse.json({ preview, locked });
}
