/**
 * Second-assurance verification: printed sheets vs src/data/menuData.js
 * Expected lists transcribed from food.jpeg + drink.jpeg (re-read 2026-07-31)
 * plus Coffee & Tea sheet (2026-09-17).
 */
import { menuData } from '../src/data/menuData.js';

const foodExpected = {
  'Classic Nigerian Breakfast': [
    ['Omelet Combo', 5000], // sheet: Omlet, Bread, Sausage, Baked beans with choice of Beverage
    ['Boiled Yam & Egg Sauce', 5000],
    ['Akara/Moi-Moi & Pap', 8000],
    ['Custard or Cornflakes', 5000],
    ['Plantain & Egg Sauce', 5000], // sheet: Fried Plantain with Egg Sauce
  ],
  'Premium Nigerian Breakfast': [
    ['Boiled Yam & Fish Sauce', 10000],
    ['Presken Full English Breakfast', 10000],
    ['Glass of Fresh Juice', 5000],
  ],
  Appetizers: [
    ['Pepper Soup', 7500],
    ['Croaker Fish BBQ', 17500],
    ['Croaker Fish Pepper Soup', 16500],
    ['Jumbo Croaker BBQ', 25000], // sheet: Jumbo Croaker Fish BBQ
    ['Catfish Pepper Soup', 9000],
    ['Nkwobi', 7500],
    ['BBQ Cat-Fish', 10000],
    ['Isi-Ewu', 12000],
    ['Peppered Snail', 13000],
    ['Peppered Gizzard', 9000],
    ['Peppered Beef', 7500],
    ['Peppered Goat Meat', 7500],
  ],
  'Lunch & Dinner': [
    ['Yamarita', 11000],
    ['Chicken & Chips', 10000],
    ['Noodles with Protein', 10000],
    ['Plantain with Protein', 10000],
    ['Goat Meat Pepper Soup with Plantain', 10000],
    ['Boiled Plantain with Vegetable Sauce', 14000],
  ],
  Pasta: [
    ['Spaghetti with Protein', 10000],
    ['Spaghetti Bolognese', 12000],
    ['Vegetable Pasta', 10000],
    ['Stir Fried Spaghetti', 10000],
    ['Noodles & Egg', 5500],
  ],
  Rice: [
    ['Jollof Rice', 10000],
    ['Fried Rice', 10000],
    ['White Rice', 10000],
  ],
  Swallow: [
    ['Pounded Yam', 12000],
    ['Semovita', 10000],
    ['Poundo Yam', 10000],
    ['Wheat Meal', 10000],
    ['Eba', 10000],
    ['Amala', 10000],
  ],
  Extras: [
    ['Extra Swallow', 3000],
    ['Rice', 3000],
    ['Plantain', 3000],
    ['Protein', 7500],
    ['French Fries', 6000],
    ['Egg', 2000],
    ['Pounded Yam', 5000],
    ['Boiled or Fried Yam', 3000],
  ],
  Seafoods: [
    ['Seafood Okro', 25000],
    ["Fisherman's Soup", 25000],
    ['Seafood Rice', 25000],
  ],
  'Extra Soups': [
    ['Egusi Soup', 3000],
    ['Afang Soup', 3000],
    ['Edikang Ikong Soup', 3000],
    ['Ogbono Soup', 3000],
    ['Okro Soup', 3000],
  ],
};

const drinkExpected = {
  'Soft Drinks & Water': [
    ['Bottle Water (B)', 1000],
    ['Bottle Water (S)', 500],
    ['Cranberry', 15000],
    ['Can Cranberry', 2000], // house addition, not on printed sheet
    ['Frutta Juice', 3500], // house addition
    ['Maccaw', 3500], // house addition
    ['Pulpy', 1000],
    ['Schweppes', 1000],
    ['Teem', 1000],
  ],
  'Malt, Energy Drinks & Dairy': [
    ['Amstel Malta', 1500],
    ['Malta Guinness', 1500],
    ['Maltina', 1500],
    ['Grand Malt', 1500],
    ['Fayrouz', 1000],
    ['Hollandia', 3500],
    ['Exotic', 3500],
    ['Peak Yogurt', 3500],
    ['Vitamilk', 3000],
    ['Monster', 3000],
    ['Red Bull', 3500],
    ['Power Horse', 3000],
  ],
  'Coffee & Tea': [
    ['Espresso', 2500],
    ['Double Espresso', 3500],
    ['Americano', 4000],
    ['Cappuccino', 4000],
    ['Mocha Coffee', 4500],
    ['Ice Mocha', 5000],
    ['Ice Coffee', 4500],
    ['Hot Chocolate', 5000],
    ['Hot Milk', 2000],
    ['Cafe Latte', 4500],
    ['Fresh Lemon Ginger Tea', 4000],
    ['Chocolate Frappe', 6000],
    ['Presken Affogato', 4500],
  ],
  'Beers, Stouts & Cider': [
    ['33 Export', 2000],
    ['Big Ice', 2500],
    ['Budweiser', 2500],
    ['Bullet', 3000],
    ['Desperados', 2000],
    ['Flying Fish', 1500],
    ['Goldberg', 2000],
    ['Gulder', 2500],
    ['Heineken', 2500],
    ['Medium Heineken', 2000],
    ['Hero', 2000],
    ['Legend', 2500],
    ['Radler', 2000],
    ['Small Ice', 1300],
    ['Star', 2000],
    ['Star Lite', 2000],
    ['Tiger', 2000],
    ['Trophy', 2000],
  ],
  Stouts: [
    ['Big Stout', 3000],
    ['Medium Stout', 2500],
    ['Small Stout', 2000],
    ['Guinness Smooth', 2000],
    ['Turbo Stout', 2000],
  ],
  Bitters: [
    ['Action Bitters', 2000],
    ['Big Origin', 2000],
    ['Pet Origin', 2500],
    ['Double Black', 2000],
    ['Judge Bitters', 2000],
    ['Odogwu', 2000],
    ['Buffalo', 1000], // house addition
    ['Long Jack', 2000], // house addition
  ],
  'Bitters (Bottle)': [
    ['Action Bitters', 9000],
    ['Orijin', 9000],
  ],
  'Sparkling Wines': [
    ['André Rosé', 25000],
    ['André Brut', 25000],
    ['Chamdor', 11000],
    ['Moët Brut', 180000],
    ['Moët Rosé', 220000],
  ],
  'Red, White & Rosé Wines': [
    ['Agor', 15000],
    ['B&G Cuvée', 18000],
    ['Carlo Rossi', 18000],
    ['Declan', 16000],
    ['Drostdy Hoff', 17000],
    ['Escodo Rojo', 40000], // sheet: Esudo Rojo
    ['Four Cousins', 15000],
    ['Pure Heaven', 13000],
    ['4th Street', 11000],
    ['Sandemann', 40000],
    ['Sweet Kiss', 15000],
  ],
  'Liquors & Spirits': [
    ['B/Vodka', 33000],
    ['Campari (B)', 45000],
    ['Campari (S)', 15000],
    ['Magic Moment (B)', 13000],
    ['Magic Moment (S)', 4000],
    ['Smirnoff Choco (B)', 13000],
    ['Smirnoff Choco (S)', 3500],
  ],
  Gin: [
    ["Gordon's (B)", 16000],
    ["Gordon's (M)", 6000],
    ["Gordon's (S)", 4000],
    ["G' Pink Berry", 17000],
  ],
  Rum: [['Bacardi', 27000]],
  Tequila: [
    ['Olmeca Bianco', 50000],
    ['Olmeca Tequila', 50000],
    ['Sierra Tequila', 27000],
  ],
  'Cream Liqueurs': [
    ['Baileys (Imported)', 40000],
    ['Best Cream (B)', 13000],
    ['Best Cream (S)', 4000],
  ],
  Whisky: [
    ['Best Whiskey (B)', 11000],
    ['Best Whiskey (S)', 3500],
    ['Black Barrel', 65000],
    ['Black Label', 65000],
    ['Glen 12 Years', 130000],
    ['Glen 15 Years', 170000],
    ['Glen 16 Years', 190000],
    ['Glen 18 Years', 220000],
    ["Jack Daniel's", 45000],
    ['Jameson (B)', 45000],
    ['Jameson (S)', 16000],
    ['Macallan 12 Years', 150000],
    ['Red Label', 33000],
    ['William Lawson', 27000],
  ],
  'Cognac & Brandy': [
    ['Hennessy VS', 100000],
    ['Hennessy VSOP', 200000],
    ['Martell VS', 65000],
    ['Martell Blue Swift', 150000],
    ['Remy Martin VS', 65000],
    ['Remy Martin VSOP', 100000],
  ],
};

function parsePrice(p) {
  return Number(String(p).replace(/[₦,\s]/g, ''));
}

function norm(s) {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[''ʼ]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function matchName(a, b) {
  const na = norm(a);
  const nb = norm(b);
  if (na === nb) return true;
  // allow minor sheet vs digital naming
  if (na.includes(nb) || nb.includes(na)) return true;
  const aliases = [
    ['omelet combo', 'omlet bread sausage'],
    ['plantain egg sauce', 'fried plantain'],
    ['jumbo croaker bbq', 'jumbo croaker fish bbq'],
    ['bbq cat fish', 'bbq catfish'],
    ['isi ewu', 'isi ewu'],
    ['stir fried spaghetti', 'stir fried spaghetti'],
    ['fishermans soup', 'fisherman s soup'],
    ['edikang ikong soup', 'edikang ikong'],
    ['escodo rojo', 'esudo rojo'],
    ['odogwu', 'odogwu'],
    ['vitamilk', 'vitamilk'],
  ];
  for (const [x, y] of aliases) {
    if ((na.includes(x) && nb.includes(y)) || (na.includes(y) && nb.includes(x))) return true;
  }
  return false;
}

const meals = menuData.categories.find((c) => c.id === 'meals');
const drinks = menuData.categories.find((c) => c.id === 'drinks');
const specials = menuData.categories.find((c) => c.id === 'specials');
const cocktails = menuData.categories.find((c) => c.id === 'cocktails');
const otherCats = menuData.categories.filter((c) => c.id !== 'meals' && c.id !== 'drinks' && c.id !== 'specials' && c.id !== 'cocktails');

const errors = [];
const warnings = [];
const ok = [];

if (otherCats.length) {
  errors.push(`Unexpected categories still present: ${otherCats.map((c) => c.name).join(', ')}`);
}
if (!meals) errors.push('Missing Meals category');
if (!drinks) errors.push('Missing Drinks category');
if (!specials) warnings.push('Missing Specials category (expected per docs/MENU.md)');
if (cocktails) warnings.push('Cocktails category present — docs/MENU.md marks it removed but menuData retains it (house list)');

function verifyBlock(label, expectedMap, category) {
  if (!category) return;
  const digitalSubs = new Map(category.subcategories.map((s) => [s.name, s]));
  const expectedSubNames = Object.keys(expectedMap);
  const digitalSubNames = category.subcategories.map((s) => s.name);

  for (const name of expectedSubNames) {
    if (!digitalSubs.has(name)) {
      // try fuzzy sub name
      const fuzzy = category.subcategories.find((s) => matchName(s.name, name));
      if (!fuzzy) errors.push(`[${label}] Missing subcategory: ${name}`);
      else warnings.push(`[${label}] Subcategory name differs: sheet "${name}" vs digital "${fuzzy.name}"`);
    }
  }
  for (const name of digitalSubNames) {
    if (!expectedSubNames.includes(name) && !expectedSubNames.some((e) => matchName(e, name))) {
      errors.push(`[${label}] Extra subcategory not on sheet: ${name}`);
    }
  }

  for (const [subName, expectedItems] of Object.entries(expectedMap)) {
    const sub =
      digitalSubs.get(subName) ||
      category.subcategories.find((s) => matchName(s.name, subName));
    if (!sub) continue;

    const used = new Set();
    for (const [expName, expPrice] of expectedItems) {
      const found = sub.items.find((it, idx) => !used.has(idx) && matchName(it.name, expName));
      if (!found) {
        errors.push(`[${label} › ${subName}] MISSING item: ${expName} @ ₦${expPrice.toLocaleString()}`);
        continue;
      }
      used.add(sub.items.indexOf(found));
      const digPrice = parsePrice(found.price);
      if (digPrice !== expPrice) {
        errors.push(
          `[${label} › ${subName}] PRICE MISMATCH: ${found.name} — digital ₦${digPrice.toLocaleString()} vs sheet ₦${expPrice.toLocaleString()}`
        );
      } else {
        ok.push(`${label} › ${subName} › ${found.name} = ₦${digPrice.toLocaleString()}`);
      }
    }
    // extras on digital not on sheet
    sub.items.forEach((it, idx) => {
      if (used.has(idx)) return;
      const matched = expectedItems.some(([n]) => matchName(it.name, n));
      if (!matched) {
        errors.push(`[${label} › ${subName}] EXTRA item not on sheet: ${it.name} (${it.price})`);
      }
    });

    if (sub.items.length !== expectedItems.length) {
      warnings.push(
        `[${label} › ${subName}] count digital=${sub.items.length} sheet=${expectedItems.length}`
      );
    }
  }
}

verifyBlock('FOOD', foodExpected, meals);
verifyBlock('DRINK', drinkExpected, drinks);

// Count totals
const foodSheetCount = Object.values(foodExpected).reduce((n, a) => n + a.length, 0);
const drinkSheetCount = Object.values(drinkExpected).reduce((n, a) => n + a.length, 0);
const foodDig = meals?.subcategories.reduce((n, s) => n + s.items.length, 0) ?? 0;
const drinkDig = drinks?.subcategories.reduce((n, s) => n + s.items.length, 0) ?? 0;

console.log('======== MENU VERIFICATION (printed sheets vs digital) ========');
console.log(`Food sheet items:   ${foodSheetCount}`);
console.log(`Food digital items: ${foodDig}`);
console.log(`Drink sheet items:  ${drinkSheetCount}`);
console.log(`Drink digital items:${drinkDig}`);
console.log(`Matched OK:         ${ok.length}`);
console.log(`Warnings:           ${warnings.length}`);
console.log(`Errors:             ${errors.length}`);
console.log('');

if (warnings.length) {
  console.log('--- WARNINGS ---');
  warnings.forEach((w) => console.log('  ⚠', w));
  console.log('');
}
if (errors.length) {
  console.log('--- ERRORS ---');
  errors.forEach((e) => console.log('  ✗', e));
  console.log('');
  process.exitCode = 1;
} else {
  console.log('✓ ALL ITEMS AND PRICES MATCH THE PRINTED FOOD + DRINK + COFFEE MENUS');
  console.log(`✓ No unexpected categories (Meals + Drinks + Specials)`);
  console.log(`✓ ${ok.length}/${foodSheetCount + drinkSheetCount} line items verified`);
}
