# UI Standards

This project uses shadcn/ui as the only UI library. Do not create custom component primitives, ad hoc UI patterns, or hand-rolled replacements for shadcn components.

## Required Rules

- Use shadcn/ui components for all interface elements, including buttons, inputs, cards, dialogs, forms, tables, and navigation.
- Prefer existing shadcn primitives in `components/ui/` and compose them instead of writing new component files.
- Do not create custom React components for basic UI building blocks. If a needed pattern is missing, extend the app with a shadcn component or reuse an existing one rather than inventing a new component.
- Keep styling in Tailwind utility classes and follow the project’s neutral, polished design language.
- Maintain accessible markup, clear focus states, and semantic structure for all user-facing elements.
- Reuse the current app patterns before introducing variations.

## Review Checklist

Before finalizing UI work, confirm:

- No custom UI components were created for standard app elements.
- All relevant elements use shadcn/ui or existing project primitives.
- Tailwind is used for layout and styling instead of custom CSS.
- The UI remains consistent with the existing grayscale, minimal visual system.
