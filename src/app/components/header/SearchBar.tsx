'use client'
import { Search } from 'lucide-react';

interface SearchBarProps {
  className?: string;
  autoFocus?: boolean;
}

export default function SearchBar({ className = '', autoFocus = false }: SearchBarProps) {
  return (
    <div className="relative group flex-1 max-w-3xl">
      <input
        type="text"
        placeholder="Search for products, brands and more..."
        className={`
          w-full
          min-w-[280px]
          lg:min-w-[320px]
          xl:min-w-[400px]
          2xl:min-w-[500px]
          h-11 
          pl-12 
          pr-4 
          bg-gray-50 
          border-0 
          rounded-full 
          text-gray-900 
          placeholder-gray-500 
          focus:ring-2 
          focus:ring-emerald-500 
          focus:outline-none 
          transition-all 
          group-hover:bg-gray-100
          ${className}
        `}
        autoFocus={autoFocus}
      />
      <Search 
        className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-hover:text-gray-500" 
      />
    </div>
  );
}