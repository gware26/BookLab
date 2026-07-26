# BookLab Deployment Guide

This guide covers all deployment options for BookLab, from local development to production environments.

## Table of Contents

1. [Local Development](#local-development)
2. [GitHub Pages](#github-pages)
3. [Netlify](#netlify)
4. [Vercel](#vercel)
5. [Traditional Hosting](#traditional-hosting)
6. [Docker](#docker)
7. [Performance Optimization](#performance-optimization)
8. [Troubleshooting](#troubleshooting)

---

## Local Development

### Prerequisites
- Git
- Node.js (optional, for simple server)
- Python 3 or PHP (for built-in servers)
- Modern web browser

### Setup

#### Option 1: Python HTTP Server (Recommended)

```bash
cd BookLab
python -m http.server 8000
```

Then open: `http://localhost:8000/src/pages/index.html`

#### Option 2: Node.js HTTP Server

```bash
# Install http-server globally
npm install -g http-server

# Run from project root
http-server -p 8000
```

#### Option 3: PHP Built-in Server

```bash
cd BookBoanerges
php -S localhost:8000
```

#### Option 4: VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"
4. Automatically opens in browser with auto-reload

### Testing

After starting local server:

```
Home: http://localhost:8000/src/pages/index.html
Login: http://localhost:8000/src/pages/login.html
Register: http://localhost:8000/src/pages/register.html
Admin: http://localhost:8000/src/pages/Admin.html
```

### Browser DevTools Testing

1. **Responsive Design Testing**
   - Press `F12` to open DevTools
   - Press `Ctrl+Shift+M` (or Cmd+Shift+M on Mac) for device emulation
   - Test at breakpoints: 480px, 768px, 1024px

2. **Performance**
   - Network tab: Check file sizes and loading times
   - Performance tab: Record page load and animations
   - Lighthouse: Run audit for performance/accessibility

3. **Debugging**
   - Console: Check for JavaScript errors
   - Elements: Inspect HTML and CSS
   - Sources: Debug JavaScript

---

## GitHub Pages

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: BookBoanerges premium bookstore"

# Add remote repository
git remote add origin https://github.com/yourusername/BookBoanerges.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Source", select:
   - Branch: `main`
   - Folder: `/public` or `/root` (depending on structure)
4. Click **Save**

### Step 3: Access Your Site

Your site will be available at:
```
https://yourusername.github.io/BookBoanerges
```

GitHub will show this URL in the Pages settings.

### Step 4: Custom Domain (Optional)

1. In **Settings** → **Pages**
2. Enter your custom domain in "Custom domain" field
3. Configure DNS records with your domain provider:
   - Type: `A` record
   - Value: `185.199.108.153`
   - Repeat for: `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
4. Or use CNAME for subdomain:
   - Type: `CNAME`
   - Value: `yourusername.github.io`

### GitHub Pages Advantages
- ✅ Free hosting
- ✅ Automatic SSL/HTTPS
- ✅ Custom domain support
- ✅ Integrated with GitHub
- ✅ Easy updates (just push code)

### GitHub Pages Limitations
- Suitable for static sites only
- 1GB storage limit per repository
- 100GB bandwidth per month

---

## Netlify

### Step 1: Create Account

1. Go to [netlify.com](https://netlify.com)
2. Sign up (use GitHub for easier linking)

### Step 2: Connect Repository

**Option A: Automatic Deployment**

1. Click **New site from Git**
2. Choose **GitHub**
3. Authorize Netlify to access your GitHub
4. Select your BookBoanerges repository
5. Configure build settings:
   - Build command: Leave empty (static site)
   - Publish directory: `public`
6. Click **Deploy site**

**Option B: Manual Upload**

1. Click **Add new site**
2. Select **Deploy manually**
3. Drag and drop the `public` folder
4. Netlify automatically deploys

### Step 3: Custom Domain

1. Go to **Domain settings**
2. Click **Add custom domain**
3. Enter your domain name
4. Follow DNS configuration instructions

### Netlify Advantages
- ✅ Free tier available
- ✅ Automatic HTTPS
- ✅ Custom domain support
- ✅ Form submissions
- ✅ Analytics dashboard
- ✅ Split testing
- ✅ Automatic deployments on git push
- ✅ Environment variables support

### Netlify Configuration

Create `netlify.toml` in project root:

```toml
[build]
  publish = "public"
  command = ""

[[redirects]]
  from = "/*"
  to = "/public/index.html"
  status = 200

[context.production]
  environment = { SITE_NAME = "BookBoanerges" }

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
```

---

## Vercel

### Step 1: Create Account

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub

### Step 2: Import Project

1. Click **New Project**
2. Import from GitHub
3. Select BookBoanerges repository
4. Configure:
   - Framework: None (static)
   - Root Directory: ./
   - Output Directory: public
5. Click **Deploy**

### Step 3: Custom Domain

1. Go to **Settings** → **Domains**
2. Add your custom domain
3. Update DNS records as instructed

### Vercel Advantages
- ✅ Free tier with generous limits
- ✅ Extremely fast (edge network)
- ✅ Automatic HTTPS
- ✅ One-click rollbacks
- ✅ Analytics
- ✅ Environment variables
- ✅ Preview deployments

---

## Traditional Hosting

### Using cPanel Hosting

#### Step 1: FTP Access

```bash
# Install FTP client (FileZilla, WinSCP, or Cyberduck)
# Connect using:
- Host: ftp.yourdomain.com
- Username: cPanel username
- Password: cPanel password
- Port: 21
```

#### Step 2: Upload Files

1. Navigate to `public_html` folder
2. Upload contents of `/public` folder
3. Ensure proper file permissions (644 for files, 755 for directories)

#### Step 3: Configure

If you need URL rewriting (optional):

Create `.htaccess` in `public_html`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
</IfModule>
```

#### Step 4: Verify

Visit `https://yourdomain.com` and verify the site loads correctly.

### Using AWS S3 + CloudFront

#### Step 1: Create S3 Bucket

```bash
# Using AWS CLI
aws s3 mb s3://bookboanerges-bucket --region us-east-1
```

#### Step 2: Upload Files

```bash
# Sync public folder to S3
aws s3 sync ./public s3://bookboanerges-bucket --delete
```

#### Step 3: Enable Static Website Hosting

1. Go to bucket properties
2. Enable "Static website hosting"
3. Set index document to `index.html`

#### Step 4: Set CloudFront

1. Create CloudFront distribution
2. Set origin to S3 bucket
3. Enable HTTPS
4. Configure custom domain

---

## Docker

### Create Dockerfile

Create `Dockerfile` in project root:

```dockerfile
# Use lightweight image
FROM nginx:alpine

# Copy site files
COPY public /usr/share/nginx/html

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
```

### Create nginx.conf

```nginx
server {
    listen 80;
    server_name _;

    root /usr/share/nginx/html;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/plain text/css text/javascript 
               application/javascript application/json;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA routing
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Build and Run

```bash
# Build image
docker build -t bookboanerges .

# Run container
docker run -p 8080:80 bookboanerges

# Access at http://localhost:8080
```

### Deploy to Docker Hub

```bash
# Tag image
docker tag bookboanerges yourusername/bookboanerges:latest

# Login to Docker Hub
docker login

# Push
docker push yourusername/bookboanerges:latest

# Pull and run anywhere
docker run -p 80:80 yourusername/bookboanerges:latest
```

---

## Performance Optimization

### Pre-Deployment Checklist

#### 1. Minify Assets

```bash
# Minify CSS
cat src/styles/style.css | sed 's/\/\*.*\*\///g' | sed 's/  //g' > public/style.min.css

# Minify JavaScript
npm install -g terser
terser src/scripts/script.js -o public/script.min.js
```

#### 2. Optimize Images

```bash
# Convert PNG to WebP (better compression)
cwebp image.png -o image.webp

# Compress JPG
jpegoptim -m80 image.jpg

# Compress PNG
optipng -o2 image.png
```

#### 3. Lazy Load Images

Update HTML:

```html
<!-- Before -->
<img src="image.jpg" alt="Description">

<!-- After -->
<img loading="lazy" src="image.jpg" alt="Description">
```

#### 4. Add Service Worker for Caching

Create `public/sw.js`:

```javascript
const CACHE_NAME = 'bookboanerges-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/src/styles/style.css',
  '/src/scripts/script.js',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

Register in HTML:

```html
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
</script>
```

### Performance Metrics

Check with:

1. **Google PageSpeed Insights**
   - Go to [pagespeed.web.dev](https://pagespeed.web.dev)
   - Enter your URL
   - Target: 90+ score

2. **GTmetrix**
   - Go to [gtmetrix.com](https://gtmetrix.com)
   - Analyze your site
   - Target: A grade

3. **WebPageTest**
   - Go to [webpagetest.org](https://webpagetest.org)
   - Full page test
   - Analyze results

### Target Metrics

- **First Contentful Paint (FCP)**: < 1.8s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Time to Interactive (TTI)**: < 3.8s

---

## Troubleshooting

### Issue: 404 Errors on Navigation

**Problem**: Pages return 404 when navigating

**Solution**: Configure server to serve `index.html` for all routes

GitHub Pages:
```bash
# Create 404.html in public folder
cp public/index.html public/404.html
```

Netlify: Already handles this automatically

Apache (.htaccess):
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Issue: CSS/JS Not Loading

**Problem**: Styles and scripts don't load

**Solution**: Check file paths

```html
<!-- Correct relative paths -->
<link rel="stylesheet" href="src/styles/style.css">
<script src="src/scripts/script.js"></script>

<!-- Update if deploying in subdirectory -->
<link rel="stylesheet" href="/BookBoanerges/src/styles/style.css">
```

### Issue: Images Not Displaying

**Problem**: Images appear broken

**Solution**: Fix image paths

```html
<!-- Correct paths -->
<img src="public/images/book-1.png" alt="Book">

<!-- If using absolute URLs -->
<img src="/images/book-1.png" alt="Book">
```

### Issue: HTTPS Not Redirecting

**Problem**: Site accessible via HTTP but should be HTTPS

**Solution**: Configure redirects

Netlify: Automatic

Traditional hosting (`.htaccess`):
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### Issue: Animations Laggy

**Problem**: Animations stutter on deployment

**Solution**: Enable hardware acceleration

```css
.animated-element {
  transform: translateZ(0);  /* Enable GPU acceleration */
  will-change: transform;
  backface-visibility: hidden;
}
```

---

## Maintenance

### Monitoring

Set up monitoring to track:

1. **Uptime**
   - Uptime monitoring service (e.g., Pingdom, StatusCake)
   - Alerts for downtime

2. **Performance**
   - Google Analytics for traffic
   - Speed monitoring (Lighthouse CI)
   - Error tracking (Sentry)

3. **Security**
   - SSL certificate expiration
   - Security header checks
   - Dependency updates

### Regular Updates

```bash
# Check for dependency updates
npm outdated

# Update packages
npm update

# Check security vulnerabilities
npm audit
```

---

## Next Steps

After deployment:

1. ✅ Test all functionality in production
2. ✅ Monitor performance metrics
3. ✅ Set up analytics
4. ✅ Configure email notifications
5. ✅ Document deployment process
6. ✅ Create disaster recovery plan

---

**Last Updated**: July 2026 | **Status**: Production Ready
