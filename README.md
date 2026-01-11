# Sachin Bhanushali - Author Website

This is a static author portfolio designed to verify content ownership for Google Play Books and Amazon KDP.

## Project Info
- **Author:** Sachin Bhanushali
- **Imprints:** Simple Pages Studio, Stellar Pages Studio
- **Tech Stack:** React, TypeScript, Tailwind CSS

## How to Deploy to GitHub Pages

Since this is a React project, you need to build it before deploying, or use a GitHub Action. However, to keep it extremely simple as a "static" site:

### Option 1: Standard Build (Recommended)
1. Initialize a git repo: `git init`
2. Connect to your GitHub repo.
3. Install dependencies: `npm install`
4. Build the project: `npm run build`
5. The `dist` or `build` folder contains your static files.
6. Upload the contents of the build folder to a generic static host or configure `gh-pages` package.

### Option 2: Quick Deployment (gh-pages)
1. Open `package.json` and add:
   ```json
   "homepage": "https://<your-username>.github.io/<repo-name>",
   ```
2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Add these scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Run:
   ```bash
   npm run deploy
   ```

## Customizing Content
- **Books:** Edit `constants.ts` to add your real book titles, covers, and links.
- **Images:** Replace placeholder URLs in `constants.ts` with your actual book cover images (upload them to an `/assets` folder or use external links).
