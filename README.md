# Kalpana Gold Buyers Private Ltd. — Official Premium Website

A luxury, modern, fully-responsive multi-page website architected and developed for **Kalpana Gold Buyers Private Ltd.**, Guwahati's premier gold buying enterprise and pledged gold release specialist.

---

## 🏛️ Company Profile

- **Company Name:** Kalpana Gold Buyers Private Ltd.
- **Industry:** Gold Buying, Old Gold Buying, Broken Gold Buying, Unused Gold Jewellery Buying, Scrap Gold Jewellery, and Guided Solutions for Pledged Gold Loans.
- **Location:** Guwahati, Assam, India.
- **Branch 1 (Guwahati Club):** First Floor, Maa Kali Complex, Near Style Baazar, GNB Road, Guwahati Club, Guwahati - 781003, Assam
- **Branch 2 (Adabari):** Adabari, Near NCS Square Mall, Guwahati - 781014, Assam
- **Business Focus:** Gold Buying & Gold Loan Release from any Bank or NBFC (Muthoot, Manappuram, SBI, etc.)
- **Helpline Numbers:** `+91 91810 54324`, `+91 91810 54325`, `+91 91810 54326`
- **WhatsApp Contact:** `+91 91810 54325`
- **Official Email:** `goldbuyers952@gmail.com`
- **Business Hours:** 10:00 AM to 8:00 PM (Monday to Sunday, All 7 Days)
- **Brand Identity:** Premium, Trustworthy, Safe, Transparent, Professional, and Customer-Friendly.

---

## 📁 Project Architecture & File Structure

```text
kalpana-gold-buyers/
├── index.html              # Home Page (Hero, Pillars, Services Preview, Process, Trust Stats, Reviews, CTA)
├── services.html           # Dedicated Services Page (Detailed services, comparison matrix, inquiry CTAs)
├── cash-for-gold.html      # Cash for Gold Landing Page (Interactive Calculator, Documents checklist, FAQs)
├── branches.html           # Branch Directory (Guwahati Club & Adabari branches, interactive map switcher)
├── gallery.html            # Premium Photo Gallery (Category filter tabs, functional lightbox modal)
├── about.html              # About Us Page (Company story, mission, vision, core values, customer charter)
├── contact.html            # Contact Page (Frontend validation form, contact cards, map embed, success modal)
│
├── css/
│   └── style.css           # Luxury design system (Champagne Gold & Obsidian palette, responsive tokens)
│
├── js/
│   └── script.js           # Core JS (Sticky header, mobile drawer, calculator, gallery lightbox, FAQ, forms)
│
├── images/
│   ├── logo.png            # Official Golden Peacock Emblem
│   ├── hero.jpg            # Home hero: Luxury bullion, coins & ornaments (814 KB)
│   ├── hero-services.jpg   # Services hero: Grand bridal jewellery collection (928 KB)
│   ├── hero-cash-for-gold.jpg # Cash for Gold hero: 24K gold bullion bars & coins (789 KB)
│   ├── hero-branches.jpg   # Branches hero: Executive showroom & gold peacock logo (798 KB)
│   ├── hero-gallery.jpg    # Gallery hero: Ornate gold jewels & collectibles (814 KB)
│   ├── hero-about.jpg      # About hero: Certified gold appraisal suite (715 KB)
│   ├── hero-contact.jpg    # Contact hero: Luxury gold consultation lounge (796 KB)
│   ├── services/           # Dedicated service visuals
│   │   ├── old-gold.jpg
│   │   ├── used-jewellery.jpg
│   │   ├── broken-gold.jpg
│   │   ├── gold-coins.jpg
│   │   ├── purity-testing.jpg
│   │   ├── gold-evaluation.jpg
│   │   └── pledged-gold.jpg
│   ├── branches/           # Showroom and consultation lounge images
│   │   ├── guwahati-club.jpg
│   │   └── adabari.jpg
│   └── gallery/            # Filterable showcase photos (11 high-res luxury assets)
│
├── package.json            # Modern npm/Vite configuration (optional for Vite MPA dev server)
├── vite.config.js          # Multi-page build configuration
└── README.md               # Complete project documentation and Hostinger deployment guide
```

---

## 🎨 Design System & Color Palette

- **Obsidian Black / True Dark:** `#0A0A0A`, `#121212`, `#171717`
- **Champagne Gold Primary:** `#D4AF72`
- **Light Champagne Gold:** `#E8D5A7`
- **Deep Metallic Gold:** `#9B782E`, `#B88F4B`
- **White / Text Light:** `#FFFFFF`, `#F5F5F5`
- **Typography:**
  - **Headings & Display:** `Cinzel`, Google Serif Font (weights: 600, 700, 800)
  - **Body & Controls:** `Plus Jakarta Sans`, Google Sans-Serif Font (weights: 300, 400, 500, 600, 700)
- **Icons:** Font Awesome 6.5.1 CDN

---

## ⚡ Key Interactive Features

1. **Sticky Header & Mobile Drawer:** Smooth sticky navigation with active link tracking, touch-friendly hamburger drawer, and body scroll lock.
2. **Interactive Gold Valuation Calculator (`cash-for-gold.html`):**
   - Karat selector pills (24K, 22K standard, 18K, 14K, 10K).
   - Dynamic weight in grams input.
   - Prevailing Guwahati bullion gold rate input.
   - Applicable margin/deduction slider/input.
   - Real-time pure gold weight calculation, gross bullion valuation, and net payout in Indian Rupee format (`₹`).
   - Clear indicative disclaimer notice.
3. **Gallery Lightbox with Category Filter (`gallery.html`):**
   - Dynamic category filter tabs: *All, Our Showroom, Gold Testing, Gold Jewellery, Our Branches, Customer Experience*.
   - Lightbox modal with next/prev navigation, keyboard support (`ArrowLeft`, `ArrowRight`, `Esc`), and backdrop closing.
4. **Interactive Branch Map Switcher (`branches.html`):**
   - Direct button toggling between Guwahati Club and Adabari branches.
   - Embedded Google Maps view and direct directions link.
5. **Validated Contact Form (`contact.html`):**
   - Live frontend input validation for 10-digit Indian mobile numbers, email, branch choice, and message length.
   - Interactive modal confirmation popup showing a unique lead reference number (`KGB-XXXXXX`).
6. **FAQ Accordion:** Smooth slide expansion and chevron rotation.
7. **Floating Action Buttons:** Persistent WhatsApp instant-chat badge and click-to-call floating button for mobile lead conversion.

---

## 🚀 How to Deploy on Hostinger Shared Hosting

Deploying this website on Hostinger shared hosting (cPanel or hPanel) is straightforward because the website is built with clean, standard HTML5, CSS3, and Vanilla JavaScript:

### Method 1: Hostinger File Manager (Quickest — 2 Minutes)
1. Log into your **Hostinger Control Panel (hPanel)**.
2. Go to **Websites** &rarr; click **Manage** next to your domain.
3. Navigate to **Files** &rarr; **File Manager** &rarr; click **Access files of [your domain]**.
4. Open the `public_html` directory.
5. Select and upload all files and folders:
   - `index.html`, `services.html`, `cash-for-gold.html`, `branches.html`, `gallery.html`, `about.html`, `contact.html`
   - `css/` folder (with `style.css`)
   - `js/` folder (with `script.js`)
   - `images/` folder (with all subfolders and assets)
6. Ensure `index.html` is located directly in the root of `public_html`.
7. Visit your domain in any browser (`https://yourdomain.com`). Your website will be live immediately!

### Method 2: Hostinger FTP Upload (FileZilla)
1. In hPanel, go to **Files** &rarr; **FTP Accounts** to find your FTP Hostname, Username, and Password.
2. Open **FileZilla** or your preferred FTP client and connect using these credentials.
3. In the remote pane, open `public_html`.
4. Upload all project files and folders from your local machine to `public_html`.
5. Once transfer completes (100%), open your domain.

### Hostinger Post-Deployment Checklist:
- **Enable Free SSL (HTTPS):** In hPanel, go to **Security** &rarr; **SSL** &rarr; click **Install SSL** on your domain.
- **Force HTTPS:** Turn on the toggle **Force HTTPS** in hPanel to redirect all HTTP traffic to HTTPS.
- **Email Setup:** Set up your official email or forward `goldbuyers952@gmail.com` under **Emails** &rarr; **Email Accounts** if needed.

---

## 💻 Local Testing & Development

### Option A: Open Directly in Browser
You can open `index.html` directly in any modern browser (Google Chrome, Microsoft Edge, Safari, Firefox). All local images and stylesheets will load.

### Option B: VS Code Live Server
1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension.
3. Right click `index.html` and click **"Open with Live Server"**.

### Option C: Using Vite Dev Server (If Node.js is Installed)
```bash
npm install
npm run dev
```
Open `http://localhost:3000` in your browser.

---

## 📄 License & Ownership

Copyright © 2026 **Kalpana Gold Buyers Private Ltd.** All Rights Reserved.  
Prepared for official deployment in Guwahati, Assam, India.

