# Asset Organization Guide - Allied Health Solutions Website

This guide will help you organize all the images and assets from your WordPress site into the new website structure.

## 📁 Required Folder Structure

First, create the following folders in your project:

```
AHS Cline Website/
└── assets/
    ├── images/      (general images, hero images)
    ├── logo/        (logo files, favicon)
    └── team/        (team member photos)
```

## 🖼️ Assets to Copy from "Assets AHS" Folder

### Logo Files (copy to `assets/logo/`)

- **ahs_logo_web_210_retina.png** → Primary logo for header
- **ahs_logo_web_footer_white.png** → White logo for footer
- **ahs_favicon_512.png** → Favicon (512x512)
- **ahs_favicon.ico** → Favicon (ICO format)

### Images (copy to `assets/images/`)

- **ahs_home_hero_c.jpg** → Homepage hero background
- **ahs_consultation_1_1.jpg** → Homepage consultation image
- **ahs_home_3.jpg** → Homepage services section image
- **ahs_sterling_new.jpg** or **ahs_sterling_new.webp** → Sterling location photo
- **ahs_falls_church_new.jpg** or **ahs_falls_church_new.webp** → Falls Church location photo
- **ahs_mission.jpg** → Mission/philosophy section image
- **va_falls-church_physical-therapists_2022_transparent.png** → Expertise.com badge

### Team Photos (copy to `assets/team/`)

Copy all staff photos from the WordPress site. The filenames should match those in `data/team.json`:

- **staff_madhura.png**
- **staff_melissa.png**
- **staff_patricia.png**
- **staff_mrunmayee.png**
- **staff_sarah.png**
- **staff_sanika.png**
- **staff_priyanta.png** (note spelling from JSON)
- **staff_tony.png**

### Optional: Create Placeholder Image

If team photos aren't available yet, create a placeholder:
- **placeholder-team.jpg** → 400x400px placeholder image

## 💻 Quick Copy Commands

### For Windows (Command Prompt):

```cmd
REM Create folders
mkdir assets\images assets\logo assets\team

REM Copy logo files (adjust path to your "Assets AHS" folder)
copy "path\to\Assets AHS\ahs_logo_web_210_retina.png" assets\logo\
copy "path\to\Assets AHS\ahs_logo_web_footer_white.png" assets\logo\
copy "path\to\Assets AHS\ahs_favicon_512.png" assets\logo\

REM Copy images
copy "path\to\Assets AHS\ahs_home_hero_c.jpg" assets\images\
copy "path\to\Assets AHS\ahs_consultation_1_1.jpg" assets\images\
copy "path\to\Assets AHS\ahs_home_3.jpg" assets\images\
copy "path\to\Assets AHS\ahs_sterling_new.*" assets\images\
copy "path\to\Assets AHS\ahs_falls_church_new.*" assets\images\
copy "path\to\Assets AHS\ahs_mission.jpg" assets\images\
copy "path\to\Assets AHS\va_falls-church_physical-therapists_2022_transparent.png" assets\images\

REM Copy team photos
copy "path\to\Assets AHS\staff_*.png" assets\team\
```

### For Windows (PowerShell):

```powershell
# Create folders
New-Item -ItemType Directory -Force -Path assets\images, assets\logo, assets\team

# Copy logo files
Copy-Item "path\to\Assets AHS\ahs_logo_*" -Destination assets\logo\
Copy-Item "path\to\Assets AHS\ahs_favicon*" -Destination assets\logo\

# Copy images
Copy-Item "path\to\Assets AHS\ahs_home_*" -Destination assets\images\
Copy-Item "path\to\Assets AHS\ahs_consultation_*" -Destination assets\images\
Copy-Item "path\to\Assets AHS\ahs_*location*" -Destination assets\images\
Copy-Item "path\to\Assets AHS\ahs_mission*" -Destination assets\images\
Copy-Item "path\to\Assets AHS\va_falls-church*" -Destination assets\images\

# Copy team photos
Copy-Item "path\to\Assets AHS\staff_*" -Destination assets\team\
```

## 📝 Manual Copy Steps

1. **Open File Explorer**
2. **Navigate to your WordPress "Assets AHS" folder**
3. **Create the three folders in your project:**
   - `assets/images/`
   - `assets/logo/`
   - `assets/team/`

4. **Copy files according to the lists above**

## ✅ Verification Checklist

After copying assets, verify these files exist:

### Logo Folder (`assets/logo/`)
- [ ] ahs_logo_web_210_retina.png
- [ ] ahs_logo_web_footer_white.png
- [ ] ahs_favicon_512.png
- [ ] ahs_favicon.ico (optional but recommended)

### Images Folder (`assets/images/`)
- [ ] ahs_home_hero_c.jpg
- [ ] ahs_consultation_1_1.jpg
- [ ] ahs_home_3.jpg
- [ ] ahs_sterling_new.* (jpg or webp)
- [ ] ahs_falls_church_new.* (jpg or webp)
- [ ] ahs_mission.jpg
- [ ] va_falls-church_physical-therapists_2022_transparent.png

### Team Folder (`assets/team/`)
- [ ] staff_madhura.png
- [ ] staff_melissa.png
- [ ] staff_patricia.png
- [ ] staff_mrunmayee.png
- [ ] staff_sarah.png
- [ ] staff_sanika.png
- [ ] staff_priyanta.png
- [ ] staff_tony.png

## 🔍 File Size Optimization (Recommended)

For better website performance, consider optimizing images:

### Online Tools (Free):
- **TinyPNG** (tinypng.com) - for PNG files
- **Squoosh** (squoosh.app) - for all image types
- **Compressor.io** - for JPG files

### Target Sizes:
- Hero images: < 500KB
- Team photos: < 150KB each
- Logo files: < 50KB
- Other images: < 200KB

## 🔄 Converting WebP to JPG (if needed)

If you need to convert WebP images to JPG:

1. **Online**: Use CloudConvert (cloudconvert.com)
2. **Windows**: Open in Paint → Save As → JPG
3. **Mac**: Open in Preview → Export → JPG

## ⚠️ Important Notes

1. **File Names**: Must match exactly (case-sensitive on some systems)
2. **File Formats**: 
   - Logo: PNG (transparent background)
   - Photos: JPG or WebP
   - Icons: PNG or SVG
3. **Image Dimensions**:
   - Hero: Recommended 1920x600px
   - Team photos: At least 400x400px (square)
   - Logos: Use provided dimensions

## 🆘 Troubleshooting

### Images Not Showing?
1. Check file names match exactly
2. Verify files are in correct folders
3. Check file extensions (.jpg vs .jpeg, .png)
4. Clear browser cache (Ctrl+Shift+R)

### Missing Images?
- Download from WordPress media library
- Or use placeholder images temporarily
- Update file paths in JSON files if needed

## 📞 Need Help?

If you're missing images or need help:
1. Check your WordPress media library
2. Contact web support
3. Use temporary placeholder images until originals are found
