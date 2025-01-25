// Types remain the same as in your code
interface Product {
  id: string;
  name: string;
  slug: string;
  sku: string;
  description: string;
  shortDescription?: string;
  price: number;
  compareAtPrice?: number;
  categoryId: string;
  brandId?: string;
  images: {
    id: string;
    url: string;
    alt: string;
    isPrimary: boolean;
  }[];
  inStock: boolean;
  quantity?: number;
  features: string[];
  specifications: {
    name: string;
    value: string;
  }[];
  status: 'draft' | 'published' | 'archived';
  isNew?: boolean;
  isFeatured?: boolean;
}

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageSrc: string;
  backgroundColor?: string;
}

// Import your categories and products data here
// const categories: Category[] = [...];
// const products: Product[] = [...];
export const categories: Category[] = [
    {
      id: "business-cards",
      name: "Business Cards",
      slug: "business-cards",
      description: "Premium quality business cards with various finishes and materials",
      imageSrc: "/assets/categories/business-cards.jpg",
      backgroundColor: "#F8FAFC",
    },
    {
      id: "brochures-catalogs",
      name: "Brochures & Catalogs",
      slug: "brochures-catalogs",
      description: "High-quality brochures and catalogs for marketing",
      imageSrc: "/assets/categories/brochures-catalogs.jpg",
      backgroundColor: "#FFF4E5",
    },
    {
      id: "banners-signage",
      name: "Banners & Signage",
      slug: "banners-signage",
      description: "Large format printing for indoor and outdoor displays",
      imageSrc: "/assets/categories/banners-signage.jpg",
      backgroundColor: "#E5F6FF",
    },
    {
      id: "corporate-stationery",
      name: "Corporate Stationery",
      slug: "corporate-stationery",
      description: "Complete business stationery sets and letterheads",
      imageSrc: "/assets/categories/corporate-stationery.jpg",
      backgroundColor: "#F5F5F5",
    },
    {
      id: "custom-packaging",
      name: "Custom Packaging",
      slug: "custom-packaging",
      description: "Branded packaging solutions for products",
      imageSrc: "/assets/categories/custom-packaging.jpg",
      backgroundColor: "#FFF9E5",
    },
    {
      id: "custom-calendars",
      name: "Custom Calendars",
      slug: "custom-calendars",
      description: "Personalized wall and desk calendars",
      imageSrc: "/assets/categories/custom-calendars.jpg",
      backgroundColor: "#F0FFF4",
    },
    {
      id: "photo-prints",
      name: "Photo Prints",
      slug: "photo-prints",
      description: "High-quality photo printing services",
      imageSrc: "/assets/categories/photo-prints.jpg",
      backgroundColor: "#FFF0F0",
    },
    {
      id: "promotional-items",
      name: "Promotional Items",
      slug: "promotional-items",
      description: "Custom branded promotional products",
      imageSrc: "/assets/categories/promotional-items.jpg",
      backgroundColor: "#E5FFFC",
    },
    {
      id: "art-canvas-prints",
      name: "Art & Canvas Prints",
      slug: "art-canvas-prints",
      description: "Fine art and canvas printing services",
      imageSrc: "/assets/categories/art-canvas-prints.jpg",
      backgroundColor: "#F9F5FF",
    },
  ];
  
  
  export const products: Product[] = [
    {
      id: "prod-1",
      name: "Premium Business Card 1",
      slug: "premium-business-card-1",
      sku: "BC-1000",
      description: "High-quality business cards printed on premium paper with various finishing options.",
      shortDescription: "Premium business cards with professional finish",
      price: 4999,
      compareAtPrice: 6999,
      categoryId: "business-cards",
      brandId: "premium-prints",
      images: [
        {
          id: "img-1-1",
          url: "/image.jpg",
          alt: "Business Card Design 1",
          isPrimary: true
        },
        {
            id: "img-2",
            url: "/image.jpg",
            alt: "Business Card Back View",
            isPrimary: false
          },
          {
            id: "img-3",
            url: "/image.jpg",
            alt: "Business Card Stack View",
            isPrimary: false
          },
          {
            id: "img-4",
            url: "/image.jpg",
            alt: "Business Card Detail View",
            isPrimary: false
          }
      ],
      inStock: true,
      quantity: 100,
      features: [
        "Premium 350gsm paper",
        "Matte or glossy finish",
        "Full color printing",
        "Double-sided printing"
      ],
      specifications: [
        { name: "Size", value: "3.5\" x 2\"" },
        { name: "Paper Weight", value: "350gsm" },
        { name: "Finish", value: "Matte" }
      ],
      status: "published",
      isNew: true,
      isFeatured: true
    },
    {
      id: "prod-2",
      name: "Premium Business Card 2",
      slug: "premium-business-card-2",
      sku: "BC-1001",
      description: "High-quality business cards printed on premium paper with various finishing options.",
      shortDescription: "Premium business cards with professional finish",
      price: 5999,
      compareAtPrice: undefined,
      categoryId: "business-cards",
      brandId: "premium-prints",
      images: [
        {
          id: "img-2-1",
          url: "/image.jpg",
          alt: "Business Card Design 2",
          isPrimary: true
        }
      ],
      inStock: true,
      quantity: 90,
      features: [
        "Premium 350gsm paper",
        "Matte or glossy finish",
        "Full color printing",
        "Double-sided printing"
      ],
      specifications: [
        { name: "Size", value: "3.5\" x 2\"" },
        { name: "Paper Weight", value: "350gsm" },
        { name: "Finish", value: "Glossy" }
      ],
      status: "published",
      isNew: true,
      isFeatured: true
    },
    {
      id: "prod-3",
      name: "Premium Business Card 3",
      slug: "premium-business-card-3",
      sku: "BC-1002",
      description: "High-quality business cards printed on premium paper with various finishing options.",
      shortDescription: "Premium business cards with professional finish",
      price: 6999,
      compareAtPrice: 8999,
      categoryId: "business-cards",
      brandId: "premium-prints",
      images: [
        {
          id: "img-3-1",
          url: "/image.jpg",
          alt: "Business Card Design 3",
          isPrimary: true
        }
      ],
      inStock: true,
      quantity: 80,
      features: [
        "Premium 350gsm paper",
        "Matte or glossy finish",
        "Full color printing",
        "Double-sided printing"
      ],
      specifications: [
        { name: "Size", value: "3.5\" x 2\"" },
        { name: "Paper Weight", value: "350gsm" },
        { name: "Finish", value: "Matte" }
      ],
      status: "published",
      isNew: true,
      isFeatured: true
    },
    {
      id: "prod-4",
      name: "Premium Business Card 4",
      slug: "premium-business-card-4",
      sku: "BC-1003",
      description: "High-quality business cards printed on premium paper with various finishing options.",
      shortDescription: "Premium business cards with professional finish",
      price: 7999,
      compareAtPrice: undefined,
      categoryId: "business-cards",
      brandId: "premium-prints",
      images: [
        {
          id: "img-4-1",
          url: "/image.jpg",
          alt: "Business Card Design 4",
          isPrimary: true
        }
      ],
      inStock: true,
      quantity: 70,
      features: [
        "Premium 350gsm paper",
        "Matte or glossy finish",
        "Full color printing",
        "Double-sided printing"
      ],
      specifications: [
        { name: "Size", value: "3.5\" x 2\"" },
        { name: "Paper Weight", value: "350gsm" },
        { name: "Finish", value: "Glossy" }
      ],
      status: "published",
      isNew: false,
      isFeatured: true
    },
    {
      id: "prod-5",
      name: "Premium Business Card 1",
      slug: "premium-business-card-1",
      sku: "BC-1000",
      description: "High-quality business cards printed on premium paper with various finishing options.",
      shortDescription: "Premium business cards with professional finish",
      price: 4999,
      compareAtPrice: 6999,
      categoryId: "brochures-catalogs",
      brandId: "premium-prints",
      images: [
        {
          id: "img-1-1",
          url: "/image.jpg",
          alt: "Business Card Design 1",
          isPrimary: true
        }
      ],
      inStock: true,
      quantity: 100,
      features: [
        "Premium 350gsm paper",
        "Matte or glossy finish",
        "Full color printing",
        "Double-sided printing"
      ],
      specifications: [
        { name: "Size", value: "3.5\" x 2\"" },
        { name: "Paper Weight", value: "350gsm" },
        { name: "Finish", value: "Matte" }
      ],
      status: "published",
      isNew: true,
      isFeatured: true
    },
    {
      id: "prod-6",
      name: "Premium Business Card 2",
      slug: "premium-business-card-2",
      sku: "BC-1001",
      description: "High-quality business cards printed on premium paper with various finishing options.",
      shortDescription: "Premium business cards with professional finish",
      price: 5999,
      compareAtPrice: undefined,
      categoryId: "brochures-catalogs",
      brandId: "premium-prints",
      images: [
        {
          id: "img-2-1",
          url: "/image.jpg",
          alt: "Business Card Design 2",
          isPrimary: true
        }
      ],
      inStock: true,
      quantity: 90,
      features: [
        "Premium 350gsm paper",
        "Matte or glossy finish",
        "Full color printing",
        "Double-sided printing"
      ],
      specifications: [
        { name: "Size", value: "3.5\" x 2\"" },
        { name: "Paper Weight", value: "350gsm" },
        { name: "Finish", value: "Glossy" }
      ],
      status: "published",
      isNew: true,
      isFeatured: true
    },
    {
      id: "prod-7",
      name: "Premium Business Card 3",
      slug: "premium-business-card-3",
      sku: "BC-1002",
      description: "High-quality business cards printed on premium paper with various finishing options.",
      shortDescription: "Premium business cards with professional finish",
      price: 6999,
      compareAtPrice: 8999,
      categoryId: "brochures-catalogs",
      brandId: "premium-prints",
      images: [
        {
          id: "img-3-1",
          url: "/image.jpg",
          alt: "Business Card Design 3",
          isPrimary: true
        }
      ],
      inStock: true,
      quantity: 80,
      features: [
        "Premium 350gsm paper",
        "Matte or glossy finish",
        "Full color printing",
        "Double-sided printing"
      ],
      specifications: [
        { name: "Size", value: "3.5\" x 2\"" },
        { name: "Paper Weight", value: "350gsm" },
        { name: "Finish", value: "Matte" }
      ],
      status: "published",
      isNew: true,
      isFeatured: true
    },
    {
      id: "prod-8",
      name: "Premium Business Card 4",
      slug: "premium-business-card-4",
      sku: "BC-1003",
      description: "High-quality business cards printed on premium paper with various finishing options.",
      shortDescription: "Premium business cards with professional finish",
      price: 7999,
      compareAtPrice: undefined,
      categoryId: "brochures-catalogs",
      brandId: "premium-prints",
      images: [
        {
          id: "img-4-1",
          url: "/image.jpg",
          alt: "Business Card Design 4",
          isPrimary: true
        }
      ],
      inStock: true,
      quantity: 70,
      features: [
        "Premium 350gsm paper",
        "Matte or glossy finish",
        "Full color printing",
        "Double-sided printing"
      ],
      specifications: [
        { name: "Size", value: "3.5\" x 2\"" },
        { name: "Paper Weight", value: "350gsm" },
        { name: "Finish", value: "Glossy" }
      ],
      status: "published",
      isNew: false,
      isFeatured: true
    }
    // Repeat this format for products 5 through 12.
  ];