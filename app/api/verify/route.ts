import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import Stripe from 'stripe'

const prisma = new PrismaClient()
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request) {
  try {
    const { email, internalKey, sessionId } = await req.json()

    // 🔓 ACESSO INTERNO (SEM PAGAR)
    if (internalKey === process.env.INTERNAL_ACCESS_KEY && email) {
      const user = await prisma.user.upsert({
        where: { email },
        update: { hasAccess: true },
        create: { email, hasAccess: true }
      })

      await prisma.accessLog.create({
        data: {
          userId: user.id,
          action: 'INTERNAL_ACCESS'
        }
      })

      return NextResponse.json({ ok: true })
    }

    // 💳 ACESSO STRIPE
    if (!sessionId) {
      return NextResponse.json({ error: 'No session' }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.payment_status !== 'paid' || !session.customer_email) {
      return NextResponse.json({ error: 'Not paid' }, { status: 403 })
    }

    const user = await prisma.user.upsert({
      where: { email: session.customer_email },
      update: { hasAccess: true },
      create: {
        email: session.customer_email,
        hasAccess: true,
        stripeSession: sessionId
      }
    })

    await prisma.accessLog.create({
      data: {
        userId: user.id,
        action: 'STRIPE_ACCESS'
      }
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Error' }, { status: 500 })
  }
}
