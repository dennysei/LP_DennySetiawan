# Denny Setiawan — Personal Portfolio

Professional consulting portfolio built with React + Vite.

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
# → Opens at http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

## Adding Your Photos

Photo assets are referenced by placeholder path. To add your actual photos from
`D:\Pribadi\Portofolio\Asset`, copy them into:

```
denny-portfolio/public/assets/
```

Then reference them in the relevant component like:
```jsx
<img src="/assets/your-photo.jpg" alt="Denny Setiawan" />
```

Recommended placements:
- Hero section photo → `/assets/hero.jpg` (professional headshot)
- About page photo → `/assets/about.jpg`
- Case study thumbnails → `/assets/rmoda.jpg`, `/assets/dashboard.jpg`, etc.

## Pages

| Route          | Page              |
|----------------|-------------------|
| /              | Home              |
| /about         | About             |
| /experience    | Experience        |
| /work          | Work (index)      |
| /work/:slug    | Case Study detail |
| /services      | Services          |
| /skills        | Skills            |
| /contact       | Contact           |

## Updating Content

All content is separated from components in `/src/data/`:

- `experience.js` — Job history
- `projects.js`   — Case studies
- `services.js`   — Services
- `skills.js`     — Skills list

## Deployment

Any static host works: Vercel, Netlify, GitHub Pages.

```bash
npm run build
# Upload /dist folder
```
