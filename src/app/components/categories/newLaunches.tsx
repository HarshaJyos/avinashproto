import { useState, useEffect } from 'react';
import { Card, CardContent } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '@/lib/dummyData';

const NewLaunches = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Filter only new products
  const newProducts = products.filter(product => product.isNew);

  //for others const categoryProducts = products.filter(product => product.categoryId === 'business-cards');


  // Adjust items per page based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else if (window.innerWidth < 1280) {
        setItemsPerPage(3);
      } else {
        setItemsPerPage(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(newProducts.length / itemsPerPage);
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentProducts = newProducts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white p-4 sm:p-6 lg:p-8 min-h-screen">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          New Launches
        </h1>
        <Link 
          href="/products" 
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 text-center"
        >
          View All Products
        </Link>
      </div>
      
      <div className="relative px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <Link href={`/products/${product.slug}`} key={product.id} className="transform transition-all duration-300 hover:scale-105">
              <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Image container with aspect-ratio 1:1 */}
                <div className="relative w-full pt-[100%]">
                  <div className="absolute inset-0">
                    <Image
                      src={product.images[0].url}
                      alt={product.images[0].alt}
                      fill
                      className="object-cover"
                      priority
                    />
                    {product.compareAtPrice && (
                      <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {Math.round((1 - product.price / product.compareAtPrice) * 100)}% OFF
                      </span>
                    )}
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">
                        {product.name}
                      </h2>
                      <span className="inline-flex items-center justify-center px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        New
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {product.shortDescription || product.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex flex-col">
                        <span className="text-lg font-bold text-green-600">
                          {formatPrice(product.price)}
                        </span>
                        {product.compareAtPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            {formatPrice(product.compareAtPrice)}
                          </span>
                        )}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        product.inStock 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {totalPages > 1 && (
          <>
            <button
              onClick={prevPage}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-6 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors duration-300 disabled:opacity-50"
              disabled={currentPage === 0}
              aria-label="Previous page"
            >
              <ChevronLeft size={24} className="text-gray-600" />
            </button>
            
            <button
              onClick={nextPage}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-6 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors duration-300 disabled:opacity-50"
              disabled={currentPage === totalPages - 1}
              aria-label="Next page"
            >
              <ChevronRight size={24} className="text-gray-600" />
            </button>

            <div className="flex justify-center mt-6 gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentPage === index ? 'bg-green-600 w-4' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NewLaunches;