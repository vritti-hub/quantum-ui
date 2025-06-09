# GitHub Pages Setup for Quantum UI Storybook

## 🚀 Quick Setup Guide

Your Quantum UI Storybook is now configured for automatic deployment to GitHub Pages! Follow these steps to complete the setup:

### 1. GitHub Repository Settings

1. **Go to your repository on GitHub**
   - Navigate to `https://github.com/YOUR_USERNAME/quantum-ui`

2. **Configure GitHub Pages**
   - Go to **Settings** → **Pages** (in the left sidebar)
   - Under **Source**, select **GitHub Actions**
   - ✅ This tells GitHub to use our workflow file instead of the default Jekyll build

### 2. Enable GitHub Actions

1. **Check Actions are enabled**
   - Go to **Settings** → **Actions** → **General**
   - Ensure **"Allow all actions and reusable workflows"** is selected
   - Under **Workflow permissions**, select **"Read and write permissions"**

2. **Deploy to Pages permission**
   - The workflow already includes the necessary permissions for Pages deployment

### 3. Push Changes to Deploy

```bash
# Add all the new files
git add .

# Commit the changes
git commit -m "feat: add GitHub Pages deployment for Storybook

🚀 Generated with Claude Code

Co-Authored-By: Claude <noreply@anthropic.com>"

# Push to main branch (triggers deployment)
git push origin main
```

### 4. Monitor Deployment

1. **Check workflow execution**
   - Go to **Actions** tab in your repository
   - You should see the "Deploy Storybook to GitHub Pages" workflow running

2. **Access your deployed Storybook**
   - After successful deployment, your Storybook will be available at:
   - `https://YOUR_USERNAME.github.io/quantum-ui/`

## 📁 Files Created/Modified

### New Files:
- `.github/workflows/deploy-storybook.yml` - GitHub Actions workflow
- `GITHUB_PAGES_SETUP.md` - This setup guide

### Modified Files:
- `package.json` - Added `build-storybook:github` script
- `.storybook/main.ts` - Added base URL configuration for GitHub Pages

## 🔧 How It Works

### Workflow Triggers
- **Automatic**: Deploys on every push to `main` branch
- **Manual**: Can be triggered manually from Actions tab using `workflow_dispatch`

### Build Process
1. **Checkout code** from main branch
2. **Setup Node.js 20** with npm cache
3. **Install dependencies** using `npm ci`
4. **Build Storybook** with production settings (`NODE_ENV=production`)
5. **Add .nojekyll file** to disable Jekyll processing
6. **Deploy to GitHub Pages** using official GitHub actions

### URL Configuration
- **Local development**: `http://localhost:6006/`
- **GitHub Pages**: `https://YOUR_USERNAME.github.io/quantum-ui/`
- Base URL is automatically configured based on `NODE_ENV`

## 🎛️ Available Scripts

```bash
# Local development
npm run storybook              # Start dev server at localhost:6006

# Local production build
npm run build-storybook        # Build for local/other hosting

# GitHub Pages build
npm run build-storybook:github # Build with correct base URL for GitHub Pages
```

## 🐛 Troubleshooting

### Common Issues:

**1. 404 errors for assets**
- ✅ **Fixed**: Base URL is configured in `.storybook/main.ts`
- The build script sets `NODE_ENV=production` to trigger the base URL

**2. Workflow fails on first run**
- Go to **Settings** → **Pages** and ensure **Source** is set to **GitHub Actions**
- Check that **Actions** are enabled in repository settings

**3. Permission denied errors**
- Ensure workflow permissions are set to **"Read and write permissions"**
- The workflow includes `id-token: write` permission for Pages deployment

**4. Jekyll processing conflicts**
- ✅ **Fixed**: Workflow adds `.nojekyll` file to disable Jekyll

### Manual Verification:

Test the GitHub-specific build locally:
```bash
npm run build-storybook:github
cd storybook-static
python -m http.server 8000
# Visit http://localhost:8000/quantum-ui/
```

## 📊 Component Coverage

Your Storybook includes stories for all production-ready components:

- **Button** - Intent-based variants with animations
- **TextField** - State-driven inputs with glassmorphism
- **Paper** - Surface variants including glass effects  
- **Typography** - Complete text system with dual fonts

## 🔄 Auto-Deployment

Every push to `main` will automatically:
1. Build your Storybook with the latest component changes
2. Deploy to GitHub Pages
3. Update the live documentation at your GitHub Pages URL

## 🎯 Next Steps

1. **Push the changes** to trigger first deployment
2. **Share the URL** with your team once deployed
3. **Customize domain** (optional): Add custom domain in Pages settings
4. **Add more stories** as you develop new components

---

**Deployment URL**: `https://YOUR_USERNAME.github.io/quantum-ui/` (replace YOUR_USERNAME)

**Local Development**: `npm run storybook` → `http://localhost:6006/`