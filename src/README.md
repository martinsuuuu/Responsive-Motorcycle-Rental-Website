# CM Motorcycle Rental - Premium Motorcycle Rental Website

A modern, responsive website for a motorcycle rental business built with React, TypeScript, and Tailwind CSS.

## Features

- 🏍️ **Modern Design**: Clean, adventurous design that builds trust
- 📱 **Fully Responsive**: Perfect experience on all devices
- ⚡ **Fast Performance**: Built with Vite for optimal loading speeds
- 🎨 **Tailwind CSS v4**: Latest styling with custom design system
- 🔧 **TypeScript**: Full type safety throughout the application
- 📸 **Dynamic Images**: Integration with Unsplash for high-quality photos

## Sections

- **Hero Section**: Compelling call-to-action with scenic background
- **Fleet Showcase**: Detailed motorcycle listings with specifications
- **Services**: Trust-building features and rental process
- **About & Testimonials**: Company credibility and social proof
- **Contact Form**: Easy booking and inquiry system
- **Footer**: Complete contact information and links

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS v4
- **Build Tool**: Vite
- **Icons**: Lucide React
- **UI Components**: Custom shadcn/ui components
- **Deployment**: Vercel

## Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd CM Motorcycle Rental
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect the settings
   - Click "Deploy"

3. **Custom Domain (Optional)**
   - Add your custom domain in Vercel dashboard
   - Configure DNS settings as instructed

### Manual Deployment

```bash
# Build the project
npm run build

# Preview the build locally
npm run preview
```

## Customization

### Brand Colors
Update the color palette in `/styles/globals.css`:
- Primary: Currently set to dark navy
- Accent: Yellow (#f59e0b) for CTAs and highlights

### Content
- Update motorcycle fleet in `/components/Fleet.tsx`
- Modify contact information in `/components/Contact.tsx` and `/components/Footer.tsx`
- Replace placeholder text throughout components

### Images
- Replace Unsplash images with your own motorcycle photos
- Update the motorcycle icon in `/public/motorcycle-icon.svg`

## Project Structure

```
├── components/
│   ├── ui/              # Reusable UI components
│   ├── Header.tsx       # Navigation component
│   ├── Hero.tsx         # Main hero section
│   ├── Fleet.tsx        # Motorcycle showcase
│   ├── Services.tsx     # Services and process
│   ├── About.tsx        # About and testimonials
│   ├── Contact.tsx      # Contact form and info
│   └── Footer.tsx       # Footer component
├── styles/
│   └── globals.css      # Global styles and theme
├── public/              # Static assets
├── App.tsx              # Main application component
└── main.tsx             # Application entry point
```

## Performance Features

- ⚡ Vite for fast builds and HMR
- 🖼️ Optimized image loading with fallbacks
- 📦 Code splitting and tree shaking
- 🎯 Semantic HTML for accessibility
- 🔍 SEO-optimized meta tags

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own motorcycle rental business!

## Support

For questions or support, please open an issue on GitHub.