# Project Setup Guide

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

Copy the example environment file:

```bash
cp .env.example .env.local
```

### 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Create optimized production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality checks |
| `npm run type-check` | Run TypeScript compiler without emitting files |
| `npm run format` | Format code using Prettier |
| `npm run clean` | Remove .next and node_modules directories |

## Project Architecture

### Directory Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with global providers
│   ├── page.tsx           # Home page
│   ├── not-found.tsx      # Custom 404 page
│   └── globals.css        # Global styles and Tailwind imports
│
├── components/
│   ├── layout/            # Layout components
│   │   ├── Navbar.tsx     # Main navigation
│   │   └── Footer.tsx     # Site footer
│   │
│   ├── sections/          # Page sections (modular)
│   │   ├── Section0.tsx   # Hero section
│   │   ├── Section1.tsx   # Features section
│   │   └── ...            # Additional sections
│   │
│   └── ui/                # Reusable UI components
│       ├── button.tsx     # Button component
│       ├── input.tsx      # Input component
│       ├── card.tsx       # Card component
│       └── ...            # Other UI primitives
│
├── config/
│   └── theme.ts           # Theme configuration
│
├── constants/
│   └── index.ts           # Application constants
│
├── hooks/
│   └── useScrollAnimation.ts  # Custom React hooks
│
├── lib/
│   ├── animations.ts      # Framer Motion animation variants
│   └── utils.ts           # Utility functions
│
├── public/                # Static assets
│   ├── *.png              # Images
│   └── *.svg              # SVG icons
│
└── types/                 # TypeScript type definitions
```

### Key Technologies

- **Next.js 16**: React framework with App Router
- **React 19**: Latest React with concurrent features
- **TypeScript 5**: Type-safe development
- **Tailwind CSS 4**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **GSAP**: Advanced animations
- **Radix UI**: Accessible component primitives

## Development Guidelines

### Component Structure

Components follow this pattern:

```typescript
"use client"; // Only if using client-side features

import { useState } from "react";
import { motion } from "framer-motion";

export default function ComponentName() {
  const [state, setState] = useState();

  return (
    <section>
      {/* Component JSX */}
    </section>
  );
}
```

### Styling Conventions

- Use Tailwind CSS utility classes
- Responsive design: mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Custom colors defined in globals.css

### Animation Patterns

1. **Scroll-based animations**: Use `useInView` from Framer Motion
2. **Entrance animations**: Use `initial` and `animate` props
3. **Hover effects**: Use CSS transitions or Framer Motion

### Type Safety

- All components are typed with TypeScript
- Props interfaces defined inline or in separate types
- Strict mode enabled in tsconfig.json

## Building for Production

### Create Production Build

```bash
npm run build
```

This creates an optimized build in the `.next` directory.

### Test Production Build Locally

```bash
npm run build
npm run start
```

### Performance Optimization

- Images optimized with Next.js Image component
- Code splitting automatic with App Router
- React Compiler enabled for better performance
- Font optimization with next/font

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Other Platforms

The project can be deployed to any platform supporting Node.js:

- Netlify
- AWS Amplify
- Railway
- Render
- DigitalOcean App Platform

### Environment Variables

Required for production:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=WebbyWolf
```

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Module Not Found

```bash
# Clear cache and reinstall
npm run clean
npm install
```

### Type Errors

```bash
# Run type check
npm run type-check
```

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## Code Quality

### Linting

```bash
npm run lint
```

### Formatting

```bash
npm run format
```

### Pre-commit Hooks (Optional)

Install Husky for automated checks:

```bash
npm install -D husky lint-staged
npx husky init
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Metrics

Target metrics:

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## Support

For issues or questions, refer to the project documentation or create an issue in the repository.
