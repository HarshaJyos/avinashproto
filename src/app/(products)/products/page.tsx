"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
import Footer from '@/app/components/Footer/footer';
import Header from '@/app/components/header/Header';
import MegaNav from '@/app/components/header/SubHeader';

// Dummy Data


const formatINR = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter and sort products
  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPriceRange = priceRange === 'all' ? true :
                               priceRange === 'under5000' ? product.price < 5000 :
                               priceRange === '5000to10000' ? product.price >= 5000 && product.price <= 10000 :
                               product.price > 10000;
      const matchesCategory = selectedCategory === 'all' ? true : product.categoryId === selectedCategory;
      
      return matchesSearch && matchesPriceRange && matchesCategory;
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
      <div className="relative h-48 bg-gradient-to-r from-green-600 to-green-800">
        <Container maxWidth="lg" className="relative h-full">
          <div className="absolute inset-0 flex flex-col justify-center">
            <Breadcrumbs className="mb-4 text-white/70">
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <span className="text-white">Products</span>
            </Breadcrumbs>
            <Typography variant="h1" className="text-3xl md:text-4xl font-bold text-white mb-4">
              All Products
            </Typography>
            <Typography variant="subtitle1" className="text-white/90">
              Explore our complete collection of high-quality printing solutions
            </Typography>
          </div>
        </Container>
      </div>

      <Container maxWidth="lg" className="py-8">
        {/* Filters Section */}
        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                Category
              </InputLabel>
              <Select
                value={selectedCategory}
                label="Category"
                onChange={(e) => setSelectedCategory(e.target.value)}
                sx={{
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgb(22 163 74)',
                  },
                }}
              >
                <MenuItem value="all">All Categories</MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <Link href={`/product/${product.slug}`} key={product.id} className="group">
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-white">
                <div className="relative aspect-square">
                  <Image
                    src={product.images[0].url}
                    alt={product.images[0].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    priority={product.isFeatured}
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Typography className="text-white font-semibold">
                        Out of Stock
                      </Typography>
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex flex-col">
                      <Typography variant="h6" className="font-semibold text-gray-900 text-sm md:text-base line-clamp-1">
                        {product.name}
                      </Typography>
                      <Typography variant="body2" className="text-gray-500 text-sm">
                        {categories.find(cat => cat.id === product.categoryId)?.name}
                      </Typography>
                    </div>
                    <div className="flex gap-1 flex-wrap justify-end">
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
                  <Typography variant="body2" className="text-gray-600 mb-4 line-clamp-2 text-sm">
                    {product.shortDescription}
                  </Typography>
                  <div className="flex justify-between items-center">
                    <div className="flex items-baseline gap-2">
                      <Typography variant="h6" className="font-bold text-green-600 text-sm md:text-base">
                        {formatINR(product.price)}
                      </Typography>
                      {product.compareAtPrice && (
                        <Typography variant="body2" className="line-through text-red-500 text-xs md:text-sm">
                          {formatINR(product.compareAtPrice)}
                        </Typography>
                      )}
                    </div>
                    <ArrowRight className="w-5 h-5 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
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