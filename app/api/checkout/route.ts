import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

const PRICE_MAP: Record<string, { name: string; amount: number }> = {
  individual: { name: "Individual", amount: 1900 },
  executive: { name: "Executive", amount: 4000 },
  company: { name: "Company", amount: 12000 },
};

export async function POST(req: Request) {
  try {
    const { plan, userId } = await req.json();

    if (!plan || !userId || !PRICE_MAP[plan]) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            recurring: { interval: "month" },
            product_data: {
              name: `Decision Gap Engine™ — ${PRICE_MAP[plan].name}`,
            },
            unit_amount: PRICE_MAP[plan].amount,
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId,
        plan,
      },
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/verify?success=1`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/pricing`,
    });

    return NextResponse.json({ url: session.url });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Checkout error" }, { status: 500 });
  }
}
