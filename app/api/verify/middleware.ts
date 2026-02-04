import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  if (path.startsWith('/dashboard')) {
    // aqui futuramente entra sessão/cookie/token
    // por enquanto o gate é lógico
  }

  return NextResponse.next()
}
