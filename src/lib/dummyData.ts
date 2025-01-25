import { Product } from '@/types/types';

export const products: Product[] = [
  // Business Cards Category
  {
    id: "bc-premium-1",
    name: "Standard Business Card Set",
    slug: "standard-business-card-set",
    sku: "BC-STD-001",
    description: "Professional business cards with classic matte finish, ideal for corporate branding.",
    shortDescription: "Classic matte business cards",
    price: 49.99,
    compareAtPrice: 69.99,
    categoryId: "business-cards",
    brandId: "premium-prints",
    images: [
      {
        id: "bc-img-1",
        url: "/api/placeholder/400/300",
        alt: "Standard Business Card Set",
        isPrimary: true
      }
    ],
    inStock: true,
    quantity: 100,
    features: [
      "350gsm premium paper",
      "Matte finish",
      "Full color printing",
      "Double-sided design"
    ],
    specifications: [
      { name: "Size", value: "3.5\" x 2\"" },
      { name: "Quantity", value: "100 cards" },
      { name: "Finish", value: "Matte" }
    ],
    status: "published",
    isNew: false,
    isFeatured: true,
    createdAt: new Date("2025-01-20T14:30:00Z"),
    updatedAt: new Date("2025-01-20T14:30:00Z")
  },
  {
    id: "bc-premium-2",
    name: "Premium Glossy Business Card Set",
    slug: "premium-glossy-business-card-set",
    sku: "BC-GLO-002",
    description: "High-end business cards with luxurious glossy finish for maximum impact.",
    shortDescription: "Glossy premium business cards",
    price: 59.99,
    compareAtPrice: 79.99,
    categoryId: "business-cards",
    brandId: "premium-prints",
    images: [
      {
        id: "bc-img-2",
        url: "https://res.cloudinary.com/dlfgy3dfq/image/upload/v1737657527/Premium_Glossy_Business_Card_Set_pgv7u0.jpg",
        alt: "Premium Glossy Business Card Set",
        isPrimary: true
      }
    ],
    inStock: true,
    quantity: 100,
    features: [
      "350gsm premium paper",
      "Glossy finish",
      "Full color printing",
      "Double-sided design"
    ],
    specifications: [
      { name: "Size", value: "3.5\" x 2\"" },
      { name: "Quantity", value: "100 cards" },
      { name: "Finish", value: "Glossy" }
    ],
    status: "published",
    isNew: true,
    isFeatured: true,
    createdAt: new Date("2025-01-20T14:30:00Z"),
    updatedAt: new Date("2025-01-20T14:30:00Z")
  },
  // Brochures & Catalogs Category
  {
    id: "brochure-1",
    name: "Standard Marketing Brochure",
    slug: "standard-marketing-brochure",
    sku: "BROC-STD-001",
    description: "Professional tri-fold marketing brochure for comprehensive brand communication.",
    shortDescription: "Tri-fold marketing brochure",
    price: 99.99,
    compareAtPrice: 129.99,
    categoryId: "brochures-catalogs",
    brandId: "premium-prints",
    images: [
      {
        id: "broc-img-1",
        url: "https://res.cloudinary.com/dlfgy3dfq/image/upload/v1737657528/Standard_Marketing_Brochure_a9mg1e.jpg",
        alt: "Standard Marketing Brochure",
        isPrimary: true
      }
    ],
    inStock: true,
    quantity: 50,
    features: [
      "High-quality glossy paper",
      "Full color printing",
      "Tri-fold design",
      "Custom layout options"
    ],
    specifications: [
      { name: "Size", value: "8.5\" x 11\"" },
      { name: "Quantity", value: "50 brochures" },
      { name: "Paper", value: "100lb glossy" }
    ],
    status: "published",
    isNew: true,
    isFeatured: true,
    createdAt: new Date("2025-01-20T14:30:00Z"),
    updatedAt: new Date("2025-01-20T14:30:00Z")
  },
  // Banners & Signage Category
  {
    id: "banner-1",
    name: "Standard Vinyl Banner",
    slug: "standard-vinyl-banner",
    sku: "BNR-VNL-001",
    description: "Durable outdoor vinyl banner for maximum visibility and brand promotion.",
    shortDescription: "Outdoor promotional vinyl banner",
    price: 149.99,
    compareAtPrice: 199.99,
    categoryId: "banners-signage",
    brandId: "premium-prints",
    images: [
      {
        id: "bnr-img-1",
        url: "/api/placeholder/400/300",
        alt: "Standard Vinyl Banner",
        isPrimary: true
      }
    ],
    inStock: true,
    quantity: 25,
    features: [
      "Weatherproof vinyl material",
      "Full color printing",
      "Reinforced edges",
      "Grommet installation"
    ],
    specifications: [
      { name: "Size", value: "3' x 6'" },
      { name: "Quantity", value: "1 banner" },
      { name: "Material", value: "13oz vinyl" }
    ],
    status: "published",
    isNew: false,
    isFeatured: true,
    createdAt: new Date("2025-01-20T14:30:00Z"),
    updatedAt: new Date("2025-01-20T14:30:00Z")
  },
  // Custom Packaging Category
  {
    id: "packaging-1",
    name: "Standard Product Packaging Box",
    slug: "standard-product-packaging-box",
    sku: "PKG-STD-001",
    description: "Custom branded packaging box for professional product presentation.",
    shortDescription: "Custom branded packaging solution",
    price: 79.99,
    compareAtPrice: 99.99,
    categoryId: "custom-packaging",
    brandId: "premium-prints",
    images: [
      {
        id: "pkg-img-1",
        url: "https://res.cloudinary.com/dlfgy3dfq/image/upload/v1737657534/Standard_Product_Packaging_Box_h4yucu.jpg",
        alt: "Standard Product Packaging Box",
        isPrimary: true
      }
    ],
    inStock: true,
    quantity: 50,
    features: [
      "Full color custom printing",
      "Sturdy cardboard construction",
      "Custom size options",
      "Brand logo integration"
    ],
    specifications: [
      { name: "Size", value: "8\" x 6\" x 4\"" },
      { name: "Quantity", value: "50 boxes" },
      { name: "Material", value: "Kraft cardboard" }
    ],
    status: "published",
    isNew: true,
    isFeatured: false,
    createdAt: new Date("2025-01-20T14:30:00Z"),
    updatedAt: new Date("2025-01-20T14:30:00Z")
  },
  {
    id: "cal-1",
    name: "Professional Wall Calendar",
    slug: "professional-wall-calendar",
    sku: "CAL-WALL-001",
    description: "Custom-designed wall calendar with high-quality paper and professional layout.",
    shortDescription: "Corporate wall calendar printing",
    price: 39.99,
    compareAtPrice: 59.99,
    categoryId: "custom-calendars",
    brandId: "premium-prints",
    images: [
      {
        id: "cal-img-1",
        url: "https://res.cloudinary.com/dlfgy3dfq/image/upload/v1737657532/Professional_Wall_Calendar_jm8clj.jpg",
        alt: "Professional Wall Calendar",
        isPrimary: true
      }
    ],
    inStock: true,
    quantity: 100,
    features: [
      "12-month professional design",
      "High-quality glossy paper",
      "Custom branding options",
      "Spiral-bound"
    ],
    specifications: [
      { name: "Size", value: "11\" x 17\"" },
      { name: "Paper", value: "100lb glossy" },
      { name: "Binding", value: "Spiral-bound" }
    ],
    status: "published",
    isNew: true,
    isFeatured: false,
    createdAt: new Date("2025-01-20T14:30:00Z"),
    updatedAt: new Date("2025-01-20T14:30:00Z")
  },
  // Photo Prints Category
  {
    id: "photo-1",
    name: "Premium Photo Print Set",
    slug: "premium-photo-print-set",
    sku: "PHOTO-PRO-001",
    description: "High-quality professional photo printing with archival-grade ink and paper.",
    shortDescription: "Professional-grade photo printing",
    price: 29.99,
    compareAtPrice: 49.99,
    categoryId: "photo-prints",
    brandId: "premium-prints",
    images: [
      {
        id: "photo-img-1",
        url: "https://res.cloudinary.com/dlfgy3dfq/image/upload/v1737657536/Premium_Photo_Print_Set_h6ppg8.jpg",
        alt: "Premium Photo Print Set",
        isPrimary: true
      }
    ],
    inStock: true,
    quantity: 50,
    features: [
      "Archival-grade ink",
      "Multiple size options",
      "Glossy and matte finishes",
      "Professional color correction"
    ],
    specifications: [
      { name: "Sizes", value: "4\"x6\", 5\"x7\", 8\"x10\"" },
      { name: "Finish", value: "Glossy, Matte" },
      { name: "Quantity", value: "10 prints per set" }
    ],
    status: "published",
    isNew: true,
    isFeatured: true,
    createdAt: new Date("2025-01-20T14:30:00Z"),
    updatedAt: new Date("2025-01-20T14:30:00Z")
  },
  // Promotional Items Category
  {
    id: "promo-1",
    name: "Custom Branded Tote Bags",
    slug: "custom-branded-tote-bags",
    sku: "PROMO-TOTE-001",
    description: "Eco-friendly tote bags with full-color custom branding for corporate events.",
    shortDescription: "Custom promotional tote bags",
    price: 12.99,
    compareAtPrice: 19.99,
    categoryId: "promotional-items",
    brandId: "premium-prints",
    images: [
      {
        id: "promo-img-1",
        url: "/api/placeholder/400/300",
        alt: "Custom Branded Tote Bags",
        isPrimary: true
      }
    ],
    inStock: true,
    quantity: 100,
    features: [
      "Eco-friendly canvas material",
      "Full-color custom printing",
      "Multiple size options",
      "Durable construction"
    ],
    specifications: [
      { name: "Material", value: "Heavy-duty canvas" },
      { name: "Size", value: "15\" x 16\"" },
      { name: "Quantity", value: "50 bags minimum" }
    ],
    status: "published",
    isNew: false,
    isFeatured: true,
    createdAt: new Date("2025-01-20T14:30:00Z"),
    updatedAt: new Date("2025-01-20T14:30:00Z")
  },
  // Art & Canvas Prints Category
  {
    id: "canvas-1",
    name: "Premium Canvas Print",
    slug: "premium-canvas-print",
    sku: "CANVAS-PRO-001",
    description: "Museum-quality canvas print with professional stretching and gallery finish.",
    shortDescription: "High-end canvas art printing",
    price: 99.99,
    compareAtPrice: 149.99,
    categoryId: "art-canvas-prints",
    brandId: "premium-prints",
    images: [
      {
        id: "canvas-img-1",
        url: "https://res.cloudinary.com/dlfgy3dfq/image/upload/v1737657534/Premium_Canvas_Print_wubqt8.jpg",
        alt: "Premium Canvas Print",
        isPrimary: true
      }
    ],
    inStock: true,
    quantity: 25,
    features: [
      "Archival-quality canvas",
      "Professional stretching",
      "UV-resistant ink",
      "Gallery wrap option"
    ],
    specifications: [
      { name: "Sizes", value: "16\"x20\", 24\"x36\"" },
      { name: "Finish", value: "Matte, Satin" },
      { name: "Depth", value: "1.5\" gallery wrap" }
    ],
    status: "published",
    isNew: true,
    isFeatured: true,
    createdAt: new Date("2025-01-20T14:30:00Z"),
    updatedAt: new Date("2025-01-20T14:30:00Z")
  },
  // Corporate Stationery Category
  {
    id: "stationery-1",
    name: "Executive Corporate Stationery Set",
    slug: "executive-corporate-stationery-set",
    sku: "STAT-EXEC-001",
    description: "Comprehensive corporate stationery package including letterheads, envelopes, and business cards.",
    shortDescription: "Complete corporate branding package",
    price: 199.99,
    compareAtPrice: 299.99,
    categoryId: "corporate-stationery",
    brandId: "premium-prints",
    images: [
      {
        id: "stationery-img-1",
        url: "/api/placeholder/400/300",
        alt: "Executive Corporate Stationery Set",
        isPrimary: true
      }
    ],
    inStock: true,
    quantity: 50,
    features: [
      "Matching letterhead, envelopes, and business cards",
      "Premium 100lb paper",
      "Custom design consultation",
      "Professional branding"
    ],
    specifications: [
      { name: "Letterhead", value: "8.5\" x 11\"" },
      { name: "Envelopes", value: "#10 standard" },
      { name: "Quantity", value: "250 each item" }
    ],
    status: "published",
    isNew: false,
    isFeatured: true,
    createdAt: new Date("2025-01-20T14:30:00Z"),
    updatedAt: new Date("2025-01-20T14:30:00Z")
  },
  // Additional Business Cards Category
  {
    id: "bc-premium-3",
    name: "Luxury Embossed Business Cards",
    slug: "luxury-embossed-business-cards",
    sku: "BC-LUX-003",
    description: "Premium business cards with elegant embossed finish and metallic accents.",
    shortDescription: "Luxury embossed business cards",
    price: 89.99,
    compareAtPrice: 129.99,
    categoryId: "business-cards",
    brandId: "premium-prints",
    images: [
      {
        id: "bc-img-3",
        url: "https://res.cloudinary.com/dlfgy3dfq/image/upload/v1737657532/Luxury_Embossed_Business_Cards_mzhl8o.jpg",
        alt: "Luxury Embossed Business Cards",
        isPrimary: true
      }
    ],
    inStock: true,
    quantity: 50,
    features: [
      "Embossed texture",
      "Metallic foil accents",
      "Premium 400gsm paper",
      "Custom design consultation"
    ],
    specifications: [
      { name: "Size", value: "3.5\" x 2\"" },
      { name: "Quantity", value: "100 cards" },
      { name: "Finish", value: "Embossed with foil" }
    ],
    status: "published",
    isNew: true,
    isFeatured: false,
    createdAt: new Date("2025-01-20T14:30:00Z"),
    updatedAt: new Date("2025-01-20T14:30:00Z")
  },
  // Additional Brochures Category
  {
    id: "brochure-2",
    name: "Premium Product Catalog",
    slug: "premium-product-catalog",
    sku: "BROC-CAT-002",
    description: "High-end product catalog with sophisticated design for luxury brands.",
    shortDescription: "Luxury product catalog printing",
    price: 149.99,
    compareAtPrice: 199.99,
    categoryId: "brochures-catalogs",
    brandId: "premium-prints",
    images: [
      {
        id: "broc-img-2",
        url: "/api/placeholder/400/300",
        alt: "Premium Product Catalog",
        isPrimary: true
      }
    ],
    inStock: true,
    quantity: 25,
    features: [
      "Perfect bound",
      "High-quality art paper",
      "Full color printing",
      "Custom layout design"
    ],
    specifications: [
      { name: "Size", value: "8.5\" x 11\"" },
      { name: "Pages", value: "32 pages" },
      { name: "Paper", value: "100lb art paper" }
    ],
    status: "published",
    isNew: false,
    isFeatured: true,
    createdAt: new Date("2025-01-20T14:30:00Z"),
    updatedAt: new Date("2025-01-20T14:30:00Z")
  },
  // Additional Banners Category
  {
    id: "banner-2",
    name: "Indoor Retractable Banner Stand",
    slug: "indoor-retractable-banner-stand",
    sku: "BNR-RET-002",
    description: "Professional retractable banner stand for indoor events and exhibitions.",
    shortDescription: "Professional indoor banner display",
    price: 129.99,
    compareAtPrice: 179.99,
    categoryId: "banners-signage",
    brandId: "premium-prints",
    images: [
      {
        id: "bnr-img-2",
        url: "https://res.cloudinary.com/dlfgy3dfq/image/upload/v1737657531/Indoor_Retractable_Banner_Stand_qyjccp.jpg",
        alt: "Indoor Retractable Banner Stand",
        isPrimary: true
      }
    ],
    inStock: true,
    quantity: 30,
    features: [
      "Lightweight aluminum stand",
      "Full color printing",
      "Easy setup",
      "Protective carrying case"
    ],
    specifications: [
      { name: "Size", value: "33\" x 79\"" },
      { name: "Material", value: "Vinyl banner with aluminum stand" },
      { name: "Carrying Case", value: "Included" }
    ],
    status: "published",
    isNew: true,
    isFeatured: false,
    createdAt: new Date("2025-01-20T14:30:00Z"),
    updatedAt: new Date("2025-01-20T14:30:00Z")
  }
];