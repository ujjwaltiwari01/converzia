# Converzia Landing Page

![Converzia Logo](public/converzia-logo.png)

A modern, animated landing page for Converzia - an AI-powered sales outreach platform that crafts personalized emails at scale.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/shiva933626-7336s-projects/converzia)

## 🌟 Features

- **Interactive UI**: Smooth animations and transitions using Framer Motion
- **Responsive Design**: Fully responsive across all device sizes
- **Modern Aesthetics**: Gradient backgrounds, glassmorphism, and neural mesh animations
- **Performance Optimized**: Lazy-loaded components and optimized animations
- **Calendly Integration**: Direct booking functionality
- **Interactive Mouse Follower**: Custom cursor effects

## 🚀 Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Effects**: React Three Fiber (optional)
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Typography**: Space Grotesk font

## 📋 Installation

Follow these steps to get the project running on your local machine:

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Step 1: Clone the repository

\`\`\`bash
git clone https://github.com/yourusername/converzia-landing.git
cd converzia-landing
\`\`\`

### Step 2: Install dependencies

\`\`\`bash
npm install
# or
yarn install
\`\`\`

### Step 3: Run the development server

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

### Step 4: Open in browser

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🔧 Configuration

### Calendly Integration

To update the Calendly link, modify the following files:

1. `components/calendly-badge.tsx`
2. `components/cta-section.tsx`
3. `components/navigation.tsx`

Replace the URL `https://calendly.com/ujjwal-it2023-24-recabn/15min` with your own Calendly link.

### Content Customization

Most of the content can be modified directly in the component files:

- **Hero Section**: Edit `components/hero-section.tsx`
- **Features**: Edit `components/feature-section.tsx`
- **How It Works**: Edit `components/ai-funnel-section.tsx`
- **Use Cases**: Edit `components/use-cases-section.tsx`
- **Testimonials**: Edit `components/testimonial-section.tsx`
- **CTA Section**: Edit `components/cta-section.tsx`

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in:

- `tailwind.config.ts`: For theme configuration
- `app/globals.css`: For global styles and CSS variables

## 📱 Performance Optimizations

The project includes several performance optimizations:

- Dynamic imports for heavy components
- Suspense boundaries for better loading experience
- Optimized animations with reduced motion support
- Efficient scroll listeners using requestAnimationFrame
- Image optimization

## 🚢 Deployment

### Deploy on Vercel

The easiest way to deploy this application is to use the [Vercel Platform](https://vercel.com).

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build settings

### Other Deployment Options

You can also deploy this application to any platform that supports Next.js:

1. Build the application:
   \`\`\`bash
   npm run build
   # or
   yarn build
   \`\`\`

2. Start the production server:
   \`\`\`bash
   npm start
   # or
   yarn start
   \`\`\`

## 🎨 Customization Tips

### Adding New Sections

To add a new section:

1. Create a new component in the `components` folder
2. Import and add it to `components/client-wrapper.tsx`
3. Add any necessary styles and animations

### Changing Colors

The main color scheme can be modified in `app/globals.css` by updating the CSS variables in the `:root` selector.

### Replacing Images

Replace the images in the `public` folder with your own. Make sure to maintain the same filenames or update the references in the code.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspiration from modern SaaS landing pages
- Icons from [Lucide React](https://lucide.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)

---

Created with ❤️ by [Your Name]
