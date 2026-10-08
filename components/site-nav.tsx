'use client'

import Link from 'next/link'
import { Link2, Menu, X } from 'lucide-react'
import { useState } from 'react'

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return (
    <nav className="relative z-10 mx-auto max-w-6xl px-6 py-6 lg:px-8">
      <div className="flex items-center justify-between">
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600"><Link2 size={17} /></span>
          linkly
        </Link>
        <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <Link href="/features" className="transition hover:text-white">Features</Link>
          <Link href="/analytics" className="transition hover:text-white">Analytics</Link>
          <Link href="/pricing" className="transition hover:text-white">Pricing</Link>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <Link href="/login" className="rounded-lg px-4 py-2 text-sm text-slate-300 transition hover:text-white">Log in</Link>
          <Link href="/login?mode=signup" className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-[#071124] transition hover:bg-blue-50">Get started</Link>
        </div>
        <button type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((value) => !value)} className="rounded-lg p-2 text-slate-300 transition hover:bg-white/10 hover:text-white md:hidden">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && <div className="mt-4 grid gap-2 rounded-xl border border-white/10 bg-[#0b1629] p-3 shadow-xl md:hidden">
        <Link href="/features" onClick={closeMenu} className="rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white">Features</Link>
        <Link href="/analytics" onClick={closeMenu} className="rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white">Analytics</Link>
        <Link href="/pricing" onClick={closeMenu} className="rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white">Pricing</Link>
        <div className="mt-2 grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
          <Link href="/login" onClick={closeMenu} className="rounded-lg px-3 py-3 text-center text-sm text-slate-300 hover:bg-white/5 hover:text-white">Log in</Link>
          <Link href="/login?mode=signup" onClick={closeMenu} className="rounded-lg bg-white px-3 py-3 text-center text-sm font-medium text-[#071124]">Get started</Link>
        </div>
      </div>}
    </nav>
  )
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <main className="min-h-screen overflow-hidden bg-[#050b18] text-white"><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,.24),transparent_38%)]" />{children}</main>
}

export function Footer() {
  return <footer className="relative border-t border-white/10 px-6 py-8"><div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row"><span>© 2026 linkly. Simple links, powerful insights.</span><div className="flex gap-5"><Link href="/" className="hover:text-white">Home</Link><Link href="/pricing" className="hover:text-white">Pricing</Link><Link href="/login" className="hover:text-white">Contact</Link></div></div></footer>
}
