
'use client'

import { useState } from 'react'
import { ArrowRight, Check, Clipboard, ShieldCheck, Sparkles, Zap } from 'lucide-react'
import { Footer, PageShell, SiteNav } from '@/components/site-nav'

export default function Page() {
  const [url, setUrl] = useState('')
  const [shortened, setShortened] = useState('')
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function shortenUrl() {
    if (!url.trim()) {
      setError('Please enter a URL.')
      return
    }

    let validUrl: URL

    try {
      validUrl = new URL(url.trim())

      if (!['http:', 'https:'].includes(validUrl.protocol)) {
        throw new Error('Invalid protocol')
      }
    } catch {
      setError('Please enter a valid URL starting with https://')
      return
    }

    setLoading(true)
    setError('')
    setShortened('')

    try {
      const response = await fetch('http://localhost:8080/api/urls', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          originalUrl: validUrl.href,
        }),
      })

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`)
      }

      const data = await response.json()

      if (!data.shortUrl) {
        throw new Error('The server did not return a short URL.')
      }

      setShortened(data.shortUrl)
    } catch (err) {
      console.error('URL shortening failed:', err)
      setError(
        'Could not connect to the backend. Check that Spring Boot is running.'
      )
    } finally {
      setLoading(false)
    }
  }

  async function copyUrl() {
    if (!shortened) return

    try {
      await navigator.clipboard.writeText(shortened)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setError('Could not copy the link. Please copy it manually.')
    }
  }

  return (
    <PageShell>
      <SiteNav />

      <section className="relative mx-auto max-w-5xl px-6 pb-24 pt-20 text-center lg:pt-28">
        <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-xs font-medium text-blue-200">
          <Sparkles size={13} />
          The smarter way to share links
        </div>

        <h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-[-.04em] text-balance sm:text-7xl">
          Short links.
          <br />
          <span className="text-blue-400">Big possibilities.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-400">
          Create simple, shareable links and keep track of every click. Built
          for teams that move fast.
        </p>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/10 bg-white/[.06] p-2 shadow-2xl shadow-blue-950/30 backdrop-blur">
          <div className="flex flex-col gap-2 sm:flex-row">
            <label className="sr-only" htmlFor="url">
              Long URL
            </label>

            <input
              id="url"
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !loading) {
                  shortenUrl()
                }
              }}
              placeholder="Paste your long URL here..."
              className="min-w-0 flex-1 rounded-xl bg-transparent px-4 py-3 text-sm outline-none placeholder:text-slate-500"
            />

            <button
              onClick={shortenUrl}
              disabled={loading}
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? 'Shortening...' : 'Shorten URL'}
              {!loading && <ArrowRight size={16} />}
            </button>
          </div>

          {error && (
            <p role="alert" className="mt-3 px-3 text-left text-sm text-red-400">
              {error}
            </p>
          )}

          {shortened && (
            <div className="mt-2 flex items-center justify-between gap-3 rounded-xl border border-blue-400/20 bg-blue-950/50 px-4 py-3 text-left text-sm">
              <a
                href={shortened}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-0 truncate text-blue-300 hover:text-blue-200"
              >
                {shortened}
              </a>

              <button
                onClick={copyUrl}
                className="ml-2 flex shrink-0 items-center gap-1.5 text-slate-300 hover:text-white"
              >
                {copied ? <Check size={15} /> : <Clipboard size={15} />}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          )}
        </div>

        <div className="mt-5 flex items-center justify-center gap-5 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={14} />
            No signup required
          </span>

          <span className="flex items-center gap-1.5">
            <Zap size={14} />
            Fast &amp; reliable
          </span>
        </div>
      </section>

      <Footer />
    </PageShell>
  )
}
