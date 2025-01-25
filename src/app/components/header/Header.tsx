// components/header/Header.tsx
import { useState } from "react";
import { navItems } from "../../types/header";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
//import MobileMenu from "./MobileMenu";
//import dynamic from "next/dynamic";
import React from "react";
//import MobileSearchModal from "./MobileSearchModal";
const DynamicMobileMenu = React.lazy(() => import('./MobileMenu'));

const DynamicMobileSearchModal = React.lazy(() => import('./MobileSearchModal'));
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showAdBanner, setShowAdBanner] = useState(true);

  const handleDismissBanner = () => {
    setShowAdBanner(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {showAdBanner && (
        <div className="bg-emerald-600 text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-center relative">
            <p className="text-center text-sm sm:text-base lg:text-lg">
              🎉 Free shipping on orders over $50 | Holiday deals up to 50% off
            </p>
            <button
              onClick={handleDismissBanner}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200"
              aria-label="Close advertisement banner"
            >
              ✖
            </button>
          </div>
        </div>
      )}

      {/* Responsive Navigation */}
      <div className="relative">
        <DesktopNav />
        <MobileNav
          onMenuClick={() => setIsMenuOpen(true)}
          onSearchClick={() => setIsSearchOpen(true)}
        />
      </div>

      {/* Mobile Overlays */}
      <DynamicMobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navItems={navItems}
      />
      <DynamicMobileSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </header>
  );
}