const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const BASE_FILES = {
  // Essential config files
  'package.json': `{
  "name": "stayease-apartment-management",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "14.0.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "mongoose": "^8.0.3",
    "next-auth": "^4.24.5",
    "bcryptjs": "^2.4.3",
    "zod": "^3.22.4",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@types/bcryptjs": "^2.4.6",
    "autoprefixer": "^10.0.1",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5",
    "eslint": "^8",
    "eslint-config-next": "14.0.4"
  }
}`,

  'tsconfig.json': `{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}`,

  'next.config.js': `/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig`,

  'tailwind.config.ts': `import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config`,

  'postcss.config.js': `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`,

  '.env.example': `# Database
MONGODB_URI=mongodb://localhost:27017/stayease

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-change-this

# Cloudinary (optional)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=`,

  '.gitignore': `# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local
.env

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts`,

  'README.md': `# 🏠 StayEase - Apartment Management System

## 📋 Base Project

This is the foundational structure for the StayEase project.

## 👥 Team Structure

| Member | Branch | Responsibilities |
|--------|--------|------------------|
| A | \`feature/infrastructure\` | Database Models, Authentication, Security |
| B | \`feature/dashboard\` | Admin Dashboard, Analytics, Financial Reports |
| C | \`feature/payments\` | Payment System, Amenities Management |
| D | \`feature/management\` | User Management, Apartment CRUD |
| E | \`feature/ui\` | Homepage, Community, UI Components |

## 🚀 Getting Started

\`\`\`bash
# Install dependencies
npm install

# Setup environment
cp .env.example .env

# Run development server
npm run dev
\`\`\`

## 📖 Documentation

See individual branch README files for detailed feature documentation.

## 🔧 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Database:** MongoDB with Mongoose
- **Auth:** NextAuth.js v4
- **Styling:** Tailwind CSS
`,

  'app/layout.tsx': `import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'StayEase - Apartment Management System',
  description: 'Modern apartment management solution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}`,

  'app/page.tsx': `export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          🏠 StayEase
        </h1>
        <p className="text-xl text-gray-600">
          Apartment Management System
        </p>
        <p className="text-sm text-gray-500">
          Base project initialized. Team members can now work on their branches.
        </p>
      </div>
    </main>
  )
}`,

  'app/globals.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground-rgb: 0, 0, 0;
  --background-start-rgb: 214, 219, 220;
  --background-end-rgb: 255, 255, 255;
}

body {
  color: rgb(var(--foreground-rgb));
  background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb));
}`,

  'lib/utils.ts': `import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(amount)
}`,

  'types/index.ts': `// Base types for the application
export type UserRole = 'admin' | 'staff' | 'resident';

export interface BaseUser {
  _id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface BaseApartment {
  _id: string;
  number: string;
  floor: number;
  status: 'available' | 'occupied' | 'maintenance';
  createdAt: Date;
}`,
};

function createBaseProject() {
  console.log('🚀 Creating BASE PROJECT...\n');
  
  // Create directory structure
  const dirs = [
    'app',
    'lib',
    'components',
    'types',
    'public/images',
    'docs'
  ];
  
  dirs.forEach(dir => {
    const dirPath = path.join(process.cwd(), dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`📁 Created: ${dir}`);
    }
  });
  
  // Create files
  Object.entries(BASE_FILES).forEach(([filePath, content]) => {
    const fullPath = path.join(process.cwd(), filePath);
    const dir = path.dirname(fullPath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(fullPath, content);
    console.log(`✅ Created: ${filePath}`);
  });
  
  // Create .gitkeep for empty directories
  fs.writeFileSync('components/.gitkeep', '');
  fs.writeFileSync('public/images/.gitkeep', '');
  fs.writeFileSync('docs/.gitkeep', '');
  
  console.log('\n✨ BASE PROJECT created successfully!\n');
  console.log('📋 Next steps:');
  console.log('   1. Review the files');
  console.log('   2. git init');
  console.log('   3. git add .');
  console.log('   4. git commit -m "chore: initial base project setup"');
  console.log('   5. git branch -M main');
  console.log('   6. git remote add origin <your-repo-url>');
  console.log('   7. git push -u origin main');
  console.log('\n   Then run: node distribute-code.js');
}

// Run
createBaseProject();