// components/header/CountBadge.tsx
interface CountBadgeProps {
    count: number;
  }
  
  export default function CountBadge({ count }: CountBadgeProps) {
    if (count <= 0) return null;
    
    return (
      <span className="absolute -top-1 -right-1 h-5 min-w-[20px] px-1 text-xs font-medium flex items-center justify-center bg-red-500 text-white rounded-full">
        {count}
      </span>
    );
  }