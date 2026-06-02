# 🗂 Portfolio — Business Analyst & Project Manager

A clean, editorial-style React + Vite portfolio website. 

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## ✏️ Customizing Your Portfolio

All content is in one file: **`src/data/works.js`**

### 👤 Edit your profile
```js
export const profile = {
  name: "Your Name",
  role: "Business Analyst & Project Manager",
  tagline: "...",
  bio: `...`,
  email: "hello@yourname.com",
  socials: {
    linkedin: "https://linkedin.com/in/yourname",
    instagram: "https://instagram.com/yourname",
    twitter: "https://twitter.com/yourname",
  },
  skills: ["Skill 1", "Skill 2", ...],
  experiences: [
    {
      role: "Your Role",
      company: "Company Name",
      period: "2023 — Present",
      desc: "What you did there.",
    },
  ],
}
```

### 📁 Add a new project / work
Add an object to the `works` array in `src/data/works.js`:

```js
{
  id: "unique-slug",           // used in URL: /works/unique-slug
  title: "Project Title",
  category: "Business Analysis", // used for filtering
  tags: ["Tag1", "Tag2"],
  thumbnail: "/works/image.jpg", // put image in /public/works/
  date: "2024",
  summary: "One-sentence description shown in the card.",
  content: [
    { type: "heading", text: "Background" },
    { type: "paragraph", text: "..." },
    { type: "image", src: "/works/detail.jpg", caption: "Caption here" },
    { type: "list", items: ["Result 1", "Result 2"] },
  ],
}
```

### 🖼 Adding images
Place image files in the **`/public/works/`** folder, then reference them as:
```
"/works/your-image.jpg"
```

### 🏷 Content block types
| Type | Fields |
|------|--------|
| `heading` | `text` |
| `paragraph` | `text` |
| `image` | `src`, `caption` |
| `list` | `items` (array of strings) |
| `quote` | `text`, `author` (optional) |

---

## 🌐 Deploying

**Vercel (recommended):**
```bash
npm install -g vercel
vercel
```

**Netlify:**
```bash
npm run build
# drag & drop the /dist folder to netlify.com
```

**GitHub Pages:**
Add `base: '/repo-name/'` to `vite.config.js`, then:
```bash
npm run build
```
