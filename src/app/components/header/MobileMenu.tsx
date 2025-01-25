import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { X, User, LogOut, ChevronRight } from 'lucide-react';
import { NavItem } from '../../types/header';
import Logo from './Logo';
import { useAuth } from '@/contexts/AuthContext';
import { navigationData } from './navigation-data';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export default function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  const { user } = useAuth();
  const [openSection, setOpenSection] = React.useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/users/auth/logout', {
        method: 'POST'
      });
      
      if (response.ok) {
        window.location.href = '/';
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 transition-opacity duration-300"
        aria-hidden="true"
      />
      
      {/* Menu container - positioned from the left */}
      <div 
        className="fixed inset-y-0 right-[15%] left-0 flex outline-none transform transition-transform duration-300 ease-in-out"
      >
        {/* Actual menu */}
        <div 
          ref={menuRef}
          className="relative w-full bg-white overflow-y-auto shadow-xl"
        >
          <div className="flex flex-col min-h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <Logo className="w-24 h-8" />
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex-1 px-4 py-6">
              {user ? (
                <div className="mb-6 space-y-4">
                  <Link
                    href="/account"
                    className="flex items-center space-x-2 py-3 text-lg hover:text-emerald-600 transition-colors"
                    onClick={onClose}
                  >
                    <User className="h-5 w-5" />
                    <span>{user.name}</span>
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      onClose();
                    }}
                    className="flex items-center space-x-2 py-3 text-lg text-gray-700 hover:text-emerald-600 transition-colors"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <div className="mb-6 space-y-4">
                  <Link
                    href="/login"
                    className="block py-3 text-lg hover:text-emerald-600 transition-colors"
                    onClick={onClose}
                  >
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="block py-3 text-lg hover:text-emerald-600 transition-colors"
                    onClick={onClose}
                  >
                    Sign Up
                  </Link>
                </div>
              )}

              {/* Mega Menu Items */}
              <div className="border-t pt-4">
                {Object.entries(navigationData).map(([key, menuItem]) => (
                  <div key={key} className="mb-4">
                    <button
                      className="flex items-center justify-between w-full py-3 text-lg hover:text-emerald-600 transition-colors"
                      onClick={() => setOpenSection(openSection === key ? null : key)}
                    >
                      <span>{menuItem.name}</span>
                      <ChevronRight
                        className={`h-5 w-5 transition-transform duration-200 ${
                          openSection === key ? 'rotate-90' : ''
                        }`}
                      />
                    </button>
                    
                    {openSection === key && (
                      <div className="pl-4 space-y-4">
                        {menuItem.items.map((section, idx) => (
                          <div key={idx} className="py-2">
                            <h3 className="font-semibold text-gray-900 mb-2">
                              {section.section}
                            </h3>
                            <ul className="space-y-2">
                              {section.links.map((item, linkIdx) => (
                                <li key={linkIdx}>
                                  <Link
                                    href={item.link}
                                    className="flex items-center text-gray-600 py-2 hover:text-emerald-600"
                                    onClick={onClose}
                                  >
                                    <span>{item.name}</span>
                                    {item.badge && (
                                      <span className={`ml-2 text-xs px-2 py-1 rounded ${
                                        item.badge === 'Popular' ? 'bg-green-100 text-green-800' :
                                        item.badge === 'New' ? 'bg-red-100 text-red-800' :
                                        'bg-blue-100 text-blue-800'
                                      }`}>
                                        {item.badge}
                                      </span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Regular Nav Items */}
              <div className="border-t pt-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block py-3 text-lg hover:text-emerald-600 transition-colors"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}