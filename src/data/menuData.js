// Hierarchical menu data structure for Presken
export const menuData = {
  categories: [
    {
      id: 'meals',
      name: 'Meals',
      subcategories: [
        {
          id: 'standard-breakfast',
          name: 'Classic Nigerian Breakfast',
          items: [
            { id: 'sb1', name: 'Omelet Combo', description: 'Omelet, Bread, Sausage, Baked beans with choice of Beverage', price: '₦5,000', image: '/images/omelet-combo.png' },
            { id: 'sb2', name: 'Boiled Yam & Egg Sauce', description: 'Fresh boiled yam with savory egg sauce', price: '₦5,000', image: '/images/yam-egg-sauce.png' },
            { id: 'sb3', name: 'Akara/Moi-Moi & Pap', description: 'Bean cakes or pudding with corn pap', price: '₦8,000', image: '/images/akara-pap.png' },
            { id: 'sb4', name: 'Custard or Cornflakes', description: 'Creamy custard or crunchy cornflakes', price: '₦5,000', image: '/images/custard-cornflakes.png' },
            { id: 'sb5', name: 'Plantain & Egg Sauce', description: 'Fried plantain with egg sauce', price: '₦5,000', image: '/images/plantain-egg-sauce.png' }
          ]
        },
        {
          id: 'english-breakfast',
          name: 'Premium Nigerian Breakfast',
          items: [
            { id: 'sb6', name: 'Boiled Yam & Fish Sauce', description: 'Fresh boiled yam with fish sauce', price: '₦10,000', image: '' },
            { id: 'eb2', name: 'Presken Full English Breakfast', description: '(Tomato/Plain/Spanish/Sardine) with Sausage & Baked Beans', price: '₦10,000', image: '/images/savory-english-breakfast.png' },
            { id: 'eb3', name: 'Glass of Fresh Juice', description: 'Fresh juice', price: '₦5,000', image: '' }
          ]
        },
        {
          id: 'appetizers',
          name: 'Appetizers',
          items: [
            { id: 'ap1', name: 'Pepper Soup', description: 'Chicken / Cow Tail / Cow Leg / Assorted Goat Meat / Turkey', price: '₦7,500', image: '/images/pepper-soup.png' },
            { id: 'ap2', name: 'Croaker Fish BBQ', description: 'Served with Chips', price: '₦17,500', image: '/images/croaker-bbq-chips.png' },
            { id: 'ap3', name: 'Croaker Fish Pepper Soup', description: 'Served with Yam or Rice', price: '₦16,500', image: '/images/croaker-pepper-soup.png' },
            { id: 'ap4', name: 'Jumbo Croaker BBQ', description: 'Whole grilled croaker', price: '₦25,000', image: '/images/giant-bbq-croaker.png' },
            { id: 'ap5', name: 'Catfish Pepper Soup', description: 'Served with Yam or Rice', price: '₦9,000', image: '/images/catfish-pepper-soup.png' },
            { id: 'ap6', name: 'Nkwobi', description: 'Spicy cow foot delicacy', price: '₦7,500', image: '/images/nkwobi.png' },
            { id: 'ap7', name: 'BBQ Cat-Fish', description: 'Grilled catfish', price: '₦10,000', image: '/images/bbq-catfish.png' },
            { id: 'ap8', name: 'Isi-Ewu', description: 'Spicy goat head', price: '₦12,000', image: '/images/isi-ewu.png' },
            { id: 'ap9', name: 'Peppered Snail', description: 'Spicy snail', price: '₦13,000', image: '/images/pepper-snail.png' },
            { id: 'ap10', name: 'Peppered Gizzard', description: 'Spicy gizzard', price: '₦9,000', image: '/images/pepper-gizzard.png' },
            { id: 'ap11', name: 'Peppered Beef', description: 'Spicy beef', price: '₦7,500', image: '' },
            { id: 'ap12', name: 'Peppered Goat Meat', description: 'Spicy goat meat', price: '₦7,500', image: '' }
          ]
        },
        {
          id: 'lunch-dinner',
          name: 'Lunch & Dinner',
          items: [
            { id: 'ld1', name: 'Yamarita', description: 'With any choice of protein • Free Water', price: '₦11,000', image: '/images/yamarita.png' },
            { id: 'ld3', name: 'Chicken & Chips', description: 'In Creamy Sauce • Free Water', price: '₦10,000', image: '/images/chicken-chips.png' },
            { id: 'ld5', name: 'Noodles with Protein', description: 'Served with Turkey/Chicken/Other Protein • Free Water', price: '₦10,000', image: '/images/noodles-protein.png' },
            { id: 'ld6', name: 'Plantain with Protein', description: 'With Goat Meat/Chicken/Beef • Free Water', price: '₦10,000', image: '/images/plantain-protein.png' },
            { id: 'ld7', name: 'Goat Meat Pepper Soup with Plantain', description: 'Free Water', price: '₦10,000', image: '' },
            { id: 'ld8', name: 'Boiled Plantain with Vegetable Sauce', description: 'With choice of protein • Free Water', price: '₦14,000', image: '' }
          ]
        },
        {
          id: 'pasta',
          name: 'Pasta',
          items: [
            { id: 'p1', name: 'Spaghetti with Protein', description: 'Choice of Spaghetti with choice of protein • Free Water', price: '₦10,000', image: '/images/spaghetti-protein.png' },
            { id: 'p2', name: 'Spaghetti Bolognese', description: 'Classic meat sauce • Free Water', price: '₦12,000', image: '/images/spaghetti-bolognese.png' },
            { id: 'p3', name: 'Vegetable Pasta', description: 'Mixed vegetables • Free Water', price: '₦10,000', image: '/images/vegetable-pasta.png' },
            { id: 'p4', name: 'Stir Fried Spaghetti', description: 'With any choice of Protein • Free Water', price: '₦10,000', image: '/images/stir-fried-spaghetti.png' },
            { id: 'p5', name: 'Noodles & Egg', description: 'Simple noodles with egg • Free Water', price: '₦5,500', image: '/images/noodles-egg.png' }
          ]
        },
        {
          id: 'rice',
          name: 'Rice',
          items: [
            { id: 'r1', name: 'Jollof Rice', description: 'With any choice of Protein • Free Water', price: '₦10,000', image: '/images/jollof-rice.png' },
            { id: 'r2', name: 'Fried Rice', description: 'With any choice of Protein • Free Water', price: '₦10,000', image: '/images/fried-rice.png' },
            { id: 'r3', name: 'White Rice', description: 'With any choice of Protein • Free Water', price: '₦10,000', image: '/images/white-rice.png' }
          ]
        },
        {
          id: 'swallow',
          name: 'Swallow',
          items: [
            { id: 'sw0', name: 'Pounded Yam', description: 'Served with choice of Soup and any choice of Protein • Free Water', price: '₦12,000', image: '/images/pounded-yam-special.png' },
            { id: 'sw1', name: 'Poundo Yam', description: 'Served with choice of Soup (Edikan-Ikong/Ogbono/Okro/Efo-Riro) with any choice of Protein • Free Water', price: '₦10,000', image: '/images/poundo-yam.png' },
            { id: 'sw2', name: 'Semovita', description: 'Served with choice of Soup (Edikan-Ikong/Ogbono/Okro/Efo-Riro) with any choice of Protein • Free Water', price: '₦10,000', image: '/images/semovita.png' },
            { id: 'sw4', name: 'Wheat Meal', description: 'Served with choice of Soup (Edikan-Ikong/Ogbono/Okro/Efo-Riro) with any choice of Protein • Free Water', price: '₦10,000', image: '/images/wheat.png' },
            { id: 'sw5', name: 'Eba', description: 'Served with choice of Soup (Edikan-Ikong/Ogbono/Okro/Efo-Riro) with any choice of Protein • Free Water', price: '₦10,000', image: '/images/eba.png' },
            { id: 'sw6', name: 'Amala', description: 'Served with choice of Soup (Edikan-Ikong/Ogbono/Okro/Efo-Riro) with any choice of Protein • Free Water', price: '₦10,000', image: '/images/amala.png' }
          ]
        },
        {
          id: 'extra',
          name: 'Extras',
          items: [
            { id: 'ex1', name: 'Extra Swallow', description: 'Extra portion', price: '₦3,000', image: '/images/extra-swallow.png' },
            { id: 'ex2', name: 'Rice', description: 'Extra portion', price: '₦3,000', image: '/images/extra-rice.png' },
            { id: 'ex3', name: 'Plantain', description: 'Extra portion', price: '₦3,000', image: '/images/extra-plantain.png' },
            { id: 'ex4', name: 'Protein', description: 'Extra portion', price: '₦7,500', image: '/images/extra-protein.png' },
            { id: 'ex5', name: 'French Fries', description: 'Extra portion', price: '₦6,000', image: '/images/french-fries.png' },
            { id: 'ex6', name: 'Egg', description: 'Extra portion', price: '₦2,000', image: '' },
            { id: 'ex7', name: 'Pounded Yam', description: 'Extra portion', price: '₦5,000', image: '/images/pounded-yam-special.png' },
            { id: 'ex8', name: 'Boiled or Fried Yam', description: 'Extra portion', price: '₦3,000', image: '' }
          ]
        },
        {
          id: 'seafoods',
          name: 'Seafoods',
          items: [
            { id: 'sf1', name: 'Seafood Okro', description: 'Rich seafood okra soup', price: '₦25,000', image: '/images/seafood-okro.png' },
            { id: 'sf2', name: 'Fisherman\'s Soup', description: 'Traditional fisherman soup', price: '₦25,000', image: '/images/fisherman-soup.png' },
            { id: 'sf3', name: 'Seafood Rice', description: 'Rice with assorted seafood', price: '₦25,000', image: '/images/seafood-rice.png' }
          ]
        },
        {
          id: 'extra-soups',
          name: 'Extra Soups',
          items: [
            { id: 'es1', name: 'Egusi Soup', description: 'Extra soup portion', price: '₦3,000', image: '' },
            { id: 'es2', name: 'Afang Soup', description: 'Extra soup portion', price: '₦3,000', image: '/images/afang-soup.jpeg' },
            { id: 'es3', name: 'Edikang Ikong Soup', description: 'Extra soup portion', price: '₦3,000', image: '' },
            { id: 'es4', name: 'Ogbono Soup', description: 'Extra soup portion', price: '₦3,000', image: '' },
            { id: 'es5', name: 'Okro Soup', description: 'Extra soup portion', price: '₦3,000', image: '' }
          ]
        }
      ]
    },
    {
      id: 'specials',
      name: 'Specials',
      subcategories: [
        {
          id: 'special-meals',
          name: 'Presken Food Menu Special Meals',
          items: [
            { id: 'sm27', name: 'Pounded Yam', description: 'Served with choice of Soup (Edikan-Ikong/Ogbono/Okro/Efo-Riro) with any choice of Protein • Free Water', price: '₦12,000', image: '/images/pounded-yam-special.png' },
            { id: 'sm28', name: 'Special Fried Rice', description: 'With Sea Foods • Free Water', price: '₦25,000', image: '/images/fried-rice-special.png' },
            { id: 'sm29', name: 'Presken Special Noodles', description: 'House special noodles • Free Water', price: '₦6,500', image: '/images/noodles-special.png' },
            { id: 'sm1', name: 'Sea Food Okro', description: 'Rich seafood okra soup', price: '₦25,000', image: '/images/seafood-okro.png' },
            { id: 'sm2', name: 'Fisherman Soup', description: 'Traditional fisherman soup', price: '₦25,000', image: '/images/fisherman-soup.png' },
            { id: 'sm3', name: 'Brown Rice', description: 'Healthy brown rice', price: '₦10,000', image: '/images/brown-rice.png' },
            { id: 'sm4', name: 'Basmati Rice Jambalaya', description: 'Spicy basmati rice jambalaya', price: '₦15,000', image: '/images/basmati-jambalaya.png' },
            { id: 'sm5', name: 'Basmati Rice (White, Jollof, Fried)', description: 'Choice of white, jollof or fried basmati', price: '₦15,000', image: '/images/basmati-rice-trio.png' },
            { id: 'sm6', name: 'Coconut Rice', description: 'Traditional coconut rice', price: '₦10,000', image: '/images/coconut-rice.png' },
            { id: 'sm7', name: 'Basmati Coconut Rice', description: 'Coconut basmati rice', price: '₦15,000', image: '/images/basmati-coconut-rice.png' },
            { id: 'sm8', name: 'Giant Barbecue Croaker Fish', description: 'Grilled croaker fish', price: '₦25,000', image: '/images/croaker-bbq.png' },
            { id: 'sm9', name: 'Barbecue Catfish', description: 'Grilled catfish', price: '₦10,000', image: '/images/catfish-bbq.jpeg' },
            { id: 'sm10', name: 'Crocker Fish Barbecue With Noodles', description: 'Grilled croaker with noodles', price: '₦23,000', image: '/images/croaker-noodles.png' },
            { id: 'sm11', name: 'Catfish Barbecue With Noodles', description: 'Grilled catfish with noodles', price: '₦13,000', image: '/images/catfish-noodles.png' },
            { id: 'sm12', name: 'Pepper Bush Meat', description: 'Spicy bush meat', price: '₦10,000', image: '/images/pepper-bush-meat.png' },
            { id: 'sm13', name: 'Ofada Rice', description: 'Local ofada rice', price: '₦15,000', image: '/images/ofada.png' },
            { id: 'sm31', name: 'Ofada Rice & Sauce', description: 'Local ofada rice', price: '₦10,000', image: '/images/ofada.png' },
            { id: 'sm14', name: 'Bush Meat (With Swallow - 15,000)', description: 'Premium bush meat (with swallow)', price: '₦11,000', image: '/images/bushmeat.png' },
            { id: 'sm15', name: 'Amala & Abula With Any Choice Of Protein', description: 'Amala with abula soup and protein', price: '₦10,000', image: '/images/amala-abula.png' },
            { id: 'sm16', name: 'Catfish Omiobe With Rice', description: 'Catfish in omiobe sauce with rice', price: '₦15,000', image: '/images/catfish-omiobe.png' },
            { id: 'sm17', name: 'Fry Catfish With Yam & Plantain', description: 'Fried catfish with yam and plantain', price: '₦15,000', image: '/images/catfish-yam.png' },
            { id: 'sm18', name: 'Sea Food Rice', description: 'Rice with assorted seafood', price: '₦25,000', image: '/images/seafood-rice.png' },
            { id: 'sm19', name: 'Spaghetti Jambalaya', description: 'Spicy spaghetti jambalaya', price: '₦13,500', image: '/images/spaghetti-jambalaya.png' },
            { id: 'sm23', name: 'Live Chicken Pepper Soup', description: 'Fresh chicken pepper soup', price: '₦30,000', image: '/images/chicken-peppersoup.png' },
            { id: 'sm24', name: 'Live Chicken BBQ', description: 'Fresh grilled chicken', price: '₦35,000', image: '/images/live-chicken-bbq.png' },
            { id: 'sm30', name: 'Food Platter 1', description: 'Assorted food platter', price: '₦20,000', image: '/images/food-platter.png' },
            { id: 'sm25', name: 'Food Platter 2', description: 'Assorted food platter', price: '₦25,000', image: '/images/food-platter.png' },
            { id: 'sm26', name: 'Grilled Dragon (Full Goat)', description: 'Whole grilled goat', price: '₦250,000', image: '/images/grilled-goat.jpg' }
          ]
        },
        {
          id: 'special-soup',
          name: 'Special Soup',
          items: [
            { id: 'ss1', name: 'Bitter Leaf', description: 'With any choice of Swallow • Free Water', price: '₦12,000', image: '/images/bitterleaf-soup.jpeg' },
            { id: 'ss2', name: 'Oha', description: 'With any choice of Swallow • Free Water', price: '₦12,000', image: '/images/oha-soup.jpeg' },
            { id: 'ss3', name: 'Groundnut Soup', description: 'With any choice of Swallow • Free Water', price: '₦12,000', image: '/images/groundnut-soup.jpeg' },
            { id: 'ss4', name: 'White Soup', description: 'With any choice of Swallow • Free Water', price: '₦12,000', image: '/images/white-soup.png' },
            { id: 'ss5', name: 'Banga Soup', description: 'With any choice of Swallow • Free Water', price: '₦12,000', image: '/images/banga-soup.jpeg' },
            { id: 'ss6', name: 'Afang', description: 'With any choice of Swallow • Free Water', price: '₦12,000', image: '/images/afang-soup.jpeg' },
            { id: 'ss7', name: 'Black Soup', description: 'With any choice of Swallow • Free Water', price: '₦12,000', image: '/images/black-soup.png' }
          ]
        }
      ]
    },
    {
      id: 'drinks',
      name: 'Drinks',
      subcategories: [
        {
          id: 'soft-drinks',
          name: 'Soft Drinks & Water',
          items: [
            { id: 'sd7', name: 'Bottle Water (B)', description: 'Large bottled water', price: '₦1,000', image: '/images/bigwater.jpg' },
            { id: 'sd5', name: 'Bottle Water (S)', description: 'Small bottled water', price: '₦500', image: '/images/water.jpg' },
            { id: 'j4', name: 'Cranberry', description: 'Cranberry juice', price: '₦15,000', image: '/images/cranberry.jpg' },
            { id: 'j9', name: 'Can Cranberry', description: 'Canned cranberry juice', price: '₦2,000', image: '' },
            { id: 'j7', name: 'Frutta Juice', description: 'Fruit juice', price: '₦3,500', image: '' },
            { id: 'j8', name: 'Maccaw', description: 'Fruit juice', price: '₦3,500', image: '' },
            { id: 'sd3', name: 'Pulpy', description: 'Fruit juice drink', price: '₦1,000', image: '/images/pulpy.jpg' },
            { id: 'sd11', name: 'Schweppes', description: 'Sparkling mixer', price: '₦1,000', image: '/images/schweppes.jpg' },
            { id: 'sd2', name: 'Teem', description: 'Refreshing soda', price: '₦1,000', image: '/images/team.jpg' }
          ]
        },
        {
          id: 'malt-energy-dairy',
          name: 'Malt, Energy Drinks & Dairy',
          items: [
            { id: 'sd8', name: 'Amstel Malta', description: 'Premium malt drink', price: '₦1,500', image: '/images/AmstelMalt.jpg' },
            { id: 'sd12', name: 'Malta Guinness', description: 'Guinness malt drink', price: '₦1,500', image: '' },
            { id: 'sd9', name: 'Maltina', description: 'Classic malt drink', price: '₦1,500', image: '/images/malt.jpg' },
            { id: 'sd15', name: 'Grand Malt', description: 'Malt drink', price: '₦1,500', image: '/images/malt.jpg' },
            { id: 'sd4', name: 'Fayrouz', description: 'Sparkling soft drink', price: '₦1,000', image: '/images/Fayrouz.jpg' },
            { id: 'j3', name: 'Hollandia', description: 'Yogurt drink', price: '₦3,500', image: '/images/hollandia.jpg' },
            { id: 'j2', name: 'Exotic', description: 'Exotic fruit blend', price: '₦3,500', image: '/images/exotic.jpg' },
            { id: 'j6', name: 'Peak Yogurt', description: 'Yogurt drink', price: '₦3,500', image: '/images/hollandia.jpg' },
            { id: 'sd10', name: 'Vitamilk', description: 'Soy milk drink', price: '₦3,000', image: '/images/vitamilk.jpg' },
            { id: 'ed3', name: 'Monster', description: 'Energy drink', price: '₦3,000', image: '/images/monster.jpg' },
            { id: 'ed2', name: 'Red Bull', description: 'Energy drink', price: '₦3,500', image: '/images/redbull.jpg' },
            { id: 'ed1', name: 'Power Horse', description: 'Energy drink', price: '₦3,000', image: '/images/energy.jpg' }
          ]
        },
        {
          id: 'coffee-tea',
          name: 'Coffee & Tea',
          items: [
            { id: 'cf1', name: 'Espresso', description: 'Rich single shot of signature espresso', price: '₦2,500', image: '' },
            { id: 'cf2', name: 'Double Espresso', description: 'Double shot of espresso for extra intensity', price: '₦3,500', image: '' },
            { id: 'cf3', name: 'Americano', description: 'Espresso softened with hot water', price: '₦4,000', image: '' },
            { id: 'cf4', name: 'Cappuccino', description: 'Espresso with steamed milk and velvety foam', price: '₦4,000', image: '' },
            { id: 'cf5', name: 'Mocha Coffee', description: 'Espresso blended with chocolate and steamed milk', price: '₦4,500', image: '' },
            { id: 'cf6', name: 'Ice Mocha', description: 'Chilled mocha with espresso and chocolate over ice', price: '₦5,000', image: '' },
            { id: 'cf7', name: 'Ice Coffee', description: 'Chilled brewed coffee served over ice', price: '₦4,500', image: '' },
            { id: 'cf8', name: 'Hot Chocolate', description: 'Creamy hot chocolate topped with froth', price: '₦5,000', image: '' },
            { id: 'cf9', name: 'Hot Milk', description: 'Warm steamed milk', price: '₦2,000', image: '' },
            { id: 'cf10', name: 'Cafe Latte', description: 'Smooth espresso with steamed milk', price: '₦4,500', image: '' },
            { id: 'cf11', name: 'Fresh Lemon Ginger Tea', description: 'Freshly brewed lemon and ginger tea', price: '₦4,000', image: '' },
            { id: 'cf12', name: 'Chocolate Frappe', description: 'Blended iced chocolate frappe', price: '₦6,000', image: '' },
            { id: 'cf13', name: 'Presken Affogato', description: 'Presken signature affogato (espresso poured over vanilla)', price: '₦4,500', image: '' }
          ]
        },
        {
          id: 'beer',
          name: 'Beers, Stouts & Cider',
          items: [
            { id: 'b10', name: '33 Export', description: 'Lager beer', price: '₦2,000', image: '/images/33-export.jpg' },
            { id: 'b2', name: 'Big Ice', description: 'Smirnoff Ice Big', price: '₦2,500', image: '/images/SmirnoffB.jpg' },
            { id: 'b28', name: 'Budweiser', description: 'Lager beer', price: '₦2,500', image: '/images/Budweiser.jpg' },
            { id: 'ed4', name: 'Bullet', description: 'Energy / cider style drink', price: '₦3,000', image: '/images/bullet.jpg' },
            { id: 'b15', name: 'Desperados', description: 'Tequila flavoured beer', price: '₦2,000', image: '/images/desperados-pack.jpg' },
            { id: 'b21', name: 'Flying Fish', description: 'Lager beer', price: '₦1,500', image: '/images/flyingFish.jpg' },
            { id: 'b9', name: 'Goldberg', description: 'Lager beer', price: '₦2,000', image: '/images/goldberg.jpg' },
            { id: 'b6', name: 'Gulder', description: 'The ultimate beer', price: '₦2,500', image: '/images/Gulder.jpg' },
            { id: 'b4', name: 'Heineken', description: 'Premium lager', price: '₦2,500', image: '/images/heineken.jpg' },
            { id: 'b12', name: 'Medium Heineken', description: 'Lager beer', price: '₦2,000', image: '/images/heineken.jpg' },
            { id: 'b16', name: 'Hero', description: 'Lager beer', price: '₦2,000', image: '/images/hero.jpg' },
            { id: 'b5', name: 'Legend', description: 'Extra stout', price: '₦2,500', image: '/images/stout.jpg' },
            { id: 'b22', name: 'Radler', description: 'Citrus flavoured beer', price: '₦2,000', image: '/images/StarRadler.jpg' },
            { id: 'b23', name: 'Small Ice', description: 'Smirnoff Ice', price: '₦1,300', image: '/images/Smirnoffsmall.jpg' },
            { id: 'b7', name: 'Star', description: 'Fine lager beer', price: '₦2,000', image: '/images/star.jpg' },
            { id: 'b26', name: 'Star Lite', description: 'Light lager beer', price: '₦2,000', image: '/images/star.jpg' },
            { id: 'b17', name: 'Tiger', description: 'Asian lager', price: '₦2,000', image: '/images/tiger.jpg' },
            { id: 'b14', name: 'Trophy', description: 'Lager beer', price: '₦2,000', image: '/images/Trophy.jpg' }
          ]
        },
        {
          id: 'stouts',
          name: 'Stouts',
          items: [
            { id: 'b1', name: 'Big Stout', description: 'Guinness Extra Stout', price: '₦3,000', image: '/images/big-stout.png' },
            { id: 'b25', name: 'Medium Stout', description: 'Guinness medium stout', price: '₦2,500', image: '' },
            { id: 'b20', name: 'Small Stout', description: 'Guinness Extra Stout', price: '₦2,000', image: '/images/stout.jpg' },
            { id: 'b13', name: 'Guinness Smooth', description: 'Guinness Smooth', price: '₦2,000', image: '/images/stout.jpg' },
            { id: 'b27', name: 'Turbo Stout', description: 'Stout beer', price: '₦2,000', image: '/images/TrophyStout.jpg' }
          ]
        },
        {
          id: 'bitters',
          name: 'Bitters',
          items: [
            { id: 'bt3', name: 'Action Bitters', description: 'Herbal bitters', price: '₦2,000', image: '/images/bitters.jpg' },
            { id: 'bt5', name: 'Big Origin', description: 'Herbal drink', price: '₦2,000', image: '/images/origin.jpg' },
            { id: 'bt11', name: 'Pet Origin', description: 'Herbal drink', price: '₦2,500', image: '/images/originPlastic.jpg' },
            { id: 'b24', name: 'Double Black', description: 'Bitters', price: '₦2,000', image: '' },
            { id: 'bt10', name: 'Judge Bitters', description: 'Herbal bitters', price: '₦2,000', image: '/images/Judge.jpg' },
            { id: 'bt9', name: 'Odogwu', description: 'Herbal bitters', price: '₦2,000', image: '/images/Odogwu.jpg' },
            { id: 'bt12', name: 'Buffalo', description: 'Herbal bitters', price: '₦1,000', image: '' },
            { id: 'bt13', name: 'Long Jack', description: 'Herbal bitters', price: '₦2,000', image: '' }
          ]
        },
        {
          id: 'bitters-bottle',
          name: 'Bitters (Bottle)',
          items: [
            { id: 'bt1', name: 'Action Bitters', description: 'Herbal bitters bottle', price: '₦9,000', image: '/images/bitters.jpg' },
            { id: 'bt4', name: 'Orijin', description: 'Herbal drink bottle', price: '₦9,000', image: '/images/origin.jpg' }
          ]
        },
        {
          id: 'sparkling-drinks',
          name: 'Sparkling Wines',
          items: [
            { id: 'spd2', name: 'André Rosé', description: 'Sparkling rosé', price: '₦25,000', image: '/images/Andre-Rose.jpg' },
            { id: 'spd1', name: 'André Brut', description: 'Sparkling wine', price: '₦25,000', image: '/images/Andre-Brut.jpg' },
            { id: 'spd3', name: 'Chamdor', description: 'Non-alcoholic sparkling', price: '₦11,000', image: '/images/chamdor.jpg' },
            { id: 'ch1', name: 'Moët Brut', description: 'Impérial Brut', price: '₦180,000', image: '/images/Moet.jpg' },
            { id: 'ch2', name: 'Moët Rosé', description: 'Impérial Rosé', price: '₦220,000', image: '/images/Moet2.jpg' }
          ]
        },
        {
          id: 'wines',
          name: 'Red, White & Rosé Wines',
          items: [
            { id: 'rw1', name: 'Agor', description: 'Red wine', price: '₦15,000', image: '/images/agor.jpg' },
            { id: 'rw10', name: 'B&G Cuvée', description: 'Red wine', price: '₦18,000', image: '/images/special.jpg' },
            { id: 'rw3', name: 'Carlo Rossi', description: 'Red wine', price: '₦18,000', image: '/images/rossi.jpg' },
            { id: 'rw14', name: 'Declan', description: 'Red wine', price: '₦16,000', image: '/images/declan.jpg' },
            { id: 'rw5', name: 'Drostdy Hoff', description: 'Red wine', price: '₦17,000', image: '/images/DrostdyHof(B).jpg' },
            { id: 'rw7', name: 'Escodo Rojo', description: 'Red wine', price: '₦40,000', image: '/images/EscodoRojo.jpg' },
            { id: 'rw8', name: 'Four Cousins', description: 'Red wine', price: '₦15,000', image: '/images/FC-I.jpg' },
            { id: 'rw16', name: 'Pure Heaven', description: 'Non-alcoholic wine', price: '₦13,000', image: '/images/pureheaven.jpg' },
            { id: 'rw9', name: '4th Street', description: 'Sweet red wine', price: '₦11,000', image: '/images/street.jpg' },
            { id: 'rw17', name: 'Sandemann', description: 'Port wine', price: '₦40,000', image: '' },
            { id: 'rw18', name: 'Sweet Kiss', description: 'Sweet red wine', price: '₦15,000', image: '' }
          ]
        },
        {
          id: 'vodka',
          name: 'Liquors & Spirits',
          items: [
            { id: 'v2', name: 'B/Vodka', description: 'Big bottle vodka', price: '₦33,000', image: '/images/vodka.jpg' },
            { id: 'v7', name: 'Campari (B)', description: 'Bitter apéritif', price: '₦45,000', image: '/images/thumbs/campari-jpg.jpg' },
            { id: 'v8', name: 'Campari (S)', description: 'Bitter apéritif', price: '₦15,000', image: '/images/campari.jpg' },
            { id: 'v5', name: 'Magic Moment (B)', description: 'Premium vodka', price: '₦13,000', image: '/images/MagicMoment.jpg' },
            { id: 'v6', name: 'Magic Moment (S)', description: 'Premium vodka', price: '₦4,000', image: '/images/MagicMoment.jpg' },
            { id: 'v3', name: 'Smirnoff Choco (B)', description: 'Chocolate flavoured', price: '₦13,000', image: '/images/SmirnoffChoco.jpg' },
            { id: 'v4', name: 'Smirnoff Choco (S)', description: 'Chocolate flavoured', price: '₦3,500', image: '/images/SmirnoffChocoSmall.jpg' }
          ]
        },
        {
          id: 'gin',
          name: 'Gin',
          items: [
            { id: 'g1', name: 'Gordon\'s (B)', description: 'London dry gin', price: '₦16,000', image: '/images/gin.jpg' },
            { id: 'g2', name: 'Gordon\'s (M)', description: 'London dry gin', price: '₦6,000', image: '/images/gin.jpg' },
            { id: 'g3', name: 'Gordon\'s (S)', description: 'London dry gin', price: '₦4,000', image: '/images/gin.jpg' },
            { id: 'g4', name: 'G\' Pink Berry', description: 'Pink gin', price: '₦17,000', image: '/images/pinkgin.jpg' }
          ]
        },
        {
          id: 'rum',
          name: 'Rum',
          items: [
            { id: 'r1', name: 'Bacardi', description: 'White rum', price: '₦27,000', image: '/images/rum.jpg' }
          ]
        },
        {
          id: 'tequila',
          name: 'Tequila',
          items: [
            { id: 't3', name: 'Olmeca Bianco', description: 'Silver tequila', price: '₦50,000', image: '/images/Olmeca.jpg' },
            { id: 't1', name: 'Olmeca Tequila', description: 'Silver tequila', price: '₦50,000', image: '/images/Olmeca.jpg' },
            { id: 't2', name: 'Sierra Tequila', description: 'Silver tequila', price: '₦27,000', image: '/images/Sierra.jpg' }
          ]
        },
        {
          id: 'liquor',
          name: 'Cream Liqueurs',
          items: [
            { id: 'l1', name: 'Baileys (Imported)', description: 'Irish Cream', price: '₦40,000', image: '/images/Baileys.jpg' },
            { id: 'l6', name: 'Best Cream (B)', description: 'Cream Liqueur', price: '₦13,000', image: '/images/best-cream-liqueur.jpg' },
            { id: 'l7', name: 'Best Cream (S)', description: 'Cream Liqueur', price: '₦4,000', image: '/images/BEST_CREAM_.jpg' }
          ]
        },
        {
          id: 'whisky',
          name: 'Whisky',
          items: [
            { id: 'w11', name: 'Best Whiskey (B)', description: 'Blended whisky', price: '₦11,000', image: '/images/Blended-Scotch-Whisky.jpg' },
            { id: 'w12', name: 'Best Whiskey (S)', description: 'Blended whisky', price: '₦3,500', image: '/images/Blended-Scotch-Whisky.jpg' },
            { id: 'w10', name: 'Black Barrel', description: 'Jameson Select Reserve', price: '₦65,000', image: '/images/Jameson-Black-barrel.jpg' },
            { id: 'w1', name: 'Black Label', description: 'Johnnie Walker', price: '₦65,000', image: '/images/BlackLabel.jpg' },
            { id: 'w7', name: 'Glen 12 Years', description: 'Single malt scotch', price: '₦130,000', image: '/images/Glenfiddich12.jpg' },
            { id: 'w6', name: 'Glen 15 Years', description: 'Single malt scotch', price: '₦170,000', image: '/images/Glenfiddich15.jpg' },
            { id: 'w15', name: 'Glen 16 Years', description: 'Single malt scotch', price: '₦190,000', image: '/images/Glenfiddich15.jpg' },
            { id: 'w5', name: 'Glen 18 Years', description: 'Single malt scotch', price: '₦220,000', image: '/images/Glenfiddich18.jpg' },
            { id: 'w3', name: 'Jack Daniel\'s', description: 'Tennessee whiskey', price: '₦45,000', image: '/images/Jack.jpg' },
            { id: 'w8', name: 'Jameson (B)', description: 'Irish whiskey', price: '₦45,000', image: '/images/Jameson2.jpg' },
            { id: 'w9', name: 'Jameson (S)', description: 'Irish whiskey', price: '₦16,000', image: '/images/Jameson2.jpg' },
            { id: 'w16', name: 'Macallan 12 Years', description: 'Single malt scotch', price: '₦150,000', image: '/images/Glenfiddich12.jpg' },
            { id: 'w2', name: 'Red Label', description: 'Johnnie Walker', price: '₦33,000', image: '/images/redLabel.jpg' },
            { id: 'w13', name: 'William Lawson', description: 'Blended scotch', price: '₦27,000', image: '/images/William-Lawson.jpg' }
          ]
        },
        {
          id: 'cognac',
          name: 'Cognac & Brandy',
          items: [
            { id: 'c2', name: 'Hennessy VS', description: 'Very Special', price: '₦100,000', image: '/images/hennessy.jpg' },
            { id: 'c1', name: 'Hennessy VSOP', description: 'Very Superior Old Pale', price: '₦200,000', image: '/images/hennessy.jpg' },
            { id: 'c5', name: 'Martell VS', description: 'Fine Cognac', price: '₦65,000', image: '/images/martel.jpg' },
            { id: 'c6', name: 'Martell Blue Swift', description: 'Fine Cognac', price: '₦150,000', image: '/images/cognac.jpg' },
            { id: 'c4', name: 'Remy Martin VS', description: 'Fine Champagne Cognac', price: '₦65,000', image: '/images/cognac.jpg' },
            { id: 'c3', name: 'Remy Martin VSOP', description: 'Fine Champagne Cognac', price: '₦100,000', image: '/images/martin.jpg' }
          ]
        }
      ]
    },
    {
      id: 'cocktails',
      name: 'Cocktails',
      subcategories: [
        {
          id: 'cocktail-menu',
          name: 'Cocktail Menu',
          items: [
            { id: 'ct1', name: 'Long Island Ice Tea', description: 'Classic mixed cocktail', price: '₦8,000', image: '/images/LongIslandIceTea.jpeg' },
            { id: 'ct2', name: 'Pina Colada', description: 'Tropical coconut and pineapple', price: '₦8,000', image: '/images/PinaColada.jpeg' },
            { id: 'ct3', name: 'Handsome Delight', description: 'Signature cocktail', price: '₦8,000', image: '/images/handsome-delight.jpeg' },
            { id: 'ct4', name: 'Watermelon Delight', description: 'Fresh watermelon cocktail', price: '₦8,000', image: '/images/watermelon-delight.jpeg' },
            { id: 'ct5', name: 'Margarita', description: 'Classic tequila cocktail', price: '₦7,000', image: '/images/margarita.jpeg' },
            { id: 'ct6', name: 'Tequila Sunrise', description: 'Tequila with orange and grenadine', price: '₦7,000', image: '/images/tequila-sunrise.jpeg' },
            { id: 'ct7', name: 'Sex On The Beach', description: 'Fruity vodka cocktail', price: '₦7,000', image: '/images/sex-beach.jpeg' },
            { id: 'ct8', name: 'Mojito', description: 'Refreshing mint and rum', price: '₦7,000', image: '/images/mojito.jpeg' },
            { id: 'ct9', name: 'Alcoholic Chapman', description: 'Nigerian favorite with alcohol', price: '₦7,000', image: '/images/alcoholic-chapman.jpeg' },
            { id: 'ct10', name: 'Gin & Tonic', description: 'Classic gin cocktail', price: '₦7,000', image: '/images/gin-tonic.jpeg' },
            { id: 'ct11', name: 'Screw Driver', description: 'Vodka and orange juice', price: '₦7,000', image: '/images/screwdriver.jpeg' },
            { id: 'ct12', name: 'Cosmopolitan', description: 'Elegant vodka cocktail', price: '₦7,000', image: '/images/cosmopolitan.jpeg' },
            { id: 'ct13', name: 'White Russia', description: 'Creamy vodka cocktail', price: '₦7,000', image: '/images/white-russia.jpeg' }
          ]
        },
        {
          id: 'mocktails',
          name: 'Mocktails',
          items: [
            { id: 'mt1', name: 'Non-Alcoholic Chapman', description: 'Classic Nigerian mocktail', price: '₦5,000', image: '/images/chapman.jpeg' },
            { id: 'mt2', name: 'Virgin Pina Colada', description: 'Non-alcoholic tropical drink', price: '₦5,000', image: '/images/virgin-pina.jpeg' },
            { id: 'mt3', name: 'Virgin Mojito', description: 'Refreshing mint mocktail', price: '₦5,000', image: '/images/virgin-mojito.jpeg' }
          ]
        },
        {
          id: 'fresh-smoothies',
          name: 'Fresh Smoothies',
          items: [
            { id: 'fs1', name: 'Tropical Splash Smoothie', description: 'Mixed tropical fruits', price: '₦5,000', image: '/images/tropical-smoothie.jpeg' },
            { id: 'fs2', name: 'Strawberry/Banana', description: 'Classic fruit smoothie', price: '₦5,000', image: '/images/strawberry-banana.jpeg' }
          ]
        },
        {
          id: 'juices',
          name: 'Juices',
          items: [
            { id: 'j1', name: 'Pineapple Juice', description: 'Fresh pineapple juice', price: '₦5,000', image: '/images/pineapple-juice.jpeg' },
            { id: 'j2', name: 'Watermelon Juice', description: 'Fresh watermelon juice', price: '₦5,000', image: '/images/watermelon-juice.jpeg' },
            { id: 'j3', name: 'Fresh Lemonade', description: 'Freshly squeezed lemonade', price: '₦5,000', image: '/images/lemonade.jpeg' },
            { id: 'j4', name: 'Vanilla Milk Shake', description: 'Creamy vanilla shake', price: '₦8,000', image: '/images/vanilla-shake.jpeg' }
          ]
        },
        {
          id: 'shots',
          name: 'Shots',
          items: [
            { id: 'sh1', name: 'Whiskey', description: 'Whiskey shot', price: '₦4,000', image: '/images/whiskey-shot.jpeg' },
            { id: 'sh2', name: 'Vodka', description: 'Vodka shot', price: '₦3,000', image: '/images/vodka-shot.jpeg' },
            { id: 'sh3', name: 'Tequila', description: 'Tequila shot', price: '₦4,000', image: '/images/tequila-shot.jpeg' },
            { id: 'sh4', name: 'Bacardi', description: 'Bacardi rum shot', price: '₦3,000', image: '/images/bacardi-shot.jpeg' },
            { id: 'sh5', name: 'Gin', description: 'Gin shot', price: '₦3,000', image: '/images/gin-shot.jpeg' }
          ]
        }
      ]
    }
  ]
};

// Get all items in a category (including all subcategories)
export const getItemsByCategory = (categoryId) => {
  if (!categoryId || categoryId === 'all') {
    // Return all items from all categories
    const allItems = [];
    menuData.categories.forEach(category => {
      category.subcategories.forEach(subcategory => {
        allItems.push(...subcategory.items);
      });
    });
    return allItems;
  }

  const category = menuData.categories.find(cat => cat.id === categoryId);
  if (!category) return [];

  const items = [];
  category.subcategories.forEach(subcategory => {
    items.push(...subcategory.items);
  });
  return items;
};

// Get category with all its subcategories
export const getCategoryData = (categoryId) => {
  return menuData.categories.find(cat => cat.id === categoryId);
};

// Search items across all categories
export const searchItems = (query) => {
  const lowerQuery = query.toLowerCase();
  const results = [];

  menuData.categories.forEach(category => {
    category.subcategories.forEach(subcategory => {
      const matchingItems = subcategory.items.filter(item =>
        item.name.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery)
      );
      if (matchingItems.length > 0) {
        results.push({
          category: category.name,
          subcategory: subcategory.name,
          items: matchingItems
        });
      }
    });
  });

  return results;
};



