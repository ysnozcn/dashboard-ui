# Dashboard UI

A modern dashboard interface built with Next.js, featuring authentication, responsive design, and a clean user interface.

![Dashboard Screenshot](/public/dashboard-home.png)

## Technologies Used

- **Next.js 15** - React framework for building web applications
- **React 19** - JavaScript library for building user interfaces
- **Next Auth** - Authentication solution for Next.js applications
- **Shadcn UI** - High-quality UI components built with Radix UI and Tailwind CSS
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Typed JavaScript for better developer experience

## Features

- Modern and responsive dashboard layout
- Authentication system with Next Auth
- Dark/Light theme support
- Team switching functionality
- Navigation sidebar with collapsible sections
- Search functionality
- User profile management

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

## Project Structure

- `src/app` - Next.js app router pages and layouts
- `src/components` - Reusable UI components
- `src/lib` - Utility functions and shared code
- `src/hooks` - Custom React hooks
- `src/types` - TypeScript type definitions

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key
```

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [Next Auth Documentation](https://next-auth.js.org/)
- [Shadcn UI Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
