# Next.js Portfolio

Modern, full-featured portfolio website built with Next.js 15, TypeScript, andTailwind CSS.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Animations:** Custom CSS animations with smooth easing

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with Navbar & Footer
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles & design system
├── components/            # React components
│   ├── ui/               # Base UI components (Button, etc.)
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer component
│   ├── Section.tsx       # Section wrapper
│   ├── SectionHeading.tsx # Section headings
│   ├── ProjectCard.tsx   # Project cards
│   ├── SocialLinks.tsx   # Social media links
│   └── AnimatedCounter.tsx # Counter animation
├── hooks/                # Custom React hooks
│   └── use-appearance.tsx # Dark mode hook
└── lib/                  # Utilities & constants
    ├── utils.ts          # Helper functions
    └── constants.ts      # Portfolio data

```

## 🎨 Design System

### Colors
- **Primary:** Vibrant Purple (`hsl(270 70% 50%)`)
- **Secondary:** Electric Blue (`hsl(220 70% 55%)`)
- **Accent:** Pink/Magenta (`hsl(330 70% 60%)`)
- Full dark mode support

### Custom Features
- Gradient text effects
- Glassmorphism components
- Smooth animations (fadeIn, scaleIn, slideIn)
- Hover lift effects
- Custom keyframe animations

## 🛠️ Development

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

## 📝 Content Management

All portfolio content is managed through `lib/constants.ts`:
- Personal information
- Projects
- Skills
- Social links
- Statistics

## 🌐 Deployment

Optimized for deployment on Vercel:
```bash
npm run build
```

## 📄 License

© 2024 Muhamad Dikri. All rights reserved.
