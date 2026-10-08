'use client'

import { useState } from 'react'
import { ArrowRight, Check, Clipboard, Link2, ShieldCheck, Sparkles, Zap } from 'lucide-react'
import { Footer, PageShell, SiteNav } from '@/components/site-nav'

export default function Page() {
  const [url, setUrl] = useState('')
  const [shortened, setShortened] = useState('')
  const [copied, setCopied] = useState(false)

  function shortenUrl() {
    if (!url.trim()) return
    setShortened('lnk.to/your-link')
  }

  function copyUrl() {
    navigator.clipboard?.writeText(`https://${shortened}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return <PageShell><SiteNav /><section className="relative mx-auto max-w-5xl px-6 pb-24 pt-20 text-center lg:pt-28"><div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-xs font-medium text-blue-200"><Sparkles size={13} /> The smarter way to share links</div><h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-[-.04em] text-balance sm:text-7xl">Short links.<br /><span className="text-blue-400">Big possibilities.</span></h1><p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-400">Create simple, shareable links and keep track of every click. Built for teams that move fast.</p><div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/10 bg-white/[.06] p-2 shadow-2xl shadow-blue-950/30 backdrop-blur"><div className="flex flex-col gap-2 sm:flex-row"><label className="sr-only" htmlFor="url">Long URL</label><input id="url" value={url} onChange={(e) => setUrl(e.target.value)} onKeyDown={(e) => { if (e.nativeEvent.isComposing || e.keyCode === 229) return; if (e.key === 'Enter') shortenUrl() }} placeholder="Paste your long URL here..." className="min-w-0 flex-1 rounded-xl bg-transparent px-4 py-3 text-sm outline-none placeholder:text-slate-500" /><button onClick={shortenUrl} className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium transition hover:bg-blue-500">Shorten URL <ArrowRight size={16} /></button></div>{shortened && <div className="mt-2 flex items-center justify-between rounded-xl border border-blue-400/20 bg-blue-950/50 px-4 py-3 text-left text-sm"><span className="truncate text-blue-300">https://{shortened}</span><button onClick={copyUrl} className="ml-4 flex shrink-0 items-center gap-1.5 text-slate-300 hover:text-white">{copied ? <Check size={15} /> : <Clipboard size={15} />}{copied ? 'Copied!' : 'Copy'}</button></div>}</div><div className="mt-5 flex items-center justify-center gap-5 text-xs text-slate-500"><span className="flex items-center gap-1.5"><ShieldCheck size={14} /> No signup required</span><span className="flex items-center gap-1.5"><Zap size={14} /> Fast & reliable</span></div></section><Footer /></PageShell>
}
