"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import {
  Container,
  Typography,
  TextField,
  Card,
  CardContent,
  Chip,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Breadcrumbs,
} from '@mui/material';
import { Search, ArrowRight } from 'lucide-react';
import { categories, products } from '@/lib/data';
import Header from '@/app/components/header/Header';
import MegaNav from '@/app/components/header/SubHeader';
import Footer from '@/app/components/Footer/footer';



// Dummy Data



const formatINR = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function CategoryPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');

  // Find the current category based on the slug
  const currentCategory = categories.find(category => category.slug === slug);

  // If category doesn't exist, trigger 404
  if (!currentCategory) {
    notFound();
  }

  // Get products for the current category
  const categoryProducts = products.filter(product => product.categoryId === currentCategory.id);

  // Filter and sort products
  const filteredProducts = categoryProducts
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPriceRange = priceRange === 'all' ? true :
                               priceRange === 'under5000' ? product.price < 5000 :
                               priceRange === '5000to10000' ? product.price >= 5000 && product.price <= 10000 :
                               product.price > 10000;
      return matchesSearch && matchesPriceRange;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'priceLowToHigh':
          return a.price - b.price;
        case 'priceHighToLow':
          return b.price - a.price;
        case 'newest':
          return b.isNew ? 1 : -1;
        default:
          return b.isFeatured ? 1 : -1;
      }
    });

  return (
    <>
    <Header/>
    <MegaNav/>
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-64 bg-gradient-to-r from-green-600 to-green-800"
        style={{ backgroundColor: currentCategory.backgroundColor }}
      >
        <Container maxWidth="lg" className="relative h-full">
          <div className="absolute inset-0 flex flex-col justify-center">
            <Breadcrumbs className="mb-4 text-white/70">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <Link href="/categories" className="hover:text-white">
                Categories
              </Link>
              <span className="text-white">{currentCategory.name}</span>
            </Breadcrumbs>
            <Typography variant="h1" className="text-4xl font-bold text-white mb-4">
              {currentCategory.name}
            </Typography>
            <Typography variant="subtitle1" className="text-white/90">
              {currentCategory.description}
            </Typography>
          </div>
        </Container>
      </div>

      <Container maxWidth="lg" className="py-8">
        {/* Filters Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search className="w-5 h-5 text-gray-400" />
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: 'rgb(22 163 74)',
                  },
                },
              }}
            />

            <FormControl fullWidth>
              <InputLabel sx={{ '&.Mui-focused': { color: 'rgb(22 163 74)' } }}>
                Sort By
              </InputLabel>
              <Select
                value={sortBy}
                label="Sort By"
                onChange={(e) => setSortBy(e.target.value)}
                sx={{
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgb(22 163 74)',
                  },
                }}
              >
                <MenuItem value="featured">Featured</MenuItem>
                <MenuItem value="newest">Newest</MenuItem>
                <MenuItem value="priceLowToHigh">Price: Low to High</MenuItem>
                <MenuItem value="priceHighToLow">Price: High to Low</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel sx={{ '&.Mui-focused': { color: 'rgb(22 163 74)' } }}>
                Price Range
              </InputLabel>
              <Select
                value={priceRange}
                label="Price Range"
                onChange={(e) => setPriceRange(e.target.value)}
                sx={{
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgb(22 163 74)',
                  },
                }}
              >
                <MenuItem value="all">All Prices</MenuItem>
                <MenuItem value="under5000">Under ₹5,000</MenuItem>
                <MenuItem value="5000to10000">₹5,000 - ₹10,000</MenuItem>
                <MenuItem value="over10000">Over ₹10,000</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Link href={`/product/${product.slug}`} key={product.id}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white">
                <div className="relative pt-[75%]">
                  <Image
                    src={product.images[0].url}
                    alt={product.images[0].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Typography className="text-white font-semibold">
                        Out of Stock
                      </Typography>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <Typography variant="h6" className="font-semibold text-gray-900">
                      {product.name}
                    </Typography>
                    <div className="flex gap-2">
                      {product.isNew && (
                        <Chip
                          size="small"
                          label="New"
                          className="bg-green-50 text-green-700"
                        />
                      )}
                      {product.isFeatured && (
                        <Chip
                          size="small"
                          label="Featured"
                          className="bg-green-50 text-green-700"
                        />
                      )}
                    </div>
                  </div>
                  <Typography variant="body2" className="text-gray-600 mb-4 line-clamp-2">
                    {product.shortDescription}
                  </Typography>
                  <div className="flex justify-between items-center">
                    <div className="flex items-baseline gap-2">
                      <Typography variant="h6" className="font-bold text-green-600">
                        {formatINR(product.price)}
                      </Typography>
                      {product.compareAtPrice && (
                        <Typography variant="body2" className="line-through text-red-500">
                          {formatINR(product.compareAtPrice)}
                        </Typography>
                      )}
                    </div>
                    <ArrowRight className="w-5 h-5 text-green-600" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm">
            <Typography variant="h6" className="mb-2 text-gray-900">
              No products found
            </Typography>
            <Typography variant="body2" className="text-gray-600">
              Try adjusting your search or filter criteria
            </Typography>
          </div>
        )}
      </Container>
    </div>
    <Footer/>
    </>
  );
}