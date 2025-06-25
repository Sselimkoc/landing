# Modern Business Website Template

A professional, responsive website template designed for small businesses, consultants, and service providers. Built with modern web technologies and inspired by the Euveka design from Framer's gallery.

## 🚀 Features

### Design & UX
- **Modern Design**: Clean, professional layout with gradient accents
- **Fully Responsive**: Mobile-first approach with breakpoints for all devices
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Performance Optimized**: Fast loading with optimized assets

### Sections Included
- **Hero Section**: Eye-catching header with call-to-action
- **About Section**: Company information with animated statistics
- **Services Section**: 6 service cards with icons and descriptions
- **Testimonials**: Client feedback with author information
- **Contact Section**: Contact form and company details
- **Footer**: Comprehensive footer with links and social media

### Technical Features
- **SEO Optimized**: Meta tags, semantic structure, clean URLs
- **Cross-browser Compatible**: Works on all modern browsers
- **Modular CSS**: CSS custom properties for easy customization
- **Vanilla JavaScript**: No framework dependencies
- **Form Handling**: Contact form with validation and notifications

## 📁 File Structure

```
landing/
├── index.html          # Main HTML file
├── styles/
│   └── main.css        # All CSS styles
├── js/
│   └── main.js         # JavaScript functionality
└── README.md           # This documentation
```

## 🎨 Customization

### Colors
The template uses CSS custom properties for easy color customization. Edit the `:root` section in `main.css`:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --primary-dark: #4f46e5;       /* Darker shade */
    --accent-color: #06b6d4;       /* Accent color */
    --text-primary: #1e293b;       /* Main text color */
    --text-secondary: #64748b;     /* Secondary text color */
    /* ... more variables */
}
```

### Typography
The template uses Inter font family. To change fonts:

1. Update the Google Fonts link in `index.html`
2. Modify the `--font-family` variable in CSS

### Content
- **Company Information**: Update text content in `index.html`
- **Services**: Modify service cards in the services section
- **Contact Details**: Update contact information and form fields
- **Images**: Replace placeholder elements with actual images

### Logo
Replace the text logo with your own:
```html
<a href="#" class="logo">
    <img src="path/to/your/logo.png" alt="Your Company Name">
</a>
```

## 🛠️ Installation & Setup

### Basic Setup
1. Download all files to your web server
2. Open `index.html` in a web browser
3. Customize content and styling as needed

### Local Development
1. Clone or download the files
2. Open `index.html` in your browser
3. Use a local server for testing (recommended):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

### Production Deployment
1. Customize all content and branding
2. Optimize images and assets
3. Upload to your web hosting provider
4. Configure domain and SSL certificate

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🔧 JavaScript Features

### Interactive Elements
- **Mobile Menu**: Hamburger menu with smooth animations
- **Smooth Scrolling**: Navigation links scroll to sections
- **Scroll Animations**: Elements animate when scrolled into view
- **Counter Animation**: Statistics count up when visible
- **Form Handling**: Contact form with validation and notifications
- **Active Navigation**: Current section highlighting

### Performance Optimizations
- **Debounced Scroll Events**: Optimized scroll performance
- **Intersection Observer**: Efficient scroll animations
- **Lazy Loading**: Images load when needed

## 🎯 SEO Optimization

### Meta Tags
The template includes essential SEO meta tags:
- Title and description
- Open Graph tags for social sharing
- Viewport settings for mobile
- Character encoding

### Semantic HTML
- Proper heading hierarchy (H1-H6)
- Semantic section elements
- Alt text for images
- ARIA labels where needed

### Performance
- Optimized CSS and JavaScript
- Minimal external dependencies
- Fast loading times

## 🚀 Advanced Customization

### Adding New Sections
1. Create new section in HTML
2. Add corresponding CSS styles
3. Include in JavaScript animations if needed

### Custom Animations
Add new animations in CSS:
```css
@keyframes yourAnimation {
    from { /* starting state */ }
    to { /* ending state */ }
}

.your-element {
    animation: yourAnimation 1s ease-out;
}
```

### Form Integration
Replace the form handling in `main.js` with your preferred solution:
- Email service (SendGrid, Mailgun)
- Form service (Formspree, Netlify Forms)
- Custom backend integration

## 🌐 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Mobile browsers**: iOS Safari 14+, Chrome Mobile 90+

## 📄 License

This template is free to use for personal and commercial projects. Attribution is appreciated but not required.

## 🤝 Support

For customization help or questions:
1. Check the code comments for guidance
2. Review the CSS custom properties for styling
3. Test thoroughly across different devices and browsers

## 🎨 Design Inspiration

This template draws inspiration from the [Euveka website](https://www.framer.com/gallery/euveka) featured in Framer's gallery, adapting its modern design principles for a business website context.

## 📈 Performance Tips

1. **Optimize Images**: Use WebP format and appropriate sizes
2. **Minify Assets**: Compress CSS and JavaScript for production
3. **Use CDN**: Host fonts and icons on CDN for faster loading
4. **Enable Caching**: Configure server caching for static assets
5. **Monitor Performance**: Use tools like Lighthouse for optimization

---

**Ready to transform your business online presence?** This template provides everything you need to create a professional, modern website that converts visitors into customers. 