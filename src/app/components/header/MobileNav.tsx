// components/header/MobileNav.tsx
import { Menu, Search} from 'lucide-react';
import Logo from './Logo';
//import CountBadge from './CountBadge';

interface MobileNavProps {
  onMenuClick: () => void;
  onSearchClick: () => void;
}

export default function MobileNav({
  onMenuClick,
  onSearchClick
}: MobileNavProps) {
  return (
    <div className="lg:hidden flex items-center justify-between px-4 h-16 bg-white">
      <button
        onClick={onMenuClick}
        className="p-2 hover:bg-emerald-50 rounded-full transition-colors"
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6 text-gray-700" />
      </button>

      <Logo className="w-28 h-8" />

      <div className="flex items-center space-x-2">
        <button
          onClick={onSearchClick}
          className="p-2 hover:bg-emerald-50 rounded-full transition-colors"
          aria-label="Search"
        >
          <Search className="h-6 w-6 text-gray-700" />
        </button>

        {/*<button 
          className="relative p-2 hover:bg-emerald-50 rounded-full transition-colors"
          aria-label="Wishlist"
        >
          <Heart className="h-6 w-6 text-gray-700" />
          <CountBadge count={wishlistCount} />
        </button>

        <button 
          className="relative p-2 hover:bg-emerald-50 rounded-full transition-colors"
          aria-label="Cart"
        >
          <ShoppingBag className="h-6 w-6 text-gray-700" />
          <CountBadge count={cartCount} />
        </button>*/}
      </div>
    </div>
  );
}