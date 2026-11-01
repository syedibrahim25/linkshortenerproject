import { SignInButton, SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import {
  ArrowRight,
  ArrowUpRight,
  LayoutDashboard,
  Link2,
  ShieldCheck,
  WandSparkles,
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <header className="border-b border-zinc-800/80">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5"
        >
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900">
              <Link2 aria-hidden="true" className="size-4 text-zinc-100" />
            </span>
            <span className="font-semibold tracking-tight">LinkShortener</span>
          </Link>

          <div className="hidden items-center gap-8 text-sm text-zinc-400 sm:flex">
            <a className="transition-colors hover:text-white" href="#features">
              Features
            </a>
            <a className="transition-colors hover:text-white" href="#how-it-works">
              How it works
            </a>
          </div>

          <div className="flex items-center gap-3">
            <SignInButton mode="modal">
              <Button variant="ghost" size="sm">
                Sign in
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button size="sm">
                Get started
                <ArrowRight aria-hidden="true" />
              </Button>
            </SignUpButton>
          </div>
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-zinc-800/80">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(161,161,170,0.12),transparent_55%)]"
          />
          <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-20 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div className="max-w-2xl">
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1.5 text-xs font-medium text-zinc-300">
                <WandSparkles aria-hidden="true" className="size-3.5" />
                A simpler way to share links
              </p>
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Short links.
                <br />
                <span className="text-zinc-400">Clearer focus.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
                Turn long URLs into tidy links and keep them organized in one
                secure place. Less clutter, more sharing.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <SignUpButton mode="modal">
                  <Button size="lg" className="h-11 px-5">
                    Create your account
                    <ArrowRight aria-hidden="true" />
                  </Button>
                </SignUpButton>
                <SignInButton mode="modal">
                  <Button variant="outline" size="lg" className="h-11 px-5">
                    Sign in
                  </Button>
                </SignInButton>
              </div>
              <p className="mt-5 text-sm text-zinc-500">
                Your links, ready whenever you are.
              </p>
            </div>

            <div
              role="group"
              aria-label="Preview of an organized link dashboard"
              className="relative mx-auto w-full max-w-xl"
            >
              <div className="absolute -inset-4 rounded-3xl bg-zinc-500/5 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-black/50">
                <div className="flex items-center justify-between border-b border-zinc-800 px-5 py-4">
                  <div>
                    <p className="text-sm font-medium text-zinc-100">
                      Your links
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">
                      A tidy home for what you share
                    </p>
                  </div>
                  <span className="flex size-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                    <LayoutDashboard
                      aria-hidden="true"
                      className="size-4 text-zinc-300"
                    />
                  </span>
                </div>
                <div className="space-y-3 p-4 sm:p-5">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-zinc-100">
                          Your next big idea
                        </p>
                        <p className="mt-1 truncate text-xs text-zinc-500">
                          example.com/projects/your-next-big-idea
                        </p>
                      </div>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 shrink-0 text-zinc-500"
                      />
                    </div>
                    <div className="mt-4 flex items-center gap-2 border-t border-zinc-800 pt-3">
                      <Link2
                        aria-hidden="true"
                        className="size-3.5 text-zinc-400"
                      />
                      <span className="truncate text-sm text-zinc-300">
                        short.link/idea
                      </span>
                    </div>
                  </div>
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-medium text-zinc-100">
                          Product updates
                        </p>
                        <p className="mt-1 truncate text-xs text-zinc-500">
                          example.com/news/product-updates
                        </p>
                      </div>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 shrink-0 text-zinc-500"
                      />
                    </div>
                    <div className="mt-4 flex items-center gap-2 border-t border-zinc-800 pt-3">
                      <Link2
                        aria-hidden="true"
                        className="size-3.5 text-zinc-400"
                      />
                      <span className="truncate text-sm text-zinc-300">
                        short.link/updates
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 border-t border-zinc-800 bg-zinc-900/40 px-5 py-3 text-xs text-zinc-500">
                  <ShieldCheck aria-hidden="true" className="size-3.5" />
                  Your workspace is protected
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="mx-auto max-w-7xl scroll-mt-12 px-6 py-20 sm:py-24"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-zinc-400">MADE TO BE SIMPLE</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Everything your links need.
            </h2>
            <p className="mt-4 leading-7 text-zinc-400">
              A straightforward toolkit for creating and keeping track of the
              links you share.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <span className="flex size-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">
                <Link2 aria-hidden="true" className="size-5 text-zinc-200" />
              </span>
              <h3 className="mt-5 text-lg font-medium text-zinc-100">
                Shorten and share
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Make long URLs easier to share with clean, compact short links.
              </p>
            </article>
            <article className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <span className="flex size-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">
                <LayoutDashboard
                  aria-hidden="true"
                  className="size-5 text-zinc-200"
                />
              </span>
              <h3 className="mt-5 text-lg font-medium text-zinc-100">
                Stay organized
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Keep your links together in a personal dashboard that is easy
                to come back to.
              </p>
            </article>
            <article className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <span className="flex size-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900">
                <ShieldCheck
                  aria-hidden="true"
                  className="size-5 text-zinc-200"
                />
              </span>
              <h3 className="mt-5 text-lg font-medium text-zinc-100">
                Access securely
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                Sign in to manage your links in a private, protected
                workspace.
              </p>
            </article>
          </div>
        </section>

        <section
          id="how-it-works"
          className="border-y border-zinc-800/80 bg-zinc-950/60"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:py-20 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="text-sm font-medium text-zinc-400">GET STARTED</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                Simple from the first click.
              </h2>
            </div>
            <ol className="grid gap-6 sm:grid-cols-3">
              <li>
                <span className="text-sm font-medium text-zinc-500">01</span>
                <h3 className="mt-2 font-medium text-zinc-100">
                  Create an account
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Sign up securely to get started.
                </p>
              </li>
              <li>
                <span className="text-sm font-medium text-zinc-500">02</span>
                <h3 className="mt-2 font-medium text-zinc-100">
                  Shorten a URL
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Turn a long address into a shareable short link.
                </p>
              </li>
              <li>
                <span className="text-sm font-medium text-zinc-500">03</span>
                <h3 className="mt-2 font-medium text-zinc-100">
                  Keep it close
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Find and manage your links from your dashboard.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-8 sm:p-10 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Ready to tidy up your links?
              </h2>
              <p className="mt-3 text-zinc-400">
                Create an account and keep your links in one place.
              </p>
            </div>
            <SignUpButton mode="modal">
              <Button size="lg" className="h-11 px-5">
                Get started
                <ArrowRight aria-hidden="true" />
              </Button>
            </SignUpButton>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-medium text-zinc-300">LinkShortener</span>
          <span>Short links, all in one place.</span>
        </div>
      </footer>
    </div>
  );
}
