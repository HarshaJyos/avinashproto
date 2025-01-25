// types/index.ts
export interface IUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    phone?: string;
    isVerified: boolean;
    isAdmin: boolean;
    forgotPasswordToken?: string;
    forgotPasswordTokenExpires?: Date;
    verifyToken?: string;
    verifyTokenExpires?: Date;
    address?: {
      type: 'home' | 'work' | 'other';
      details: string;
    }[];
    wishlist?: string[];
    cart?: {
      productId: string;
      quantity: number;
    }[];
    createdAt?: Date;
    updatedAt?: Date;
  }