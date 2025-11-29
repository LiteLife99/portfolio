# Arnab Mukherjee - Portfolio Website

A modern, minimalist portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features a clean terminal-inspired aesthetic with excellent color balance.

## ✨ Features

### Design
- **Minimalist Terminal Theme**: Clean dark design with green accents
- **Balanced Colors**: Gray-scale text with strategic green highlights
- **Smooth Animations**: Subtle Framer Motion interactions
- **Fully Responsive**: Mobile-first design with slide-in menu
- **Optimized Performance**: Next.js 14 App Router

### Pages
- **Home** (`/`) - Hero section, featured project, and blog posts
- **Projects** (`/projects`) - Coming Soon
- **Experience** (`/experience`) - Coming Soon
- **Blog** (`/blog`) - Coming Soon
- **Contact** (`/contact`) - Coming Soon

### Features
- ✅ Sticky header with active route highlighting
- ✅ Clean, minimal footer
- ✅ Mobile-responsive navigation
- ✅ Loading states
- ✅ Proper Next.js 14 routing
- ✅ TypeScript throughout
- ✅ SEO-optimized with metadata
- ✅ Zustand state management

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
portfolio/
├── app/                          # Next.js 14 App Router
│   ├── blog/page.tsx            # Blog page (coming soon)
│   ├── contact/page.tsx         # Contact page (coming soon)
│   ├── experience/page.tsx      # Experience page (coming soon)
│   ├── projects/page.tsx        # Projects page (coming soon)
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── loading.tsx              # Loading UI
│   └── page.tsx                 # Home page
├── components/
│   ├── layout/                  # Layout components
│   │   ├── Header.tsx           # Sticky header with navigation
│   │   ├── Footer.tsx           # Minimal footer
│   │   └── MobileMenu.tsx       # Slide-in mobile menu
│   ├── sections/                # Page sections
│   │   ├── Hero.tsx             # ASCII art hero
│   │   ├── FeaturedProject.tsx  # Project showcase
│   │   └── LatestBlogPosts.tsx  # Blog posts grid
│   └── ComingSoon.tsx           # Coming soon component
├── store/
│   └── portfolioStore.ts        # Zustand store
└── public/                      # Static assets
```

## 🎨 Design Philosophy

### Color Balance
- **Background**: Dark (`#0a0f0d`) with subtle grid pattern
- **Primary Text**: Light gray (`#d1d5db`) for readability
- **Secondary Text**: Medium gray (`#9ca3af`) for hierarchy
- **Accents**: Terminal green (`#00ff41`) used sparingly
- **Borders**: Subtle green borders (`border-terminal-green/20`)

### Typography
- **Font**: JetBrains Mono (monospace)
- **Sizes**: Hierarchical and responsive
- **Weight**: Balanced use of regular and bold

### Spacing
- **Sections**: Generous padding (py-16 to py-24)
- **Components**: Consistent gaps (gap-4, gap-6, gap-8)
- **Container**: Max width of 7xl with auto margins

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **State**: Zustand
- **Font**: JetBrains Mono

## ✅ Best Practices Implemented

### Next.js 14
- ✅ App Router for file-based routing
- ✅ Server Components by default
- ✅ Client Components only where needed
- ✅ Metadata API for SEO
- ✅ Loading states
- ✅ Proper Link components with prefetching

### Performance
- ✅ Optimized animations (GPU-accelerated)
- ✅ Lazy loading with viewport triggers
- ✅ Minimal JavaScript bundle
- ✅ Next.js automatic code splitting

### Code Quality
- ✅ TypeScript strict mode
- ✅ ESLint configuration
- ✅ Component organization
- ✅ Reusable components
- ✅ Consistent naming conventions

## 📝 Customization

### Update Personal Information

**Hero Section** (`components/sections/Hero.tsx`):
```typescript
// Update your details
<p className="text-gray-400">
  <span className="text-gray-600">Name:</span> 
  <span className="text-gray-200">Your Name</span>
</p>
```

**Featured Project** (`components/sections/FeaturedProject.tsx`):
```typescript
// Update project details and stats
const stats = [
  { label: 'Your Metric', value: 'Value', icon: '🚀' },
]
```

**Blog Posts** (`components/sections/LatestBlogPosts.tsx`):
```typescript
// Update blog posts
const blogPosts: BlogPost[] = [
  {
    title: 'Your Post Title',
    description: 'Description',
    category: 'Category',
    readTime: 'X Minute Read',
  },
]
```

### Add Social Links

**Footer** (`components/layout/Footer.tsx`):
```typescript
const socialLinks = [
  { name: 'GitHub', href: 'YOUR_URL', icon: 'GitHub' },
  { name: 'LinkedIn', href: 'YOUR_URL', icon: 'LinkedIn' },
]
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Push to GitHub
git push origin main

# Deploy on Vercel
# Connect your repo at vercel.com
```

### Other Platforms
```bash
# Build the project
npm run build

# The output will be in .next/
```

## 📄 License

MIT License - feel free to use this template!

## 👨‍💻 Author

**Arnab Mukherjee**  
Senior Software Engineer | AI & Agents Specialist

---

Built with ❤️ using Next.js 14 and TypeScript
