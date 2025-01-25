interface Image {
    id: string;
    url: string;
    alt: string;
    isPrimary: boolean;
  }
  
  interface Specification {
    name: string;
    value: string;
  }
  
  /*interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
    icon?: string;
    imageSrc: string;
    backgroundColor?: string;
    isNew?: boolean;
    isFeatured?: boolean;
    parentCategoryId?: string | null;
    meta?: {
      title?: string;
      description?: string;
      keywords?: string[];
    }
  }*/
  
  export interface Product {
    id: string;
    name: string;
    slug: string;
    sku: string;
    description: string;
    shortDescription?: string;
    
    // Pricing
    price: number;
    compareAtPrice?: number;
    
    // Categories and Brand
    categoryId: string;
    brandId?: string;
    
    // Media
    images: Image[];
    
    // Inventory
    inStock: boolean;
    quantity?: number;
    
    // Details
    features: string[];
    specifications: Specification[];
    
    // SEO and Meta
    meta?: {
      title?: string;
      description?: string;
      keywords?: string[];
    }
    
    // Status
    status: 'draft' | 'published' | 'archived';
    isNew?: boolean;
    isFeatured?: boolean;
    
    // Timestamps
    createdAt: Date;
    updatedAt: Date;
  }
  
  /* Example usage:
  const sampleProduct: Product = {
    id: "1",
    name: "Case Bound Diary",
    slug: "case-bound-diary",
    sku: "CBD-001",
    description: "Elegant case-bound diary with premium quality pages",
    shortDescription: "Premium quality diary for daily use",
    
    price: 499.99,
    compareAtPrice: 599.99,
    
    categoryId: "stationery",
    brandId: "elite-stationery",
    
    images: [
      {
        id: "1",
        url: "/assets/products/case-bound-diary-main.jpg",
        alt: "Case Bound Diary - Main View",
        isPrimary: true
      },
      {
        id: "2",
        url: "/assets/products/case-bound-diary-open.jpg",
        alt: "Case Bound Diary - Open View",
        isPrimary: false
      }
    ],
    
    inStock: true,
    quantity: 50,
    
    features: [
      "Premium quality paper - 80 GSM",
      "Hard bound cover with elegant finish",
      "Daily diary format with date marking",
      "Bookmark ribbon included"
    ],
    
    specifications: [
      { name: "Dimensions", value: "148 x 210 mm (A5)" },
      { name: "Weight", value: "450g" },
      { name: "Material", value: "Premium paper with hardbound cover" },
      { name: "Binding", value: "Case binding" },
      { name: "Page Count", value: "365" },
      { name: "Paper Quality", value: "80 GSM" }
    ],
    
    meta: {
      title: "Case Bound Diary - Elite Stationery",
      description: "Premium quality case bound diary for professional use",
      keywords: ["diary", "case bound", "stationery", "professional"]
    },
    
    status: "published",
    isNew: true,
    isFeatured: true,
    
    createdAt: new Date("2024-01-19"),
    updatedAt: new Date("2024-01-19")
  }
  
  const sampleCategory: Category = {
    id: "stationery",
    name: "Stationery",
    slug: "stationery",
    description: "High-quality stationery products for professionals",
    icon: "📚",
    imageSrc: "/assets/categories/stationery.jpg",
    backgroundColor: "#F5F5F5",
    isNew: false,
    isFeatured: true,
    parentCategoryId: null,
    meta: {
      title: "Professional Stationery Products",
      description: "Browse our collection of premium stationery items",
      keywords: ["stationery", "office supplies", "professional"]
    }
  }*/