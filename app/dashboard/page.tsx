import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-black text-zinc-50">
      <header className="flex items-center justify-between border-b border-zinc-800 bg-black/40 px-6 py-4 backdrop-blur-sm">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            LinkShortener
          </p>
        </div>

        <UserButton />
      </header>

      <main className="px-6 py-10">
        <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
      </main>
    </div>
  );
}
