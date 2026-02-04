# Kevin Rincón - Portfolio 🚀

A modern, high-performance portfolio website built with **TypeScript**, **Web Components**, and **Vite**. Features bilingual support (English/Spanish), responsive design, and optimized SEO.

**Live:** [kevvek.xyz](https://kevvek.xyz)

---

## ✨ Features 👌

- **🌐 Bilingual** - Seamless English/Spanish language switching
- **⚡ High Performance** - Built with Vite for fast load times
- **📱 Responsive** - Mobile-first design that looks great on all devices
- **🔍 SEO Optimized** - Complete meta tags, Open Graph, Twitter Card, sitemap.xml, robots.txt
- **🎨 Modern Design** - Clean, professional UI with smooth animations
- **🧩 Web Components** - Custom elements (ProjectCard, ExperienceRow)
- **💾 Local Storage** - Remembers language preference
- **📊 Structured Data** - Ready for JSON-LD schema markup

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **TypeScript** | ~5.9.3 | Type-safe JavaScript |
| **Vite** | ^7.2.2 | Build tool & dev server |
| **Web Components** | Native API | Custom UI elements |
| **CSS** | Vanilla | Styling with modern features |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── robots.txt           # SEO: Search engine directives
│   ├── sitemap.xml          # SEO: URL map with hreflang
│   ├── *.pdf                # CV files (EN/ES)
│   └── *.png                # Project thumbnails
├── src/
│   ├── main.ts              # Entry point & language management
│   ├── style.css            # Global styles
│   ├── components/
│   │   ├── ProjectCard.ts   # Project display component
│   │   └── ExperienceRow.ts # Experience display component
│   ├── data/
│   │   └── portfolio.ts     # Projects & experience data
│   ├── i18n/
│   │   └── translations.ts  # English/Spanish translations
│   └── types/
│       └── custom-elements.d.ts # TypeScript definitions
├── index.html               # HTML entry point with SEO tags
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration (if exists)
├── package.json             # Project dependencies
└── README.md                # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ or **Bun** 1.0+
- **npm**, **yarn**, **pnpm**, or **bun** package manager

### Installation

```bash
# Clone or download the project
cd portfolio

# Install dependencies
npm install
# or
bun install
```

### Development

```bash
# Start development server
npm run dev
# or
bun run dev
```

The site will be available at `http://localhost:5173` (or similar port)

### Build for Production

```bash
# Build and optimize
npm run build
# or
bun run build
```

Output will be in the `dist/` directory.

### Preview Production Build

```bash
# Preview the production build locally
npm run preview
# or
bun run preview
```

---

## 📝 Content Management

### Projects
Edit projects in [src/data/portfolio.ts](src/data/portfolio.ts):

```typescript
export const projectsData = [
  {
    title: "Project Name",
    year: "2026",
    description: "Project description...",
    tech: ["Tech1", "Tech2"],
    thumbnail: "/image.png",
    href: "https://project-url.com"
  },
  // ... more projects
]
```

### Experience
Edit experience in [src/data/portfolio.ts](src/data/portfolio.ts):

```typescript
export const experienceData = [
  {
    role: "Job Title",
    company: "Company Name",
    period: "2025 - Present",
    description: "Description...",
    tech: ["Tech1", "Tech2"]
  },
  // ... more positions
]
```

### Translations
Edit translations in [src/i18n/translations.ts](src/i18n/translations.ts):

```typescript
export const translations: Record<Language, Record<string, string>> = {
  en: {
    role: "Your role",
    navWorks: "Selected Works",
    // ... more translations
  },
  es: {
    role: "Tu rol",
    navWorks: "Trabajos",
    // ... more translations
  },
}
```

---

## 🔍 SEO Configuration

### Files Included
- **[robots.txt](public/robots.txt)** - Search engine indexing rules
- **[sitemap.xml](public/sitemap.xml)** - XML sitemap with language alternates (hreflang)
- **[index.html](index.html)** - Complete meta tags (Open Graph, Twitter Card, etc.)

### Update URLs
Replace `https://kevvek.xyz` with your domain in:
- [index.html](index.html#L20) - `og:url` meta tag
- [public/robots.txt](public/robots.txt#L6)
- [public/sitemap.xml](public/sitemap.xml#L5)

### Dynamic Meta Tags
When users switch languages, the following update automatically:
- Page title
- Meta description
- Open Graph tags
- Twitter Card tags

See [src/main.ts](src/main.ts) for implementation.

---

## 📱 Web Components

### ProjectCard
Displays individual project information.

```html
<project-card></project-card>
```

**Data Structure:**
```typescript
{
  title: string;
  year: string;
  description: string;
  tech: string[];
  thumbnail: string;
  href: string;
}
```

### ExperienceRow
Displays job experience.

```html
<experience-row></experience-row>
```

**Data Structure:**
```typescript
{
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}
```

---

## 🌍 Multilingual Support

The portfolio automatically supports English and Spanish:

1. **Language Toggle** - Buttons in the header (EN/ES)
2. **Browser Storage** - Preference saved in localStorage
3. **Auto-Load** - Previously selected language loads on return visit
4. **SEO Ready** - hreflang tags in sitemap.xml for search engines

---

## 🎨 Customization

### Change Colors/Fonts
Edit [src/style.css](src/style.css) for global styles.

### Add New Sections
1. Add HTML structure to [index.html](index.html)
2. Create web component if needed in [src/components/](src/components/)
3. Add TypeScript logic to [src/main.ts](src/main.ts)

### Add New Language
1. Add language type to [src/i18n/translations.ts](src/i18n/translations.ts):
   ```typescript
   export type Language = "en" | "es" | "fr" // Add "fr"
   ```
2. Add translations for new language
3. Add language button to [index.html](index.html)

---

## 📊 Performance Tips

- **Images** - Optimize thumbnails to <100KB
- **Build** - Use `npm run build` for production
- **Lazy Loading** - Consider adding for below-the-fold content
- **CDN** - Deploy to Vercel, Netlify, or Cloudflare Pages

---

## 🚀 Deployment

### Recommended Platforms

#### Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

#### GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch
```

#### Self-Hosted
```bash
npm run build
# Deploy dist/ directory to your server
```

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and customize for your own use.

---

## 📄 License

This project is personal. Feel free to use as a template for your own portfolio.

---

## 📧 Contact

- **Email** - kevrj21@gmail.com
- **LinkedIn** - [linkedin.com/in/kevinrincon](https://linkedin.com/in/kevinrincon)
- **GitHub** - [github.com/kerpooo](https://github.com/kerpooo)
- **Website** - [kevvek.xyz](https://kevvek.xyz)

---

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with vanilla CSS
- Web Components API
- Modern JavaScript (TypeScript)

---

**Last Updated:** February 3, 2026
