// Central product data. Add real image paths as you get photography —
// see the README for the exact folder each path expects.

const products = [
  {
    id: "cortado",
    name: "CORTADO",
    subtitle: "X Lows",
    price: 4299,
    discountPrice: 3899,
    couponCode: "FLAT400",
    badge: null,
    // Listing card (ProductDisplay) images
    primaryImage: "/images/products/cortado-1.jpg",
    secondaryImage: "/images/products/cortado-2.jpg",
    // Product detail page — stacked gallery images, scroll to see more
    gallery: [
      "/images/products/cortado-1.jpg",
      "/images/products/cortado-2.jpg",
      "/images/products/cortado-3.jpg",
    ],
    // Color swatches shown on the detail page
    colors: [
      {
        id: "cortado",
        name: "Cortado",
        swatch: "/images/products/cortado-1.jpg",
      },
      {
        id: "matcha-cream",
        name: "Matcha Cream",
        swatch: "/images/products/matcha-cream-1.jpg",
      },
      {
        id: "oakwood",
        name: "Oakwood",
        swatch: "/images/products/oakwood-1.jpg",
      },
      {
        id: "oatmilk",
        name: "Oatmilk",
        swatch: "/images/products/oatmilk-1.jpg",
      },
    ],
    sizes: [
      "UK 3",
      "UK 4",
      "UK 5",
      "UK 6",
      "UK 7",
      "UK 8",
      "UK 9",
      "UK 10",
      "UK 11",
      "UK 12",
    ],
    details:
      "A clean canvas low-top with a contrast suede star panel and a gum rubber outsole. Built for everyday wear with a padded collar and breathable canvas upper.",
    materials:
      "Upper: canvas and suede. Lining: cotton blend. Sole: gum rubber. Insole: memory foam cushioning.",
  },
  {
    id: "matcha-cream",
    name: "MATCHA CREAM",
    subtitle: "Astra",
    price: 4899,
    discountPrice: 4499,
    couponCode: "FLAT400",
    badge: "WOMEN'S EXCLUSIVE",
    primaryImage: "/images/products/matcha-cream-1.jpg",
    secondaryImage: "/images/products/matcha-cream-2.jpg",
    gallery: [
      "/images/products/matcha-cream-1.jpg",
      "/images/products/matcha-cream-2.jpg",
    ],
    colors: [
      {
        id: "matcha-cream",
        name: "Matcha Cream",
        swatch: "/images/products/matcha-cream-1.jpg",
      },
      {
        id: "cortado",
        name: "Cortado",
        swatch: "/images/products/cortado-1.jpg",
      },
      {
        id: "oakwood",
        name: "Oakwood",
        swatch: "/images/products/oakwood-1.jpg",
      },
      {
        id: "oatmilk",
        name: "Oatmilk",
        swatch: "/images/products/oatmilk-1.jpg",
      },
    ],
    sizes: ["UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
    details:
      "A retro runner silhouette in a soft matcha and cream colourway, part of the women-only Astra line. Lightweight mesh upper with a cushioned midsole.",
    materials:
      "Upper: mesh and suede overlays. Lining: cotton blend. Sole: EVA foam. Insole: removable cushioned footbed.",
  },
  {
    id: "oakwood",
    name: "OAKWOOD",
    subtitle: "Aeres",
    price: 5299,
    discountPrice: 4899,
    couponCode: "FLAT400",
    badge: "RESTOCKED",
    primaryImage: "/images/products/oakwood-1.jpg",
    secondaryImage: "/images/products/oakwood-2.jpg",
    gallery: [
      "/images/products/oakwood-1.jpg",
      "/images/products/oakwood-2.jpg",
    ],
    colors: [
      {
        id: "oakwood",
        name: "Oakwood",
        swatch: "/images/products/oakwood-1.jpg",
      },
      {
        id: "cortado",
        name: "Cortado",
        swatch: "/images/products/cortado-1.jpg",
      },
      {
        id: "matcha-cream",
        name: "Matcha Cream",
        swatch: "/images/products/matcha-cream-1.jpg",
      },
      {
        id: "oatmilk",
        name: "Oatmilk",
        swatch: "/images/products/oatmilk-1.jpg",
      },
    ],
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"],
    details:
      "Rich brown suede paired with a cream star panel and gum sole, from the Aeres line. Restocked after selling out in its first drop.",
    materials:
      "Upper: suede and leather. Lining: cotton blend. Sole: gum rubber. Insole: memory foam cushioning.",
  },
  {
    id: "oatmilk",
    name: "OATMILK",
    subtitle: "X Lows",
    price: 5299,
    discountPrice: 4899,
    couponCode: "FLAT400",
    badge: "RESTOCKED",
    primaryImage: "/images/products/oatmilk-1.jpg",
    secondaryImage: "/images/products/oatmilk-2.jpg",
    gallery: [
      "/images/products/oatmilk-1.jpg",
      "/images/products/oatmilk-2.jpg",
    ],
    colors: [
      {
        id: "oatmilk",
        name: "Oatmilk",
        swatch: "/images/products/oatmilk-1.jpg",
      },
      {
        id: "cortado",
        name: "Cortado",
        swatch: "/images/products/cortado-1.jpg",
      },
      {
        id: "matcha-cream",
        name: "Matcha Cream",
        swatch: "/images/products/matcha-cream-1.jpg",
      },
      {
        id: "oakwood",
        name: "Oakwood",
        swatch: "/images/products/oakwood-1.jpg",
      },
    ],
    sizes: ["UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    details:
      "A neutral oat-toned low-top with tonal suede panelling, from the X Lows line. Versatile enough to pair with almost anything.",
    materials:
      "Upper: suede and canvas. Lining: cotton blend. Sole: gum rubber. Insole: memory foam cushioning.",
  },
  {
    id: "armstrong",
    name: "ARMSTRONG",
    subtitle: "X Lows",
    price: 4299,
    discountPrice: 3899,
    couponCode: "FLAT400",
    badge: null,
    primaryImage: "/images/products/armstrong-1.jpg",
    secondaryImage: "/images/products/armstrong-2.jpg",
    gallery: [
      "/images/products/armstrong-1.jpg",
      "/images/products/armstrong-2.jpg",
    ],
    colors: [
      {
        id: "armstrong",
        name: "Armstrong",
        swatch: "/images/products/armstrong-1.jpg",
      },
      {
        id: "madagascar",
        name: "Madagascar",
        swatch: "/images/products/madagascar-1.jpg",
      },
      {
        id: "cortado",
        name: "Cortado",
        swatch: "/images/products/cortado-1.jpg",
      },
      {
        id: "chestnut",
        name: "Chestnut",
        swatch: "/images/products/chestnut-1.jpg",
      },
    ],
    sizes: ["UK 3", "UK 4", "UK 5", "UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    details:
      "An all-black low-top with a tonal star panel, from the X Lows line. Understated and easy to wear with anything dark.",
    materials:
      "Upper: canvas and suede. Lining: cotton blend. Sole: gum rubber. Insole: memory foam cushioning.",
  },
  {
    id: "madagascar",
    name: "MADAGASCAR",
    subtitle: "X Lows",
    price: 4299,
    discountPrice: 3899,
    couponCode: "FLAT400",
    badge: null,
    primaryImage: "/images/products/madagascar-1.jpg",
    secondaryImage: "/images/products/madagascar-2.jpg",
    gallery: [
      "/images/products/madagascar-1.jpg",
      "/images/products/madagascar-2.jpg",
    ],
    colors: [
      {
        id: "madagascar",
        name: "Madagascar",
        swatch: "/images/products/madagascar-1.jpg",
      },
      {
        id: "armstrong",
        name: "Armstrong",
        swatch: "/images/products/armstrong-1.jpg",
      },
      {
        id: "cortado",
        name: "Cortado",
        swatch: "/images/products/cortado-1.jpg",
      },
      {
        id: "chestnut",
        name: "Chestnut",
        swatch: "/images/products/chestnut-1.jpg",
      },
    ],
    sizes: ["UK 4", "UK 5", "UK 6", "UK 7", "UK 8", "UK 9"],
    details:
      "A multicolour low-top mixing navy, olive and rust panels with a green star overlay, from the X Lows line. The boldest colourway in the collection.",
    materials:
      "Upper: canvas and suede. Lining: cotton blend. Sole: gum rubber. Insole: memory foam cushioning.",
  },
  {
    id: "chestnut",
    name: "CHESTNUT",
    subtitle: "X Lows",
    price: 4299,
    discountPrice: 3899,
    couponCode: "FLAT400",
    badge: null,
    primaryImage: "/images/products/chestnut-1.jpg",
    secondaryImage: "/images/products/chestnut-2.jpg",
    gallery: [
      "/images/products/chestnut-1.jpg",
      "/images/products/chestnut-2.jpg",
    ],
    colors: [
      {
        id: "chestnut",
        name: "Chestnut",
        swatch: "/images/products/chestnut-1.jpg",
      },
      {
        id: "armstrong",
        name: "Armstrong",
        swatch: "/images/products/armstrong-1.jpg",
      },
      {
        id: "madagascar",
        name: "Madagascar",
        swatch: "/images/products/madagascar-1.jpg",
      },
      {
        id: "cortado",
        name: "Cortado",
        swatch: "/images/products/cortado-1.jpg",
      },
    ],
    sizes: ["UK 5", "UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    details:
      "A brown-and-cream low-top with a soft, worn-in look, from the X Lows line. Pairs naturally with denim and neutral tones.",
    materials:
      "Upper: canvas and suede. Lining: cotton blend. Sole: gum rubber. Insole: memory foam cushioning.",
  },
];

// Swipeable feature slides shown below the buy box on the product page.
export const productFeatures = [
  {
    id: "durable",
    eyebrow: "And they've got balls too.",
    title: "STURDY. DURABLE. SECURE.",
    body: "Yes, they have some bones to get you through the day and night too. Yes, they have the most durable materials. Yes, the outsole is tested for almost all conditions.",
  },
  {
    id: "slip-on",
    eyebrow: "Slip. Slide. Hop. Groove. Repeat.",
    title: "EASY TO SLIP ON. EASY TO SLIP OFF.",
    body: "Once tied, these are easy to slip on. Just slide your feet in to go about your day. No nasty-lacey business, we promise.",
  },
  {
    id: "comfort",
    eyebrow: "Swipe left. See what's next.",
    title: "CAREFREE COMFORT, 9AM TO 9PM.",
    body: "From your morning run to a late night party, our 3-layer sole will keep you edgy, nimble and comfortable through it all.",
  },
];

export default products;
