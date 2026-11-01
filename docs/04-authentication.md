# Authentication Standards

This project uses Clerk as the only authentication provider. Do not introduce or rely on any other auth method, session system, or custom login flow.

## Required Rules

- Use Clerk for all sign-in, sign-up, and user session logic.
- Do not add alternative auth providers, custom JWT flows, or manual session handling.
- Treat the /dashboard page as a protected route.
- If a user is not signed in, redirect them away from /dashboard to the Clerk sign-in flow.
- If a user is already signed in and visits the homepage, redirect them to /dashboard.
- Sign in and sign up must always launch as modal flows using Clerk’s modal pattern.

## Implementation Expectations

- Keep auth checks in server-side route logic when possible.
- Use Clerk auth primitives and middleware patterns that match the app’s current Next.js App Router setup.
- Do not rely on client-only checks as the only protection for protected pages.
- Keep user state and sensitive auth data server-side and never expose tokens or secrets to the browser.
- Preserve the project’s minimal, polished UI style when rendering auth entry points.

## Review Checklist

Before finalizing auth-related work, confirm:

- No non-Clerk auth pattern was introduced.
- /dashboard is protected.
- Signed-in users are redirected from / to /dashboard.
- Clerk sign-in and sign-up launch in modal mode.
- Unauthorized access is handled cleanly and securely.
