import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { navigationData } from './navigation-data';


const MegaNav = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(key);
    setIsTransitioning(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
      setActiveMenu(null);
    }, 100);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
        setIsTransitioning(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="hidden lg:block relative w-full">
      <nav className="w-full bg-white border-b border-gray-200 relative z-40 shadow-sm">
        <div className="max-w-8xl mx-auto px-4">
          <ul className="flex items-center justify-between">
            {Object.keys(navigationData).map((key) => (
              <li
                key={key}
                className="relative"
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}
              >
                <button 
                  className={`flex items-center px-4 py-3 transition-colors ${
                    activeMenu === key 
                      ? 'text-green-600' 
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  <span>{key}</span>
                  <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                    activeMenu === key ? 'rotate-180' : ''
                  }`} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mega menu overlay */}
      {(activeMenu || isTransitioning) && (
        <div 
          ref={menuRef}
          className={` mx-auto w-[90%] bg-transparent shadow-lg z-30 transition-opacity duration-200 ${
            activeMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          style={{
            top: 'var(--nav-height, 49px)',
            height: 'auto',
            maxHeight: 'calc(100vh - var(--nav-height, 49px))',
            overflowY: 'auto'
          }}
          onMouseEnter={() => {
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activeMenu && navigationData[activeMenu].items.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="font-semibold text-gray-900 border-b border-gray-200 pb-2">
                    {section.section}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((item, linkIdx) => (
                      <li key={linkIdx}>
                        <Link 
                          href={item.link}
                          className="group flex items-center text-gray-600 hover:text-green-600 transition-colors"
                        >
                          <span className="group-hover:text-green-600">{item.name}</span>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaNav;