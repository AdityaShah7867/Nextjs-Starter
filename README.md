# Todo App

A single page Todo application built with Next.js, TanStack Query, and Zustand for state management.

## Features

- Add, toggle, and delete todos
- Filter todos by status (All, Active, Completed)
- Clear completed todos
- Persistent storage with localStorage
- Dark mode support
- Statistics page with todo metrics

## Technology Stack

- Next.js 15.3.0
- React 19
- TanStack Query for data fetching
- Zustand for state management
- Jest and React Testing Library for testing
- Tailwind CSS for styling

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:ci
```

## Automated Quality Checks

This project uses Husky to run automated quality checks:

- **Pre-push hook**: Runs all tests before allowing code to be pushed to the repository.
  If tests fail, the push will be aborted.
  
- **Pre-commit hook**: Runs linting before allowing code to be committed.
  If linting fails, the commit will be aborted.

## Code Structure

- `src/components` - React components
- `src/store` - Zustand store for state management
- `src/types` - TypeScript type definitions
- `src/hooks` - Custom React hooks
- `src/lib` - Utility functions and providers

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
