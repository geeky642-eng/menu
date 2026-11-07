# Digital Menu — Source of Truth

**Last updated:** 2026-09-17  
**Data file:** `src/data/menuData.js`

## Policy

| Source | Digital category | Status |
|--------|------------------|--------|
| Printed Food Menu (`food.jpeg`) | **Meals** | Live — prices matched to sheet |
| Printed Drink Menu (`drink.jpeg`) | **Drinks** | Live — prices matched to sheet |
| House specials list (digital) | **Specials** | Live — restored; not on food/drink sheets |
| Continental menu | **Continental Dishes** | **Removed** — not on current printed sheets |
| Cocktail menu | **Cocktails** | **Removed** — not on current printed sheets |

### Intentionally still removed

These categories stay **off** the digital menu until an official printed sheet is provided:

1. **Continental Dishes** — e.g. Chicken Chinese, Spaghetti Carbonara/Neapolitan, kebabs, Chef Salad, Noodles St. German, Chicken Escalope, etc.  
2. **Cocktails** — cocktail menu, mocktails, fresh smoothies, juices, and shots  

Do **not** re-add Continental or Cocktails without a new printed source.

When Meals/Drinks prices or items change:

1. Update from the printed sheet (or an official export of it).  
2. Edit only `src/data/menuData.js`.  
3. Keep this document in sync (category list + counts).  
4. Run `npm run build` (and optionally `node scripts/verify-menu.mjs` for food/drink line items).

---

## Current structure

### Categories (3)

1. **Meals** — 10 subcategories, **56 items**  
2. **Specials** — 2 subcategories, **35 items**  
3. **Drinks** — 16 subcategories, **116 items**  

**Total: 207 items** *(207 excl. Cocktails house list; 234 incl. Cocktails)*

Category tabs: **All · Meals · Specials · Drinks**

---

### Meals subcategories (food.jpeg)

| Subcategory | Items |
|-------------|------:|
| Classic Nigerian Breakfast | 5 |
| Premium Nigerian Breakfast | 3 |
| Appetizers | 12 |
| Lunch & Dinner | 6 |
| Pasta | 5 |
| Rice | 3 |
| Swallow | 6 |
| Extras | 8 |
| Seafoods | 3 |
| Extra Soups | 5 |

### Specials subcategories

| Subcategory | Items | Notes |
|-------------|------:|-------|
| Presken Food Menu Special Meals | 28 | House specials; Seafood Okro / Fisherman Soup / Seafood Rice / Pounded Yam prices aligned with food sheet where they overlap |
| Special Soup | 7 | All ₦10,000 with choice of swallow |

### Drinks subcategories (drink.jpeg)

| Subcategory | Items |
|-------------|------:|
| Soft Drinks & Water | 6 |
| Malt, Energy Drinks & Dairy | 12 |
| Coffee & Tea | 13 |
| Beers, Stouts & Cider | 18 |
| Stouts | 5 |
| Bitters | 6 |
| Bitters (Bottle) | 2 |
| Sparkling Wines | 5 |
| Red, White & Rosé Wines | 11 |
| Liquors & Spirits | 7 |
| Gin | 4 |
| Rum | 1 |
| Tequila | 3 |
| Cream Liqueurs | 3 |
| Whisky | 14 |
| Cognac & Brandy | 6 |

---

## Item shape

```js
{
  id: 'sb1',
  name: 'Omelet Combo',
  description: 'Omelet, Bread, Sausage, Baked beans with choice of Beverage',
  price: '₦5,000',
  image: '/images/omelet-combo.png' // or '' if none
}
```

- Place images under `public/images/` (thumbnails under `public/images/thumbs/` when available).  
- Price format uses the naira sign and thousands separators, e.g. `₦12,000`.

---

## Change log (summary)

| Date | Change |
|------|--------|
| 2026-07-31 | Meals + Drinks prices aligned to printed food/drink sheets |
| 2026-07-31 | Removed Specials, Continental, Cocktails (sheet-only policy) |
| 2026-07-31 | **Restored Specials only**; Continental + Cocktails remain removed |
| 2026-09-17 | Coffee & Tea (13 items) inserted after Malt/Energy/Dairy per new price sheet — `src/data/menuData.js:coffee-tea` |

### Overlap note (Specials vs Meals)

These appear on both Meals (food sheet) and Specials with matching prices:

- Pounded Yam — ₦12,000  
- Sea Food Okro / Seafood Okro — ₦25,000  
- Fisherman Soup — ₦25,000  
- Sea Food Rice / Seafood Rice — ₦25,000  

---

## Related docs

| Doc | Status |
|-----|--------|
| [README.md](../README.md) | Active — app setup and features |
| [docs/MENU.md](./MENU.md) | Active — **this file**, menu source-of-truth |
| [docs/archive/menu-update-audit.DEPRECATED.md](./archive/menu-update-audit.DEPRECATED.md) | Deprecated — historical price-update audit |
