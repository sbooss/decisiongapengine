import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Decision Gap Engine"
              width={140}
              height={40}
              priority
            />
          </div>
        </Link>

        {/* Acesso */}
        <nav className="flex gap-6 text-sm text-gray-400">
          <Link href="/auth/login" className="hover:text-white transition">
            Login
          </Link>
          <Link
            href="/auth/register"
            className="border border-white/20 px-4 py-2 rounded hover:border-white transition"
          >
            Request Access
          </Link>
        </nav>

      </div>
    </header>
  )
}
