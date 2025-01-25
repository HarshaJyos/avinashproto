import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  TrendingUp,
  ArrowRight,
  Printer,
  BookOpen,
  Gift,
  Calendar,
  Frame,
  PenTool,
} from "lucide-react";
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Container,
} from "@mui/material";
import Link from "next/link";

// Define type for Lucide icons
type LucideIcon = React.ComponentType<{
  className?: string;
  size?: number | string;
}>;

// Icon mapping
const iconMap: Record<string, LucideIcon> = {
  printer: Printer,
  bookOpen: BookOpen,
  gift: Gift,
  calendar: Calendar,
  frame: Frame,
  penTool: PenTool,
};

// Category interface
interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon?: keyof typeof iconMap;
  imageSrc: string;
  backgroundColor?: string;
  isNew?: boolean;
  isFeatured?: boolean;
  parentCategoryId?: string | null;
  meta?: {
    title?: string;
    description?: string;
    keywords?: string[];
  };
}

// Dummy categories data
const categories: Category[] = [
  {
    id: "business-cards",
    name: "Business Cards",
    slug: "business-cards",
    description: "Premium quality business cards with various finishes and materials",
    icon: "printer",
    imageSrc: "https://res.cloudinary.com/dlfgy3dfq/image/upload/v1737656748/bussiness_cards_u0orpi.jpg",
    backgroundColor: "#F8FAFC",
    isFeatured: true,
    meta: {
      title: "Professional Business Cards Printing",
      keywords: ["business cards", "printing", "professional"]
    }
  },
  {
    id: "brochures",
    name: "Brochures & Catalogs",
    slug: "brochures-catalogs",
    description: "High-quality brochures and catalogs for marketing",
    icon: "bookOpen",
    imageSrc: "https://res.cloudinary.com/dlfgy3dfq/image/upload/v1737656749/Brochures_Catalogs_sru7td.jpg",
    backgroundColor: "#F0FDF4",
    isNew: true,
    isFeatured: true,
    meta: {
      title: "Professional Brochure Printing Services",
      keywords: ["brochures", "catalogs", "marketing"]
    }
  },
  {
    id: "banners",
    name: "Banners & Signage",
    slug: "banners-signage",
    description: "Large format printing for indoor and outdoor displays",
    icon: "frame",
    imageSrc: "https://res.cloudinary.com/dlfgy3dfq/image/upload/v1737656425/signages_atbfch.webp",
    backgroundColor: "#EFF6FF",
    isFeatured: true,
    meta: {
      title: "Custom Banner Printing Solutions",
      keywords: ["banners", "signage", "large format"]
    }
  },
  {
    id: "stationery",
    name: "Corporate Stationery",
    slug: "corporate-stationery",
    description: "Complete business stationery sets and letterheads",
    icon: "penTool",
    imageSrc: "https://res.cloudinary.com/dlfgy3dfq/image/upload/v1737656392/stationary_mu2nhk.webp",
    backgroundColor: "#FDF4FF",
    isFeatured: true,
  },
  {
    id: "packaging",
    name: "Custom Packaging",
    slug: "custom-packaging",
    description: "Branded packaging solutions for products",
    icon: "gift",
    imageSrc: "https://res.cloudinary.com/dlfgy3dfq/image/upload/v1737656483/packaging_nqimrp.webp",
    backgroundColor: "#FEF2F2",
    isNew: true,
    meta: {
      title: "Custom Product Packaging Solutions",
      keywords: ["packaging", "boxes", "custom"]
    }
  },
  {
    id: "calendars",
    name: "Custom Calendars",
    slug: "custom-calendars",
    description: "Personalized wall and desk calendars",
    icon: "calendar",
    imageSrc: "https://res.cloudinary.com/dlfgy3dfq/image/upload/v1737655824/calenders_vdm26a.webp",
    backgroundColor: "#F5F3FF",
  },
  {
    id: "photo-prints",
    name: "Photo Prints",
    slug: "photo-prints",
    description: "High-quality photo printing services",
    icon: "frame",
    imageSrc: "https://res.cloudinary.com/dlfgy3dfq/image/upload/v1737655943/photo-gifts_s3wquq.webp",
    backgroundColor: "#ECFDF5",
    isFeatured: true,
  },
  {
    id: "promotional",
    name: "Promotional Items",
    slug: "promotional-items",
    description: "Custom branded promotional products",
    icon: "gift",
    imageSrc: "https://res.cloudinary.com/dlfgy3dfq/image/upload/v1737656595/marketing_hozo12.webp",
    backgroundColor: "#FEF3C7",
  },
  {
    id: "art-prints",
    name: "Art & Canvas Prints",
    slug: "art-prints",
    description: "Fine art and canvas printing services",
    icon: "penTool",
    imageSrc: "https://res.cloudinary.com/dlfgy3dfq/image/upload/v1737656749/art_and_print_ztrlqp.jpg",
    backgroundColor: "#F3F4F6",
    isFeatured: true,
  },
];

const Categories = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };


  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
    hover: { scale: 1.02 },
  };

  return (
    <Box className="bg-white py-16">
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <Box>
            <Typography
              variant="h2"
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
            >
              Print & Design Services
            </Typography>
            <Typography className="text-gray-600 mt-2 text-lg">
              Professional printing solutions for all your needs
            </Typography>
          </Box>

          <Box className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
            <Chip
              icon={<Sparkles className="w-4 h-4" />}
              label="Same Day Available"
              sx={{ bgcolor: "green.50", color: "green.700" }}
            />
            <Chip
              icon={<TrendingUp className="w-4 h-4" />}
              label="Featured Services"
              sx={{ bgcolor: "blue.50", color: "blue.700" }}
            />
          </Box>
        </Box>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category) => {
            const IconComponent = category.icon ? iconMap[category.icon] : null;
            
            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover="hover"
                className="w-full h-full"
              >
                <Link
                  href={`/category/${category.slug}`}
                  passHref
                  className="block h-full"
                >
                  <Card
                    className="h-full flex flex-col rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    sx={{ backgroundColor: category.backgroundColor }}
                  >
                    {/* Image Container */}
                    <div className="relative w-full pt-[56.25%]">
                      <div className="absolute inset-0">
                        <Image
                          src={category.imageSrc}
                          alt={category.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          priority={category.isFeatured}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    </div>

                    <CardContent className="flex-1 p-6">
                      <Box className="flex justify-between items-start mb-3">
                        <Box className="flex items-center gap-2">
                          <Typography variant="h5" className="font-bold text-gray-900">
                            {category.name}
                          </Typography>
                          {IconComponent && (
                            <IconComponent className="w-5 h-5 text-gray-700" />
                          )}
                        </Box>
                        <Box className="flex gap-2">
                          {category.isNew && (
                            <Chip
                              label="New"
                              size="small"
                              sx={{ bgcolor: "blue.50", color: "blue.700" }}
                            />
                          )}
                          {category.isFeatured && (
                            <Chip
                              label="Featured"
                              size="small"
                              sx={{ bgcolor: "purple.50", color: "purple.700" }}
                            />
                          )}
                        </Box>
                      </Box>

                      <Typography className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {category.description}
                      </Typography>

                      <Box className="flex justify-between items-center mt-auto pt-2">
                        <Typography variant="body2" className="text-gray-500">
                          {category.meta?.keywords?.length || 0} services
                        </Typography>
                        <ArrowRight className="w-5 h-5 text-green-600" />
                      </Box>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Box>
  );
};

export default Categories;