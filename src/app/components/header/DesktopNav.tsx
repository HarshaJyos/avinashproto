// components/header/DesktopNav.tsx
import Link from 'next/link';
import { HelpCircle, User, LogOut } from 'lucide-react';
import Logo from './Logo';
import SearchBar from './SearchBar';
//import CountBadge from './CountBadge';
import { useAuth } from '@/contexts/AuthContext';


export default function DesktopNav() {
  const { user } = useAuth();

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/users/auth/logout', {
        method: 'POST',
      });

      if (response.ok) {
        window.location.href = '/';
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="hidden lg:flex items-center justify-between px-4 lg:px-8 xl:px-12 h-16 bg-white shadow-sm">
      {/* Left Section: Logo and Search Bar */}
      <div className="flex items-center space-x-6 lg:space-x-12">
        <Logo className="w-24 h-6 sm:w-32 sm:h-8" />
        <SearchBar />
      </div>

      {/* Center Section: Navigation Links */}
      <div className="flex items-center space-x-4 lg:space-x-8">
        <Link
          href="/help"
          className="flex items-center space-x-1 lg:space-x-2 text-xs lg:text-sm text-gray-700 hover:text-emerald-600 transition-colors"
        >
          <HelpCircle className="h-4 w-4 lg:h-5 lg:w-5" />
          <span>Help Center</span>
        </Link>
      </div>

      {/* Right Section: User Options */}
      <div className="flex items-center space-x-4 lg:space-x-6">
        {user ? (
          <div className="flex items-center space-x-4 lg:space-x-6">
            <Link
              href="/account"
              className="flex items-center space-x-1 lg:space-x-2 text-xs lg:text-sm text-gray-700 hover:text-emerald-600 transition-colors"
            >
              <User className="h-4 w-4 lg:h-5 lg:w-5" />
              <span>{user.name}</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-1 lg:space-x-2 text-xs lg:text-sm text-gray-700 hover:text-emerald-600 transition-colors"
            >
              <LogOut className="h-4 w-4 lg:h-5 lg:w-5" />
              <span>Logout</span>
            </button>
          </div>
        ) : (
          <>
            <Link
              href="/login"
              className="text-xs lg:text-sm text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="px-4 lg:px-6 py-1 lg:py-2 text-xs lg:text-sm text-white bg-emerald-600 rounded-full hover:bg-emerald-700 transition-colors shadow-sm"
            >
              Sign Up
            </Link>
          </>
        )}

        {/* Wishlist and Cart */}
        {/*<div className="flex items-center space-x-3 lg:space-x-4">
          <button
            className="relative p-1 lg:p-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all"
            aria-label="Wishlist"
          >
            <Heart className="h-5 w-5" />
            <CountBadge count={wishlistCount} />
          </button>

          <button
            className="relative p-1 lg:p-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all"
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5" />
            <CountBadge count={cartCount} />
          </button>
        </div>*/}
      </div>
    </div>
  );
}