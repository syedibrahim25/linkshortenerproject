# Project Overview

This project is a LinkShortener application built with Next.js and designed around a secure, modern auth flow. The current stack includes:

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS
- Clerk for authentication
- Drizzle ORM with Neon serverless database
- shadcn-style UI primitives

## Goal

The app should let users create short links, manage them, and access a protected dashboard with a polished sign-in/sign-up flow. The app is intentionally simple and production-minded: clear route structure, secure auth boundaries, and a maintainable database layer.

## Repository Structure

- `app/` – route pages, layouts, and top-level app behaviors.
- `components/` – reusable React components and UI primitives.
- `components/ui/` – low-level UI pieces aligned with shadcn patterns.
- `db/` – database schema and connection setup.
- `lib/` – utility functions, shared helpers, and app logic.
- `public/` – static assets.

## Architectural Expectations

### App Router First

This project uses the Next.js App Router. Prefer route-based organization and server-first code patterns. Do not add pages in the older Pages Router unless there is a clear and explicit reason.

### Authentication Boundaries

Clerk is the authentication layer. Auth-aware flows should be implemented with Clerk patterns already in use by the app. Keep authentication checks in server contexts when possible, and never expose private state or secrets to the client unless required by the framework.

### Database Pattern

Use Drizzle for schema and database access. Keep schema definitions in `db/schema.ts` and use typed query patterns. If a feature requires a database change, add or update the schema in the same change set and keep the naming consistent with the rest of the project.

### UI Pattern

The app currently uses a minimal, clean design with neutral grays, soft borders, and modern spacing. Preserve this visual language. Use Tailwind utility classes and the existing component structure instead of introducing ad hoc CSS conventions.

## Core Principles

- Keep the codebase easy to read and easy to reason about.
- Prefer explicit over implicit behavior.
- Favor small, single-purpose files and components.
- Keep server and client responsibilities separate.
- Maintain secure access boundaries for user-specific data.
- Preserve the current polished, minimal UI system.

## Non-Goals

Do not introduce heavy abstractions, state management libraries, or custom build systems unless the task explicitly requires them. Do not rewrite existing patterns just to align with a personal preference.
