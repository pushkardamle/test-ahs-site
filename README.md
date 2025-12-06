# Allied Health Solutions Website

A modern, high-performance static website for Allied Health Solutions - Physical Therapy and Rehabilitation services in Northern Virginia.

## 🚀 Project Overview

This is a complete rebuild of the Allied Health Solutions WordPress site using modern HTML, CSS, and JavaScript. The site is designed to be:

- ⚡ **Fast Loading** - Optimized static files
- 📱 **Fully Responsive** - Mobile-first design
- ♿ **Accessible** - WCAG 2.1 compliant
- 🔍 **SEO Friendly** - Semantic HTML and meta tags
- 🎨 **Brand Consistent** - Matches existing brand guidelines

## 📋 Features

- **Dynamic Content Loading** - JSON-based content management
- **Testimonial Carousel** - Random rotation with touch/swipe support
- **Mobile Menu** - Smooth hamburger navigation
- **Contact Forms** - Web3Forms integration
- **Google Maps** - Embedded location maps
- **Lazy Loading** - Optimized image loading
- **Smooth Scrolling** - Enhanced user experience

## 🏗️ Project Structure

```
AHS Cline Website/
├── index.html              # Homepage
├── services.html           # Services page
├── team.html              # Team page
├── new-patients.html      # New patients page
├── contact.html           # Contact page
│
├── css/
│   ├── variables.css      # CSS custom properties
│   ├── styles.css         # Main stylesheet
│   └── responsive.css     # Responsive breakpoints
│
├── js/
│   ├── main.js           # Core functionality
│   └── testimonials.js   # Testimonial carousel
│
├── data/
│   ├── locations.json    # Location information
│   ├── services.json     # Services & conditions
│   ├── testimonials.json # Patient testimonials
│   └── team.json         # Team member profiles
│
└── assets/
    ├── images/           # Website images
    ├── logo/            # Logo files
    └── documents/       # PDF forms
```

## 🎨 Brand Colors

```css
Primary Green: #568A4A
Accent Navy:   #001233
Background:    #FFFFFF
Text:          #001233
Button Text:   #F0F6EE
```

## 🖼️ Required Assets

### Images Needed (copy from "Assets AHS" folder):

**Logos:**
- `ahs_logo_web_210_retina.png` → `assets/logo/`
- `ahs_logo_web_footer_white.png` → `assets/logo/`
- `ahs_favicon_512.png` → `assets/logo/`
- `ahs_favicon.ico` → `assets/logo/`

**Homepage Images:**
- `ahs_home_hero_c.jpg` → `assets/images/` (or similar hero image)
- `ahs_consultation_1_1.jpg` → `assets/images/`
- `ahs_mission.jpg` → `assets/images/` (or similar mission image)
- `va_falls-church_physical-therapists_2022_transparent.png` → `assets/images/`

**Location Images:**
- `ahs_sterling_new.jpg` → `assets/images/`
- `ahs_falls_church_new.jpg` → `assets/images/`

**Team Photos:** (all staff photos from "Assets AHS/Team New/" folder)
- Copy all `staff_*.png` files to `assets/team/`

**Service Images:**
- Various service-related images as needed

### Creating Missing Images:
If `ahs_home_hero_c.jpg` doesn't exist, you can use:
- `ahs_backg.jpg` or any suitable therapy room image
- `photo_staff.jpg` or similar

## 📦 Installation & Setup

### 1. Organize Assets

```bash
# Create asset directories
mkdir -p assets/images assets/logo assets/team assets/documents

# Copy logos
cp "Assets AHS/ahs_logo_web_210_retina.png" assets/logo/
cp "Assets AHS/ahs_logo_web_footer_white.png" assets/logo/
cp "Assets AHS/ahs_favicon_512.png" assets/logo/
cp "Assets AHS/ahs_favicon.ico" assets/logo/

# Copy location images
cp "Assets AHS/ahs_sterling_new.jpg" assets/images/
cp "Assets AHS/ahs_falls_church_new.jpg" assets/images/

# Copy other images
cp "Assets AHS/ahs_consultation_1_1.jpg" assets/images/
cp "Assets AHS/va_falls-church_physical-therapists_2022_transparent.png" assets/images/

# Copy team photos (adjust as needed)
cp "Assets AHS"/staff_*.png assets/team/
```

### 2. Create any missing images

If certain images are missing, use placeholders:
- Homepage hero: Use any therapy room image
- Mission image: Use consultation or therapy session image

### 3. Test Locally

Simply open `index.html` in a web browser. For better testing with CORS:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server -p 8000

# Then open: http://localhost:8000
```

### 4. Update Google Maps Embed URLs

In `data/locations.json`, replace the `mapEmbedUrl` values with actual Google Maps embed URLs:

1. Go to Google Maps
2. Search for each location
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL
5. Update the JSON file

## 🌐 Deployment to Cloudways

### Option 1: Using Cloudways File Manager
1. Log into Cloudways
2. Go to your application → Application Management → File Manager
3. Navigate to `public_html/`
4. Upload all files and folders
5. Set permissions: Folders `755`, Files `644`

### Option 2: Using SFTP
1. Get SFTP credentials from Cloudways
2. Use FileZilla, Cyberduck, or similar
3. Connect and upload to `public_html/`

### Option 3: Using Git (Recommended)
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit"

# Add Cloudways as remote (adjust URL)
git remote add cloudways ssh://user@server/path/to/repo
git push cloudways main
```

## 📝 Content Management

### Adding New Testimonials
Edit `data/testimonials.json`:
```json
{
  "id": 6,
  "title": "Your Title",
  "text": "Testimonial text...",
  "author": "John D.",
  "rating": 5
}
```

### Adding Team Members
Edit `data/team.json` (to be created):
```json
{
  "name": "Dr. Jane Smith",
  "title": "Physical Therapist",
  "credentials": "DPT, OCS",
  "bio": "Biography text...",
  "image": "assets/team/staff_jane.png",
  "specialties": ["Orthopedics", "Sports"]
}
```

### Updating Services
Edit `data/services.json` to add or modify services.

### Updating Locations
Edit `data/locations.json` for location changes.

## 🔧 Customization

### Colors
Edit `css/variables.css` to change colors:
```css
:root {
  --color-primary: #568A4A;
  --color-accent: #001233;
  /* Add more... */
}
```

### Fonts
Current font: **Montserrat**
To change, update in `css/variables.css` and HTML `<head>`

### Spacing
Adjust spacing variables in `css/variables.css`:
```css
--spacing-xl: 32px;
--spacing-2xl: 48px;
```

## 🔍 SEO Optimization

### Meta Tags
Each page has proper meta tags. Update:
- Title tags
- Meta descriptions
- Open Graph tags
- Schema.org structured data (add as needed)

### Sitemap
Create `sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.allied-hs.com/</loc>
    <priority>1.0</priority>
  </url>
  <!-- Add more pages -->
</urlset>
```

### Robots.txt
Create `robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://www.allied-hs.com/sitemap.xml
```

## 📧 Contact Form Setup

The contact form uses Web3Forms (free, no backend needed):

1. Sign up at https://web3forms.com
2. Get your Access Key
3. Add to contact form in `contact.html`:
```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
```

## 🧪 Testing Checklist

- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on mobile devices (iOS, Android)
- [ ] Test all navigation links
- [ ] Test contact form submission
- [ ] Verify all images load
- [ ] Check responsive design at different breakpoints
- [ ] Test testimonial carousel (navigation, autoplay)
- [ ] Verify mobile menu works
- [ ] Check page load speed (aim for <3s)
- [ ] Validate HTML (https://validator.w3.org/)
- [ ] Check accessibility (https://wave.webaim.org/)

## 🚀 Performance Optimization

### Images
- Compress images: Use TinyPNG or similar
- Convert to WebP where supported
- Add lazy loading (already implemented)

### Code
- Minify CSS and JS for production
- Enable gzip compression on server
- Set proper cache headers

### CDN (Optional)
- Consider using Cloudflare for CDN

## 📞 Support

For questions or issues:
- Email: support@allied-hs.com
- Developer: Pushkar Damle

## 📄 License

© 2025 Allied Health Solutions. All rights reserved.

## 🔄 Version History

- **v1.0.0** (2025-01-09) - Initial release
  - Complete HTML/CSS/JS website
  - Responsive design
  - Dynamic content loading
  - Testimonial carousel
  - Contact form integration
