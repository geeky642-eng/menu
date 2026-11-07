# Presken Hotels & Resorts Menu App

A responsive React and Vite digital menu for Presken Hotels & Resorts. The app presents the official **Food** and **Drink** menus in a polished mobile-first experience with search, category browsing, item photography, and contact links.

**Menu source of truth:** [docs/MENU.md](./docs/MENU.md) — live categories: **Meals**, **Specials**, **Drinks** (incl. Coffee & Tea). Continental Dishes and Cocktails remain removed until a printed sheet is provided.

## Features

- Premium Presken-branded interface with hero section, logo, warm color system, and custom typography.
- Hierarchical menu structure: categories, subcategories, and menu items.
- Category tabs for browsing the full menu or a specific section.
- Real-time search by item name or description.
- Expandable subcategory sections with item counts.
- Expandable item descriptions for longer menu details.
- Responsive mobile, tablet, and desktop layouts.
- VAT notice for drink pricing.
- Contact footer with head office address, phone links, map link, WhatsApp chat link, and social links.
- Optimized image loading:
  - First six visible menu images load eagerly with high fetch priority.
  - Remaining menu images lazy-load.
  - Menu cards use generated 260px thumbnails from `public/images/thumbs`.
  - Original images remain available as fallbacks.
  - Mobile hero background uses a smaller optimized image.
  - Image dimensions are declared to reduce layout shifts.

## Tech Stack

- React 18
- Vite 5
- CSS custom properties
- Google Fonts: Inter and Playfair Display

## Getting Started

### Prerequisites

Install Node.js and npm:

- [Download Node.js](https://nodejs.org/)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open the local URL shown in the terminal. Vite usually serves the app at:

```text
http://localhost:5173
```

### Production Build

```bash
npm run build
```

The production output is generated in `dist/`.



## Project Structure

```text
PK-menu/
+-- public/
|   +-- images/
|       +-- thumbs/              # Optimized menu thumbnails
|       +-- hero-bg.png          # Desktop hero background
|       +-- hero-bg-mobile.jpg   # Optimized mobile hero background
+-- src/
|   +-- components/
|   |   +-- CategoryTabs.jsx
|   |   +-- Hero.jsx
|   |   +-- MenuItem.jsx
|   |   +-- MenuSection.jsx
|   |   +-- SubcategorySection.jsx
|   +-- data/
|   |   +-- menuData.js          # Categories, subcategories, and menu items
|   +-- App.jsx
|   +-- App.css
|   +-- index.css
|   +-- main.jsx
+-- index.html
+-- package.json
+-- vite.config.js
```

## Updating Menu Content

Menu content lives in `src/data/menuData.js`. Full policy, category lists, and item counts: **[docs/MENU.md](./docs/MENU.md)**.

Prefer official printed food/drink sheets for Meals and Drinks. Specials is a house list and Coffee & Tea follows the new coffee price sheet. Do not reintroduce **Continental** or **Cocktails** without a new printed source (see [docs/MENU.md](./docs/MENU.md)).

Each category contains subcategories, and each subcategory contains items:

```js
{
  id: 'meals',
  name: 'Meals',
  subcategories: [
    {
      id: 'standard-breakfast',
      name: 'Classic Nigerian Breakfast',
      items: [
        {
          id: 'sb1',
          name: 'Omelet Combo',
          description: 'Omelet, Bread, Sausage, Baked beans with choice of Beverage',
          price: '₦5,000',
          image: '/images/omelet-combo.png'
        }
      ]
    }
  ]
}
```

When adding a new image, place the original file in `public/images/` and add its path to the menu item.

## Image Optimization Notes

Menu cards are rendered from thumbnails in `public/images/thumbs/` for faster mobile loading. The app derives the thumbnail path from the original image path.

For example:

```text
/images/omelet-combo.png
```

maps to:

```text
/images/thumbs/omelet-combo-png.jpg
```

If the thumbnail is missing, the app falls back to the original image automatically.


## Quality Checks

Run a production build before deploying:

```bash
npm run build
```

## Technologies Used

- **React 18** - Modern UI library
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom styling with CSS variables
- **Google Fonts** - Inter and Playfair Display

## License

Copyright (c) 2026 Presken Hotels & Resorts Limited. All rights reserved.
