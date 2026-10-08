import { ArrowRight, Check, Link2, MousePointerClick, ShieldCheck, Zap } from 'lucide-react'
import Link from 'next/link'
import { Footer, PageShell, SiteNav } from '@/components/site-nav'

const features = [
  { icon: Link2, title: 'Branded short links', text: 'Turn long, forgettable URLs into clean links your audience will remember.' },
  { icon: MousePointerClick, title: 'Click intelligence', text: 'See where visitors come from, what they use, and when they engage.' },
  { icon: ShieldCheck, title: 'Built for trust', text: 'Protect every destination with reliable redirects and dependable uptime.' },
  { icon: Zap, title: 'Fast by default', text: 'Create, share, and manage links in seconds without slowing your workflow.' },
]

export default function FeaturesPage() {
  return <PageShell><SiteNav /><section className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 lg:px-8 lg:pt-24"><p className="text-sm font-medium text-blue-400">Features</p><h1 className="mt-4 max-w-3xl text-5xl font-semibold tracking-[-.04em] sm:text-7xl">Everything your links need to <span className="text-blue-400">work harder.</span></h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">A focused toolkit for creating better links, understanding your audience, and moving from idea to insight without the busywork.</p><div className="mt-14 grid gap-4 md:grid-cols-2">{features.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-white/10 bg-[#0b1629] p-7"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300"><Icon size={21} /></div><h2 className="mt-8 text-2xl font-medium">{title}</h2><p className="mt-3 max-w-md leading-7 text-slate-400">{text}</p><div className="mt-7 flex items-center gap-2 text-sm text-blue-300"><Check size={16} /> Included in every plan</div></article>)}</div><div className="mt-10 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-7 sm:flex sm:items-center sm:justify-between"><div><h2 className="text-xl font-medium">Ready to make your first link?</h2><p className="mt-2 text-sm text-blue-100/70">Start free and see how simple sharing can be.</p></div><Link href="/login?mode=signup" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-[#071124] sm:mt-0">Get started <ArrowRight size={16} /></Link></div></section><Footer /></PageShell>
}
