"use client";

import React, {  useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import {
  Container,
  Typography,
  Chip,
  Breadcrumbs,
  Button,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Alert,
} from "@mui/material";
import {
  ShoppingCart,
  Heart,
  Share2,
  Check,
  Truck,
  Clock,
  Shield,
  RefreshCw,
} from "lucide-react";
import Footer from "@/app/components/Footer/footer";
import Header from "@/app/components/header/Header";
import MegaNav from "@/app/components/header/SubHeader";
import { products } from "@/lib/data";

// Format price in INR
const formatINR = (amount: number) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function ProductPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const product = products.find(p => p.slug === slug);
  if (!product) {
    notFound();
  }

  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [activeTab, setActiveTab] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (increment: boolean) => {
    const newQuantity = increment ? quantity + 1 : quantity - 1;
    if (newQuantity >= 1 && newQuantity <= product.quantity!) {
      setQuantity(newQuantity);
    }
  };

  return (
    <>
      <Header />
      <MegaNav />
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <Container maxWidth="lg" className="py-4">
          <Breadcrumbs className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-green-600">
              Home
            </Link>
            <Link
              href="/categories"
              className="text-gray-500 hover:text-green-600"
            >
              Categories
            </Link>
            <Link
              href={`/category/${product.categoryId}`}
              className="text-gray-500 hover:text-green-600"
            >
              {product.categoryId
                .replace("-", " ")
                .replace(/\b\w/g, (l) => l.toUpperCase())}
            </Link>
            <Typography color="text.primary">{product.name}</Typography>
          </Breadcrumbs>
        </Container>

        {/* Main Product Section */}
        <Container maxWidth="lg" className="mb-16">
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={selectedImage.url}
                    alt={selectedImage.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image) => (
                    <button
                      key={image.id}
                      onClick={() => setSelectedImage(image)}
                      className={`relative aspect-square rounded-lg overflow-hidden bg-gray-100 hover:ring-2 hover:ring-green-500 transition-all ${
                        selectedImage.id === image.id
                          ? "ring-2 ring-green-500"
                          : ""
                      }`}
                    >
                      <Image
                        src={image.url}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        sizes="25vw"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex gap-2">
                    {product.isNew && (
                      <Chip
                        label="New"
                        size="small"
                        className="bg-green-50 text-green-700"
                      />
                    )}
                    {product.isFeatured && (
                      <Chip
                        label="Featured"
                        size="small"
                        className="bg-green-50 text-green-700"
                      />
                    )}
                  </div>
                  <Typography
                    variant="h3"
                    className="text-3xl font-bold text-gray-900"
                  >
                    {product.name}
                  </Typography>
                  <div className="flex items-baseline gap-4">
                    <Typography
                      variant="h4"
                      className="text-2xl font-bold text-green-600"
                    >
                      {formatINR(product.price)}
                    </Typography>
                    {product.compareAtPrice && (
                      <Typography className="text-lg line-through text-red-500">
                        {formatINR(product.compareAtPrice)}
                      </Typography>
                    )}
                  </div>
                </div>

                <Typography className="text-gray-600">
                  {product.description}
                </Typography>

                {/* Stock Status */}
                <Alert
                  severity={product.inStock ? "success" : "error"}
                  icon={
                    product.inStock ? <Check className="w-5 h-5" /> : undefined
                  }
                  className={
                    product.inStock
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </Alert>

                {/* Quantity Selector and Add to Cart */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Typography className="font-medium">Quantity:</Typography>
                    <div className="flex items-center border border-gray-300 rounded">
                      <button
                        onClick={() => handleQuantityChange(false)}
                        className="px-3 py-1 hover:bg-gray-100"
                        disabled={quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-4 py-1 border-x border-gray-300">
                        {quantity}
                      </span>
                      <button
                        onClick={() => handleQuantityChange(true)}
                        className="px-3 py-1 hover:bg-gray-100"
                        disabled={quantity >= product.quantity!}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="contained"
                      startIcon={<ShoppingCart className="w-5 h-5" />}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3"
                      disabled={!product.inStock}
                    >
                      Add to Cart
                    </Button>
                    <Button
                      variant="outlined"
                      className="min-w-[48px] border-gray-300 text-gray-600 hover:bg-gray-50"
                    >
                      <Heart className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="outlined"
                      className="min-w-[48px] border-gray-300 text-gray-600 hover:bg-gray-50"
                    >
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                {/* Delivery Features */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Truck className="w-5 h-5 text-green-600" />
                    <div>
                      <Typography variant="subtitle2" className="font-medium">
                        Free Delivery
                      </Typography>
                      <Typography variant="body2" className="text-gray-600">
                        Orders over ₹10,000
                      </Typography>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Clock className="w-5 h-5 text-green-600" />
                    <div>
                      <Typography variant="subtitle2" className="font-medium">
                        Fast Production
                      </Typography>
                      <Typography variant="body2" className="text-gray-600">
                        3-4 business days
                      </Typography>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Shield className="w-5 h-5 text-green-600" />
                    <div>
                      <Typography variant="subtitle2" className="font-medium">
                        Secure Payment
                      </Typography>
                      <Typography variant="body2" className="text-gray-600">
                        100% secure checkout
                      </Typography>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <RefreshCw className="w-5 h-5 text-green-600" />
                    <div>
                      <Typography variant="subtitle2" className="font-medium">
                        Easy Returns
                      </Typography>
                      <Typography variant="body2" className="text-gray-600">
                        30-day guarantee
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-8 bg-white rounded-xl shadow-sm">
            <Tabs
              value={activeTab}
              onChange={(_, newValue) => setActiveTab(newValue)}
              className="border-b border-gray-200"
              TabIndicatorProps={{
                style: { backgroundColor: "#16a34a" },
              }}
            >
              <Tab
                label="Features"
                className={activeTab === 0 ? "text-green-600" : ""}
              />
              <Tab
                label="Specifications"
                className={activeTab === 1 ? "text-green-600" : ""}
              />
              <Tab
                label="Shipping"
                className={activeTab === 2 ? "text-green-600" : ""}
              />
            </Tabs>

            <div className="p-6">
              {activeTab === 0 && (
                <ul className="space-y-3 list-disc list-inside text-gray-600">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              )}

              {activeTab === 1 && (
                <Table>
                  <TableBody>
                    {product.specifications.map((spec) => (
                      <TableRow key={spec.name}>
                        <TableCell
                          component="th"
                          scope="row"
                          className="font-medium w-1/3"
                        >
                          {spec.name}
                        </TableCell>
                        <TableCell>{spec.value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}

              {activeTab === 2 && (
                <div className="space-y-4 text-gray-600">
                  <Typography variant="h6" className="text-gray-900">
                    Delivery Information
                  </Typography>
                  <Typography>
                    We offer free shipping on all orders above ₹10,000. Standard
                    delivery takes 5-7 business days after production. Express
                    shipping options are available at checkout.
                  </Typography>
                  <Typography variant="h6" className="text-gray-900 mt-6">
                    Returns Policy
                  </Typography>
                  <Typography>
                    We stand behind our quality and offer a 30-day satisfaction
                    guarantee. If you&apos;re not completely satisfied with your
                    purchase, please contact our customer service team.
                  </Typography>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}
