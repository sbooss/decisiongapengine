import { NextResponse } from "next/server";
import Stripe from "stripe";
import { prisma } from "@/lib/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function POST(req: Request) {
  const sig = req.headers.get("stripe-signature");
  const body = await req.text();

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      sig!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;
      const userId = session.metadata?.userId;
      const plan = session.metadata?.plan;

      if (!userId || !plan) {
        return NextResponse.json({ error: "Missing metadata" }, { status: 400 });
      }

      await prisma.user.update({
        where: { id: userId },
        data: { plan },
      });
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Webhook error" }, { status: 400 });
  }
}
