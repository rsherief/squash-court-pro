# Squash Court Pro – Riyadh's Premier Squash Equipment Shop

A modern, responsive 3-page website for Squash Court Pro, showcasing premium squash equipment and accessories in Riyadh, Saudi Arabia.

## Pages

1. **Home** (`index.html`) – Landing page with hero section and value propositions
2. **Products** (`products.html`) – Product catalog with filtering by category (rackets, balls, shoes, accessories)
3. **About** (`about.html`) – Company story, values, team bios, and contact information

## Features

✨ **Design**
- Dark navy + bright cyan accent color scheme inspired by squash court aesthetics
- Light/dark theme toggle with localStorage persistence
- Fully responsive grid layouts
- Smooth hover animations and transitions

🎯 **Functionality**
- Product filtering by category (all, rackets, balls, shoes, accessories)
- Interactive "Add to Cart" buttons with visual feedback
- Theme persistence across sessions
- Accessible navigation across all pages

📱 **Responsive**
- Mobile-first design
- Adapts seamlessly from 320px to 4K displays
- Touch-friendly buttons and links

## Local Development

### Run Locally
```bash
cd /home/sheriefrafea/CluadeProjects/websites_audits/test_web_squash_market_riydah
python3 -m http.server 8000
```

Then visit: **http://localhost:8000**

### File Structure
```
.
├── index.html        (Home page)
├── products.html     (Product catalog)
├── about.html        (About & contact)
└── README.md         (This file)
```

## Deployment Options

### Option 1: Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

### Option 2: GitHub Pages
1. Push to GitHub repository
2. Enable Pages in repository settings
3. Deploy from `main` branch

### Option 3: Traditional Web Host
Copy all `.html` files to your web server's public directory (Apache, Nginx, etc.)

### Option 4: Static Site Hosting
Upload to Netlify, AWS S3, Google Cloud Storage, or similar services.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Colors
Edit CSS variables in the `<style>` section of any page:
```css
:root {
  --navy: #1a2540;      /* Primary color */
  --accent: #00d9ff;    /* Highlight color */
  --light: #f5f7fa;     /* Background */
  --dark-text: #0f1419; /* Text color */
}
```

### Content
- Update product listings in `products.html`
- Add team members in `about.html`
- Modify company info and contact details as needed

### Performance
- Total size: ~35KB (all pages combined)
- No external dependencies
- Fast load times on all connection speeds

## Contact

📍 Al-Olaya District, Riyadh, Saudi Arabia
📧 info@squashcourtpro.sa
📱 +966-1-1555-5555

---

Built with clean HTML, CSS, and JavaScript. No frameworks required.
