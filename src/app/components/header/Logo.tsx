// components/header/Logo.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ className = "w-32 h-8" }) {
  return (
    <Link href="/" className={`relative ${className}`}>
      <Image
        src="/logo.svg"
        alt="Logo"
        fill
        className="object-contain"
        priority
      />
    </Link>
  );
}