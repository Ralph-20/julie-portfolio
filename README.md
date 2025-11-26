# Julie Ralph, MHA - Portfolio Website

A professional portfolio website for Julie Ralph, a Healthcare Quality & Patient Safety Professional with 15+ years of experience.

## 🏥 About

This website showcases Julie's expertise in:
- Patient Safety & Zero Harm initiatives
- Quality Management Systems (QMS)
- Regulatory Readiness (CMS/DNV)
- Root Cause Analysis
- Epic EMR & Data Analysis

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Animations**: CSS animations with smooth scroll
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd julie-s-healthcare-portfolio-site

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
├── app/
│   ├── globals.css      # Global styles & CSS variables
│   ├── layout.tsx       # Root layout with SEO metadata
│   ├── page.tsx         # Main page component
│   └── sitemap.ts       # Dynamic sitemap generation
├── components/
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── focus-areas-section.tsx
│   ├── case-studies-section.tsx
│   ├── certifications-section.tsx
│   ├── contact-section.tsx
│   ├── navigation.tsx
│   └── ui/              # shadcn/ui components
├── public/
│   ├── images/          # Profile photo
│   ├── icon.svg         # Favicon (healthcare shield + heart)
│   ├── robots.txt       # Search engine crawling rules
│   └── *.pdf            # Resume download
└── lib/
    └── utils.ts         # Utility functions
```

## 🎨 Customization

### Colors

The site uses a professional teal/slate color palette defined in `app/globals.css`. Key CSS variables:

- `--primary`: Teal accent color
- `--background`: Dark slate background
- `--foreground`: Light text color

### Content

Update content in the respective component files:
- **Hero**: `components/hero-section.tsx`
- **About**: `components/about-section.tsx`
- **Focus Areas**: `components/focus-areas-section.tsx`
- **Case Studies**: `components/case-studies-section.tsx`
- **Certifications**: `components/certifications-section.tsx`
- **Contact**: `components/contact-section.tsx`

## 🔍 SEO

The site includes:
- Comprehensive meta tags (Open Graph, Twitter Cards)
- JSON-LD structured data (Person schema)
- Dynamic sitemap generation
- robots.txt for search engines
- Semantic HTML structure

## 📧 Contact

- **Email**: julieralph@comcast.net
- **LinkedIn**: [linkedin.com/in/jralph](https://www.linkedin.com/in/jralph/)
- **Location**: Plymouth, MN

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Set environment variable:
   - `NEXT_PUBLIC_SITE_URL`: Your production URL (e.g., `https://julieralph.com`)
4. Deploy!

The site will automatically deploy on every push to the main branch.

## 📄 License

Private - All rights reserved.


