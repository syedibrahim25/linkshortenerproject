import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen flex-col bg-black font-sans text-zinc-50">
      <header className="flex items-center justify-between border-b border-zinc-800 bg-black/40 px-6 py-4 backdrop-blur-sm">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            LinkShortener
          </p>
        </div>

        <Suspense fallback={<div className="h-10 w-24 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />}>
          <Show when="signed-out">
            <div className="flex items-center gap-3">
              <SignInButton mode="modal">
                <Button variant="outline" size="sm">
                  Sign in
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button variant="secondary" size="sm">
                  Sign up
                </Button>
              </SignUpButton>
            </div>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </Suspense>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="w-full max-w-3xl rounded-2xl border border-zinc-800 bg-zinc-950 p-8 shadow-sm sm:p-12">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Secure links
          </p>
          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-zinc-50 sm:text-5xl">
            Create short links with a secure, polished sign-in flow.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300">
            This app is now protected by Clerk. Sign in or sign up to access your dashboard and keep your links under control.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <SignUpButton mode="modal">
              <Button variant="secondary" size="lg">
                Create account
              </Button>
            </SignUpButton>
            <SignInButton mode="modal">
              <Button variant="outline" size="lg">
                Sign in
              </Button>
            </SignInButton>
          </div>
        </div>
      </main>
    </div>
  );
}
