# Final Setup & Deployment Guide

## ✅ What's Done

- ✅ All 5 HTML pages created
- ✅ All CSS files created
- ✅ All JavaScript functionality implemented
- ✅ All JSON data files created
- ✅ Asset folders created
- ✅ Main logos copied

## 📋 Remaining Tasks

### 1. Complete Asset Organization (15 minutes)

#### Required Images from WordPress:

Copy these from your WordPress media library to the specified folders:

**To `assets/logo/`:**
```
- ahs_logo_web_footer_white.png (white version of logo for dark footer)
```

**To `assets/images/`:**
```
- ahs_home_hero_c.jpg (or any therapy room hero image)
- ahs_consultation_1_1.jpg (consultation/therapy session photo)
- ahs_home_3.jpg (person using gym equipment)
- ahs_sterling_new.jpg or .webp (Sterling office building exterior)
- ahs_falls_church_new.jpg or .webp (Falls Church office building exterior)
- ahs_mission.jpg (therapy session for mission section)
- va_falls-church_physical-therapists_2022_transparent.png (Expertise badge)
```

**To `assets/team/`:**
```
- staff_madhura.png
- staff_melissa.png
- staff_patricia.png
- staff_mrunmayee.png
- staff_sarah.png
- staff_sanika.png
- staff_priyanta.png
- staff_tony.png
```

#### How to Get Images from WordPress:

1. Log into WordPress admin
2. Go to **Media Library**
3. Right-click each image → **Copy Image Address** or **Download**
4. Save to the appropriate folder

#### Using Placeholder Images (Temporary):

If you don't have all images ready, you can use these free stock photo sites:
- **Unsplash.com** - Search "physical therapy"
- **Pexels.com** - Search "physiotherapy"
- **Pixabay.com** - Free images

Recommended dimensions:
- Hero images: 1920x600px
- Team photos: 400x400px (square)
- Other images: 800x600px

### 2. Contact Form Setup (5 minutes)

#### Get Web3Forms Access Key:

1. Go to https://web3forms.com
2. Click **"Get Started Free"**
3. Enter your email (support@allied-hs.com)
4. Copy the **Access Key** you receive
5. Open `contact.html` in editor
6. Find line 112: `<input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE">`
7. Replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` with your actual key

**Testing the form:**
- Fill out the form
- Submit it
- Check your email (support@allied-hs.com) for the message
- Web3Forms forwards all submissions to your email automatically

### 3. Google Maps Setup (10 minutes)

#### Generate Embed URLs:

**For Sterling Location:**
1. Go to https://www.google.com/maps
2. Search: `46090 Lake Center Plaza Suite #303, Sterling, VA 20165`
3. Click **Share** button
4. Click **Embed a map** tab
5. Copy the `src="..."` URL from the iframe
6. Open `data/locations.json`
7. Replace the `mapEmbedUrl` for Sterling

**For Falls Church Location:**
1. Search: `2841 Hartland Rd, Suite #403, Falls Church, VA 22043`
2. Repeat steps 3-7 above
3. Replace the `mapEmbedUrl` for Falls Church

Example format:
```json
"mapEmbedUrl": "https://www.google.com/maps/embed?pb=!1m18!1m12..."
```

### 4. Testing Checklist (10 minutes)

Test on **localhost:8000**:

#### Desktop Testing:
- [ ] Homepage loads with all images
- [ ] All navigation links work
- [ ] Services page displays all conditions
- [ ] Team page shows all 8 members
- [ ] New Patients page loads completely
- [ ] Contact form submits successfully
- [ ] Footer locations appear correctly
- [ ] Testimonial carousel auto-plays
- [ ] Social media links work

#### Mobile Testing (resize browser to 375px width):
- [ ] Mobile menu opens/closes
- [ ] All pages are readable on small screens
- [ ] Images resize properly
- [ ] Contact form works on mobile
- [ ] Phone number links dial correctly

#### Performance Check:
- [ ] Pages load in under 3 seconds
- [ ] No console errors (F12 → Console tab)
- [ ] All images display (no broken images)

### 5. Pre-Deployment Optimization (Optional, 15 minutes)

#### Compress Images:
Use https://tinypng.com to compress all images:
- Upload images
- Download compressed versions
- Replace originals

#### Create Sitemap:
Create `sitemap.xml` in root:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.allied-hs.com/</loc>
    <lastmod>2025-01-09</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.allied-hs.com/services.html</loc>
    <lastmod>2025-01-09</lastmod>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.allied-hs.com/team.html</loc>
    <lastmod>2025-01-09</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.allied-hs.com/new-patients.html</loc>
    <lastmod>2025-01-09</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.allied-hs.com/contact.html</loc>
    <lastmod>2025-01-09</lastmod>
    <priority>0.9</priority>
  </url>
</urlset>
```

#### Create robots.txt:
Create `robots.txt` in root:
```
User-agent: *
Allow: /

Sitemap: https://www.allied-hs.com/sitemap.xml
```

### 6. Deployment to Cloudways (30 minutes)

#### Method 1: SFTP Upload (Recommended)

**Get SFTP Credentials:**
1. Log into Cloudways
2. Go to your application
3. Click **Access Details** tab
4. Note: Host, Username, Password, Port

**Using FileZilla:**
1. Download FileZilla (https://filezilla-project.org)
2. File → Site Manager → New Site
3. Enter:
   - Protocol: SFTP
   - Host: [from Cloudways]
   - Port: [from Cloudways, usually 22]
   - Logon Type: Normal
   - User: [from Cloudways]
   - Password: [from Cloudways]
4. Click **Connect**
5. Navigate to `/public_html/` on remote side
6. **BACKUP FIRST:** Download entire `public_html` folder to your computer
7. Delete old WordPress files (AFTER backing up!)
8. Upload entire `AHS Cline Website` folder contents to `public_html/`

#### Method 2: Cloudways File Manager

1. Log into Cloudways
2. Select your application
3. Go to **Application Management** → **File Manager**
4. Navigate to `public_html/`
5. **Create backup** (Download or create snapshot)
6. Delete old files
7. Click **Upload** button
8. Upload all files and folders

#### Method 3: Git Deployment (Advanced)

```bash
# In your project folder
git init
git add .
git commit -m "Initial deployment of new website"

# Add Cloudways Git remote (get URL from Cloudways)
git remote add cloudways [your-cloudways-git-url]

# Push to Cloudways
git push cloudways main
```

#### Set Correct Permissions:

After upload, set permissions:
- Folders: `755`
- Files: `644`

In FileZilla: Right-click → File Permissions

### 7. Post-Deployment Checklist

After uploading to Cloudways:

- [ ] Visit https://www.allied-hs.com
- [ ] Test all pages load correctly
- [ ] Test contact form submits
- [ ] Test on mobile device
- [ ] Check Google Maps display
- [ ] Verify all images load
- [ ] Test social media links
- [ ] Check page load speed (Google PageSpeed Insights)
- [ ] Test in different browsers (Chrome, Firefox, Safari)

### 8. DNS & SSL Configuration

If domain not pointed to Cloudways yet:

1. In Cloudways → Application Management → Domain Management
2. Add domain: `www.allied-hs.com` and `allied-hs.com`
3. Get the server IP address
4. In your domain registrar (GoDaddy, Namecheap, etc.):
   - Add A Record: `@` → [Cloudways IP]
   - Add A Record: `www` → [Cloudways IP]
5. Wait 24-48 hours for DNS propagation
6. In Cloudways → SSL Certificate → Install Let's Encrypt (FREE)

### 9. SEO Setup (Post-Launch)

- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google Analytics (optional)
- [ ] Set up Google My Business listings
- [ ] Verify social media Open Graph tags work

## 🎉 Launch Day Tasks

1. **Announce on social media** (Facebook, Instagram)
2. **Email existing patients** about new website
3. **Update Google My Business** with new website link
4. **Monitor** contact form submissions first few days
5. **Check** website analytics after 24 hours

## 📞 Support Contacts

- **Web3Forms Support:** https://web3forms.com/contact
- **Cloudways Support:** Live chat in dashboard
- **Your Developer:** [Your contact info]

## 🔒 Security Checklist

- [ ] SSL certificate installed (HTTPS)
- [ ] Regular backups enabled in Cloudways
- [ ] Cloudways firewall enabled
- [ ] Contact form has honeypot (already included)
- [ ] No sensitive data exposed in code

## 📱 Marketing Checklist (Post-Launch)

- [ ] Update email signatures with new website
- [ ] Update business cards
- [ ] Update printed materials
- [ ] Add to physical therapy directories
- [ ] Share on local business groups

## 🎯 Success Metrics to Track

After 30 days:
- Page views
- Contact form submissions
- Phone calls
- Google My Business views
- Mobile vs Desktop traffic
- Most popular pages

## ⚡ Quick Reference

**Website URL:** https://www.allied-hs.com
**Localhost:** http://localhost:8000
**Contact Form:** Web3Forms (free tier: 250 submissions/month)
**Hosting:** Cloudways
**Email:** support@allied-hs.com

## 🚨 Troubleshooting

**Images not showing after deployment:**
- Check file paths are relative (not absolute)
- Verify images uploaded to correct folders
- Check file permissions (644 for images)

**Contact form not working:**
- Verify Web3Forms Access Key is correct
- Check email in Web3Forms dashboard
- Test with different email address

**Mobile menu not working:**
- Clear browser cache
- Check JavaScript console for errors
- Verify main.js uploaded correctly

**Pages loading slowly:**
- Compress images (use TinyPNG)
- Enable Cloudways CDN
- Enable gzip compression

---

## ✅ Final Checklist Summary

Before going live:
- [ ] All images copied and optimized
- [ ] Web3Forms key added to contact form
- [ ] Google Maps URLs updated
- [ ] Tested all pages locally
- [ ] Tested contact form
- [ ] Created backup of current site
- [ ] Uploaded to Cloudways
- [ ] Set file permissions
- [ ] Tested live site
- [ ] SSL certificate active
- [ ] DNS pointed correctly

**Estimated Total Time:** 1.5 - 2 hours

---

**Your website is production-ready!** Just complete these final steps and you'll be live! 🚀
