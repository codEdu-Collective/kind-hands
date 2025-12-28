# Kind Hands

A modern, full-stack platform that connects donors and volunteers with important causes, making donations simple and effective. Built with Next.js 16, React 19, and TypeScript.

## 🚀 Technologies

### Core Stack

- **Next.js 16.1.0** - React framework with App Router
- **React 19.2.3** - UI library with React Compiler
- **TypeScript 5.9.3** - Type safety
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **Prisma 7.2.0** - Next-generation ORM
- **PostgreSQL** - Database

### Key Libraries

- **Radix UI** - Accessible component primitives
- **Zod 4.2.1** - Schema validation
- **Jose** - JWT authentication
- **@node-rs/bcrypt** - Password hashing
- **React Icons** - Icon library
- **class-variance-authority** - Component variants
- **tailwind-merge** - Merge Tailwind classes

### Development Tools

- **ESLint** - Code linting
- **TypeScript** - Type checking
- **@axe-core/react** - Accessibility testing
- **Turbopack** - Fast bundler

## 📁 Project Structure

```
kind-hands/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog listing and single post pages
│   │   └── [postID]/      # Dynamic blog post route
│   ├── causes/            # Causes listing and detail pages
│   │   └── [id]/          # Dynamic cause route
│   ├── contact/           # Contact page
│   ├── dashboard/         # User dashboard
│   ├── event/             # Events listing and detail pages
│   │   └── [eventID]/     # Dynamic event route
│   ├── faq/               # FAQ page
│   ├── licenses/          # Licenses page
│   ├── projects/          # Projects page
│   ├── register/          # User registration
│   ├── style-guide/       # Style guide page
│   ├── team/              # Team page
│   ├── volunteer/         # Volunteer application page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── actions/               # Server actions
│   └── create/
│       └── createUser.ts  # User creation action
├── components/            # Reusable React components
│   ├── about/            # About page components
│   ├── blog/             # Blog components
│   ├── causes/           # Causes components
│   ├── faq/              # FAQ components
│   ├── forms/            # Form components
│   ├── landing/          # Landing page sections
│   ├── layout/           # Layout components (Header, Footer, etc.)
│   ├── ui/               # UI primitives (Button, Input, etc.)
│   └── volunteer/        # Volunteer components
├── lib/                  # Helper functions and utilities
│   ├── definitions.ts    # Zod schemas
│   ├── prisma.ts         # Prisma client instance
│   ├── session.ts        # Session management (JWT)
│   └── utils.ts          # Utility functions
├── prisma/               # Database schema and migrations
│   ├── schema.prisma     # Prisma schema
│   └── migrations/       # Database migrations
├── public/               # Static files
│   ├── blog/            # Blog images
│   ├── brands/          # Brand logos
│   ├── events/          # Event images
│   ├── faq/             # FAQ images
│   ├── icons/           # Icon images
│   ├── images/          # General images
│   ├── licenses/        # License images
│   ├── projects/        # Project images
│   └── teams/           # Team images
├── types/               # TypeScript type definitions
│   └── types.ts
├── utils/               # Utility functions
│   ├── AxeTest.tsx      # Accessibility testing component
│   └── get/             # Data fetching utilities
│       ├── cause.ts
│       ├── event.ts
│       └── post.ts
└── scripts/             # Build and deployment scripts
```

## 🛠️ Installation

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- PostgreSQL database

### Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/kindhands"
POSTGRES_URL="postgresql://user:password@localhost:5432/kindhands"
PRISMA_DATABASE_URL="postgresql://user:password@localhost:5432/kindhands"

# JWT Secret (generate a strong random string)
SECRET="your-secret-key-here"
```

### Setup Steps

```bash
# Install dependencies
pnpm install

# Generate Prisma Client
pnpm prisma generate

# Run database migrations
pnpm prisma migrate dev

# (Optional) Seed the database
pnpm prisma db seed

# Start development server
pnpm dev
```

The application will be available at `http://localhost:3000`

## 📝 Available Scripts

- `pnpm dev` - Start development server with Turbopack (localhost:3000)
- `pnpm build` - Create optimized production build
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint to check code quality
- `pnpm fix` - Automatically fix ESLint errors
- `pnpm prisma generate` - Generate Prisma Client
- `pnpm prisma migrate dev` - Create and apply database migrations
- `pnpm prisma studio` - Open Prisma Studio (database GUI)

## 🎯 Features

### Core Functionality

- ✅ **User Authentication** - JWT-based session management
- ✅ **User Registration** - Secure user signup with password hashing
- ✅ **Dashboard** - User dashboard for authenticated users
- ✅ **Blog System** - Dynamic blog posts with featured articles
- ✅ **Events Management** - Event creation and listing
- ✅ **Causes** - Donation causes with progress tracking
- ✅ **Volunteer Applications** - Volunteer registration system
- ✅ **Projects** - Project showcase
- ✅ **Team** - Team member profiles

### User Experience

- ✅ **Dark Mode** - Theme toggle with localStorage persistence
- ✅ **Responsive Design** - Mobile-first, fully responsive layout
- ✅ **Accessibility** - WCAG compliant with @axe-core/react
- ✅ **Performance** - Optimized with React Compiler and Turbopack
- ✅ **SEO** - Server-side rendering with Next.js App Router

### Pages

- **Home** (`/`) - Landing page with hero, about, causes, events, testimonials
- **About** (`/about`) - About us page
- **Blog** (`/blog`) - Blog listing and individual posts
- **Causes** (`/causes`) - Causes listing and detail pages
- **Events** (`/event`) - Events listing and detail pages
- **Volunteer** (`/volunteer`) - Volunteer application form
- **Projects** (`/projects`) - Projects showcase
- **Team** (`/team`) - Team members
- **Contact** (`/contact`) - Contact page
- **FAQ** (`/faq`) - Frequently asked questions
- **Register** (`/register`) - User registration
- **Dashboard** (`/dashboard`) - User dashboard (protected)

## 🗄️ Database Schema

### Models

- **User** - User accounts with authentication
- **Event** - Events organized by users
- **Cause** - Donation causes with progress tracking
- **Volunteer** - Volunteer applications with status management
- **Post** - Blog posts with author relationship

### Volunteer Status

- `PENDING` - Awaiting review
- `APPROVED` - Application approved
- `REJECTED` - Application rejected
- `ARCHIVED` - Archived application

## 🎨 Styling

The project uses **Tailwind CSS v4** with a custom theme configuration:

- Custom color palette (primary, slate-ink, coral-red, etc.)
- Custom fonts (Geist, Inter, Shippori Mincho, Sue Ellen Francisco, Work Sans)
- Dark mode support with `data-theme` attribute
- Responsive breakpoints
- Custom spacing and radius scales

## 🔐 Authentication

The application uses JWT-based authentication with:

- Secure password hashing with bcrypt
- HTTP-only cookies for session management
- Server-side session verification
- Automatic redirects for protected routes

## 🚀 Deployment

### Build for Production

```bash
pnpm build
pnpm start
```

### Environment Setup

Ensure all environment variables are set in your production environment.

### Database

Run migrations in production:

```bash
pnpm prisma migrate deploy
```

## 📚 Development Guidelines

### Code Style

- TypeScript strict mode enabled
- ESLint with Next.js and Prettier configurations
- Import sorting with `eslint-plugin-simple-import-sort`

### Component Structure

- Server Components by default
- Client Components marked with `"use client"`
- Server Actions for form submissions

### Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Screen reader compatibility

## 🔗 Design Resources

- **Figma Design**: [Charity Webflow Website Template](https://www.figma.com/design/iqxy2O8lvap5cUEPhrzEDu/Charity-Webflow-Website-Template--Community---Copy---Community-?node-id=1-14&t=J4cTGW2ou1zYw0AY-0)

## 📄 License

See [LICENSE](./LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `pnpm lint` and `pnpm fix`
5. Submit a pull request

---

Built with ❤️ for connecting donors and volunteers with important causes.
