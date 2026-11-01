# Agent Instructions for LinkShortenerProject

This repository is a Next.js 16 application for shortening and managing links with Clerk authentication and a Drizzle-backed database. All AI assistants working in this repository must follow the standards in this file and the supporting documents in the `/docs` directory.

## ⚠️ CRITICAL: READ DOCS FIRST

**BEFORE GENERATING ANY CODE, you MUST read the relevant individual instructions files in the `/docs` directory.** This is not optional. Every code generation task requires consulting the appropriate documentation first to ensure compliance with project standards, patterns, and conventions.

- [docs/01-project-overview.md](docs/01-project-overview.md)
- [docs/04-authentication.md](docs/04-authentication.md)
- [docs/05-ui-standards.md](docs/05-ui-standards.md)

Failure to read these docs before writing code will result in non-compliant implementations.

## Primary Rules

1. Follow the project architecture and conventions defined in the docs folder.
2. Prefer simple, explicit, production-ready code over clever abstractions.
3. Keep the app aligned with the Next.js App Router, TypeScript, Tailwind CSS, Clerk, and Drizzle patterns already used in the project.
4. Do not introduce unrelated frameworks, state libraries, or architecture changes unless the task explicitly requires them.
5. Keep edits scoped to the task and avoid broad refactors.
6. **Always read the relevant `/docs` files BEFORE writing any code.** No exceptions.

## Required Reading

The docs files contain critical project-specific patterns, conventions, and requirements. Consult them for every code generation task:

- [docs/01-project-overview.md](docs/01-project-overview.md)
- [docs/04-authentication.md](docs/04-authentication.md)
- [docs/05-ui-standards.md](docs/05-ui-standards.md)

## Repository Scope

- App entry points live under `app/`.
- Reusable UI should live under `components/`.
- Database schema and query logic should live under `db/`.
- Utility logic belongs under `lib/`.
- Shared UI primitives should follow the shadcn-style pattern in `components/ui/`.

## Expected Behavior for Agents

**DO NOT generate any code until you have read the relevant `/docs` files.** This is mandatory.

- Use TypeScript for all new code.
- Default to server components unless client-side interactivity is required.
- Use `use client` only when absolutely necessary.
- Maintain accessibility for all user-facing UI.
- Favor readable, maintainable code with clear naming and modest component size.
- Keep the design consistent with the current grayscale, polished UI style.
- Prefer Tailwind utility classes over custom CSS whenever possible.
- Keep environment variables server-side and never commit secrets.

## When in Doubt

If a requirement is unclear, prefer the least surprising implementation that matches the existing app structure and the guidance in the docs files above.

---

For detailed implementation standards, architecture rules, and review checklists, consult the docs folder.
