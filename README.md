# Kaspar Digital - Professional Portfolio Website

A modern, professional portfolio website built with Nuxt.js featuring a clean light theme design. Perfect for showcasing software development work, mobile applications, and professional services.

## Features

- ✨ Modern, clean design with light color scheme
- 📱 Fully responsive across all devices
- 🎨 Professional UI/UX with smooth animations
- 🚀 Built with Nuxt.js 3 for optimal performance
- 🎯 SEO optimized with proper meta tags
- 📧 Contact form integration ready
- 🐍 Dedicated support page for Snake MODERN app
- 💼 Portfolio section for showcasing apps and projects

## Tech Stack

- **Framework**: Nuxt.js 3
- **Frontend**: Vue 3 (Composition API)
- **Styling**: Custom CSS with modern design system
- **Fonts**: Google Fonts (Outfit)
- **Icons**: Emoji-based for lightweight loading

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:3000`

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Generate static site**
   ```bash
   npm run generate
   ```

## Project Structure

```
kaspardigital/
├── app.vue                      # Main application file
├── components/
│   └── ProjectCard.vue          # Reusable project card (type badge, Support, Privacy buttons)
├── data/
│   └── projects/
│       ├── types.ts             # Project type definitions (ProjectType, Project interface)
│       ├── index.ts             # Exports all projects (add new imports here)
│       ├── snake-modern.ts      # Snake MODERN project config
│       └── _template.ts         # Template to copy for new projects
├── public/
│   ├── support/
│   │   ├── snake-modern.html    # Snake MODERN support & FAQ page
│   │   └── _template-support.html  # Template for new support pages
│   └── privacy/
│       ├── snake-modern.html    # Snake MODERN privacy policy
│       └── _template-privacy.html  # Template for new privacy pages
├── nuxt.config.ts
├── package.json
└── README.md
```

## Customization

### Update Personal Information

Edit `app.vue` and update:

- **Company/Personal Name**: Change "Kaspar Digital" throughout
- **Email**: Update `support@kaspardigital.com`
- **Social Links**: Update GitHub, LinkedIn, Twitter URLs
- **Apps**: Modify the apps section with your actual applications
- **Services**: Customize the services you offer
- **Stats**: Update experience years, projects, downloads

### Color Scheme

The color scheme is defined in CSS variables in `app.vue`:

```css
:root {
  --primary: #2563eb;      /* Main brand color */
  --primary-dark: #1e40af; /* Darker shade */
  --secondary: #8b5cf6;    /* Secondary accent */
  --accent: #10b981;       /* Success/accent color */
  --text-dark: #1e293b;    /* Primary text */
  --text-light: #64748b;   /* Secondary text */
}
```

### Typography

The site uses **Outfit** font family. To change:

1. Update the Google Fonts import in `app.vue`
2. Update `font-family: 'Outfit', sans-serif;` throughout

### How to Add New Projects

The portfolio uses a **modular project system**. Each project has its own config file and dedicated Support + Privacy pages. Adding a new project is a simple 4-step process:

#### Step 1: Create the project config file

```bash
cp data/projects/_template.ts data/projects/my-project-id.ts
```

Edit `data/projects/my-project-id.ts`:

```ts
import type { Project } from './types'

export const myProject: Project = {
  id: 'my-project-id',        // lowercase, use hyphens (used in URLs)
  title: 'My Project Name',
  description: 'Brief description of your project...',
  type: 'mobile',             // 'mobile' | 'web'
  icon: '🌐',                 // emoji for the card
  tags: ['Vue.js', 'Node.js'],
  primaryAction: {
    label: 'Live Demo',       // "App Store" | "Play Store" | "Live Demo" | "View Project"
    url: 'https://example.com',
  },
}
```

#### Step 2: Register the project

Edit `data/projects/index.ts`:

```ts
import type { Project } from './types'
import { snakeModern } from './snake-modern'
import { myProject } from './my-project-id'   // Add import

export const projects: Project[] = [
  snakeModern,
  myProject,   // Add to array
]
```

#### Step 3: Create Support page

```bash
cp public/support/_template-support.html public/support/my-project-id.html
```

Edit `public/support/my-project-id.html` and replace:
- `PROJECT_NAME` → Your project display name
- `PROJECT_ICON` → Emoji for the project
- `project-id` → Your project id (in footer links and hrefs)

Customize the FAQ content and contact info.

#### Step 4: Create Privacy Policy page

```bash
cp public/privacy/_template-privacy.html public/privacy/my-project-id.html
```

Edit `public/privacy/my-project-id.html` and replace:
- `PROJECT_NAME` → Your project display name
- `PROJECT_ICON` → Emoji for the project
- `project-id` → Your project id

Customize the privacy policy content for your project.

---

**That's it!** Your new project will automatically appear in the portfolio with:
- Type badge (Mobile or Web)
- Support button → links to `/support/my-project-id.html`
- Privacy button → links to `/privacy/my-project-id.html`
- Primary action (App Store, Live Demo, etc.)

## Deployment

### Static Hosting (Recommended)

1. Generate static files:
   ```bash
   npm run generate
   ```

2. Deploy the `.output/public` folder to:
   - **Netlify**: Drag and drop or connect Git repo
   - **Vercel**: Import project and auto-deploy
   - **GitHub Pages**: Push to `gh-pages` branch
   - **Cloudflare Pages**: Connect repo and deploy

### Server-Side Rendering

For SSR deployment:

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy to platforms supporting Node.js:
   - Vercel
   - Netlify
   - Railway
   - DigitalOcean App Platform

## Support & Privacy Pages

Each project has its own **Support** and **Privacy** pages:

- **Support** (`/support/{project-id}.html`) – Users can report problems, get help, view FAQs
- **Privacy** (`/privacy/{project-id}.html`) – Project-specific privacy rules

Templates are provided at `public/support/_template-support.html` and `public/privacy/_template-privacy.html`. Copy and customize for each new project (see "How to Add New Projects" above).

## SEO Optimization

The site includes:
- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt texts for images (add when using images)
- Fast loading times
- Mobile-first responsive design

## Performance Tips

- Images: Use WebP format and lazy loading when adding images
- Fonts: Currently using system fonts + Google Fonts (optimized)
- Code splitting: Nuxt handles this automatically
- Caching: Configure in `nuxt.config.ts` for production

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This is a personal portfolio template. Feel free to:
- Fork and customize for your own use
- Submit issues for bugs
- Suggest improvements

## License

This project is available for personal and commercial use.

## Contact

For questions or support:
- Email: support@kaspardigital.com
- Create an issue in this repository

## Acknowledgments

- Built with [Nuxt.js](https://nuxt.com/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Design inspired by modern SaaS and tech portfolios

---

**Ready to launch your professional portfolio? Start customizing!** 🚀
