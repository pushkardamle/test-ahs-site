# 🚀 Quick Start Guide - Allied Health Solutions Website

## ⚡ 3 Steps to Launch

### Step 1: Get Web3Forms Key (5 minutes)
1. Visit https://web3forms.com
2. Enter email: **support@allied-hs.com**
3. Copy your Access Key
4. Edit `contact.html` → Line 112
5. Replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` with your key

### Step 2: Update Google Maps (5 minutes)
1. Go to https://www.google.com/maps
2. **Sterling:** Search `46090 Lake Center Plaza Suite #303, Sterling, VA 20165`
   - Click Share → Embed → Copy URL → Paste in `data/locations.json`
3. **Falls Church:** Search `2841 Hartland Rd, Suite #403, Falls Church, VA 22043`
   - Click Share → Embed → Copy URL → Paste in `data/locations.json`

### Step 3: Copy Remaining Images (15 minutes)
From your WordPress media library, copy these to respective folders:

**To `assets/logo/`:**
- ahs_logo_web_footer_white.png

**To `assets/images/`:**
- ahs_home_hero_c.jpg
- ahs_consultation_1_1.jpg
- ahs_home_3.jpg
- ahs_sterling_new.jpg
- ahs_falls_church_new.jpg
- ahs_mission.jpg
- va_falls-church_physical-therapists_2022_transparent.png

**To `assets/team/`:**
- All staff_*.png files (8 photos)

## ✅ Testing (5 minutes)

Your site is running at: http://localhost:8000

Test:
- [ ] Homepage loads
- [ ] All 5 pages work
- [ ] Mobile menu opens
- [ ] Contact form submits
- [ ] Maps display

## 🌐 Deploy to Cloudways (30 minutes)

### Option 1: FileZilla (Easiest)
1. Download FileZilla
2. Get SFTP details from Cloudways
3. Connect to server
4. **Backup** existing public_html
5. Upload all files to public_html/

### Option 2: Cloudways File Manager
1. Log into Cloudways
2. File Manager → public_html/
3. Create backup
4. Upload all files

## 🎉 Go Live Checklist

After upload:
- [ ] Visit https://www.allied-hs.com
- [ ] Test contact form
- [ ] Check on mobile
- [ ] Verify images load
- [ ] Test all links

## 📞 Need Help?

- **Setup Questions:** See FINAL_SETUP.md
- **Asset Details:** See ASSET_SETUP.md
- **Full Docs:** See README.md

---

**Total Time to Launch: 1 hour** ⏱️

Your website is production-ready! Just complete these 3 steps and deploy! 🚀
