# BLAWG - Modern Travel Blog UI

A responsive, modern blog UI built with React, Vite, and Tailwind CSS. Inspired by the BLAWG Framer design.

## 🚀 Features

- **Home Page**: Hero section with featured stats and recent stories grid
- **Stories Page**: Browse all stories with category filtering and search functionality
- **Story Detail**: Full story view with author information and metadata
- **Bookmarks**: Save and manage your favorite stories
- **Writers**: Explore writer profiles and apply to become a writer
- **Pricing**: Subscription plans and pricing information
- **Authentication**: Sign In and Sign Up pages
- **Responsive Design**: Mobile-first, works on all screen sizes
- **Dark Mode Support**: Built-in dark mode functionality
- **Modern UI**: Clean, minimal design with smooth transitions

## 🛠️ Tech Stack

- **React 18**: JavaScript library for building user interfaces
- **Vite**: Lightning-fast build tool and development server
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React Router v6**: Client-side routing

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm

### Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5174/`

### Build for Production

```bash
npm run build
```

## 🏗️ Project Structure

```
src/
  ├── components/
  │   ├── Header.tsx         # Navigation header
  │   ├── Footer.tsx         # Footer with links and newsletter
  │   ├── Hero.tsx           # Hero section with CTA
  │   └── StoryCard.tsx      # Story card component
  ├── pages/
  │   ├── Home.tsx           # Homepage with recent stories
  │   ├── Stories.tsx        # All stories with category filtering
  │   ├── StoryDetail.tsx    # Individual story page
  │   ├── Bookmarks.tsx      # Saved bookmarks (localStorage)
  │   ├── Writers.tsx        # Writer profiles and FAQs
  │   ├── Pricing.tsx        # Subscription pricing tiers
  │   ├── SignIn.tsx         # Sign in page
  │   └── SignUp.tsx         # Sign up page
  ├── data/
  │   └── mockData.ts        # Mock blog stories and authors data
  ├── App.tsx                # Main app component & router setup
  ├── App.css                # Global component styles
  ├── index.css              # Tailwind CSS directives
  └── main.tsx               # React app entry point
```

## 🎨 Pages & Routes

| Route          | Page         | Description                                       |
| -------------- | ------------ | ------------------------------------------------- |
| `/`            | Home         | Landing page with hero section and recent stories |
| `/stories`     | Stories      | Browse all stories with category filters & search |
| `/story/:slug` | Story Detail | Full story view with author info                  |
| `/bookmarks`   | Bookmarks    | Saved stories (using localStorage)                |
| `/writers`     | Writers      | Writer profiles and application info              |
| `/pricing`     | Pricing      | Subscription tier and pricing info                |
| `/signin`      | Sign In      | User authentication page                          |
| `/signup`      | Sign Up      | New account creation page                         |

## 🎯 Key Features Explained

### Story Filtering

- Filter stories by category (Couples Travel, Solo Travel, Family Travel)
- Search stories by title or excerpt
- Responsive grid layout (1 col on mobile, 2 on tablet, 3 on desktop)

### Bookmarks System

- Save favorite stories with one click
- Data persisted in browser localStorage
- Remove bookmarks from the bookmarks page

### Dark Mode

- Automatic detection of system preference
- Smooth color transitions
- Tailwind CSS dark mode support

### Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Accessible navigation and readable typography

## 🛠️ Customization

### Update Colors & Theme

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#000',
      secondary: '#666',
    }
  },
}
```

### Replace Mock Data

Update `src/data/mockData.ts` to connect to your backend API instead of using mock data.

### Modify Navigation

Edit `src/components/Header.tsx` to add/remove navigation links.

## 📚 Technology Details

- **Vite Configuration**: `vite.config.ts` - Optimized for React development
- **TypeScript**: Strict mode enabled for type safety
- **Tailwind CSS**: Configured with responsive breakpoints and dark mode
- **React Router**: v6 with file-based routing pattern

## 🚀 Deploy

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages

```bash
npm run build
# Upload dist folder contents to your gh-pages branch
```

## 🐛 Troubleshooting

**Port 5174 already in use**: Vite will automatically use the next available port
**Dark mode not working**: Check browser's system preference settings
**Bookmarks not persisting**: Ensure localStorage is not disabled in browser

## 📄 License

MIT - Feel free to use for personal and commercial projects

---

Built with ❤️ using React, Vite, and Tailwind CSS. Inspired by BLAWG Framer design.
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```

```
