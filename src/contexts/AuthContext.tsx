'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  updateUser: (userData: User | null) => void;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  updateUser: () => {},
  checkAuth: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false); // To ensure consistent rendering

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/users/auth/me');
      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const updateUser = (userData: User | null) => {
    setUser(userData);
  };

  useEffect(() => {
    // Avoid hydration mismatches by ensuring the component is mounted
    setIsMounted(true);
    checkAuth();
  }, []);

  if (!isMounted) {
    // Render nothing until the component is mounted to avoid hydration mismatch
    return null;
  }

  return (
    <AuthContext.Provider value={{ user, loading, updateUser, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
