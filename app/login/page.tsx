'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Link2 } from 'lucide-react'

export default function LoginPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [submitted, setSubmitted] = useState(false)

  function switchMode(nextMode: 'login' | 'signup') {
    setMode(nextMode)
    setSubmitted(false)
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }
  return <main className="flex min-h-screen items-center justify-center bg-[#050b18] px-6 py-12 text-white"><div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,.24),transparent_38%)]" /><div className="relative w-full max-w-md"><Link href="/" className="mx-auto flex w-fit items-center gap-2 text-lg font-semibold tracking-tight"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600"><Link2 size={17} /></span> linkly</Link><div className="mt-10 rounded-2xl border border-white/10 bg-[#0b1629] p-7 shadow-2xl shadow-blue-950/20"><div className="flex gap-6 border-b border-white/10"><button type="button" onClick={() => switchMode('login')} className={`pb-4 text-sm font-medium ${mode === 'login' ? 'border-b-2 border-blue-400 text-white' : 'text-slate-500'}`}>Log in</button><button type="button" onClick={() => switchMode('signup')} className={`pb-4 text-sm font-medium ${mode === 'signup' ? 'border-b-2 border-blue-400 text-white' : 'text-slate-500'}`}>Get started</button></div><h1 className="mt-8 text-3xl font-semibold tracking-tight">{mode === 'login' ? 'Welcome back.' : 'Create your account.'}</h1><p className="mt-2 text-sm text-slate-400">{mode === 'login' ? 'Log in to manage your links and analytics.' : 'Join Linkly and start sharing better links.'}</p><form onSubmit={submit} className="mt-8 space-y-4"><div><label htmlFor="email" className="mb-2 block text-sm text-slate-300">Email address</label><input id="email" type="email" required placeholder="you@example.com" className="w-full rounded-lg border border-white/10 bg-white/[.04] px-4 py-3 text-sm outline-none transition placeholder:text-slate-600 focus:border-blue-400" /></div><div><label htmlFor="password" className="mb-2 block text-sm text-slate-300">Password</label><input id="password" type="password" required placeholder="••••••••" className="w-full rounded-lg border border-white/10 bg-white/[.04] px-4 py-3 text-sm outline-none transition placeholder:text-slate-600 focus:border-blue-400" /></div><button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium transition hover:bg-blue-500">{mode === 'login' ? 'Log in' : 'Create account'} <ArrowRight size={16} /></button></form>{submitted && <p role="status" className="mt-4 rounded-lg border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-300">{mode === 'login' ? 'You are signed in.' : 'Your account is ready to go.'}</p>}</div><Link href="/" className="mt-6 block text-center text-sm text-slate-500 hover:text-white">Back to home</Link></div></main>
}
