'use client';

import React, { useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { toast } from "react-hot-toast";

const productCategories = [
  { name: "Business Cards", href: "/category/business-cards" },
  { name: "Brochures & Catalogs", href: "/category/brochures-catalogs" },
  { name: "Banners & Signage", href: "/category/banners-signage" },
  { name: "Corporate Stationery", href: "/category/corporate-stationery" },
  { name: "Custom Packaging", href: "/category/custom-packaging" },
  { name: "Custom Calendars", href: "/category/custom-calendars" },
  { name: "Photo Prints", href: "/category/photo-prints" },
  { name: "Promotional Items", href: "/category/promotional-items" },
  { name: "Art & Canvas Prints", href: "/category/art-prints" },
] as const;


const socialLinks = [
  { icon: <Facebook />, href: "https://facebook.com/avinashproducts", name: "Facebook" },
  { icon: <Instagram />, href: "https://instagram.com/avinashproducts", name: "Instagram" },
  { icon: <Twitter />, href: "https://twitter.com/avinashproducts", name: "Twitter" },
  { icon: <Linkedin />, href: "https://linkedin.com/company/avinashproducts", name: "LinkedIn" },
] as const;

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Products", href: "/products" },
  { name: "Contact", href: "/contact" },
] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setSuccessMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Successfully subscribed to newsletter!");
        setEmail("");
        setSuccessMessage("Thank you for subscribing! You will now receive the latest updates and offers.");
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Failed to subscribe");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-white">
      <div className="bg-green-50 py-8">
        <Container maxWidth="lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
            <div className="space-y-2 text-center sm:text-left">
              <Typography variant="h6" className="text-green-700 font-bold">
                Stay Updated with Our Latest Products
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                Subscribe to our newsletter for exclusive updates and offers
              </Typography>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:flex-1 px-4 py-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
          {successMessage && (
            <div className="mt-4 text-center text-green-700 font-medium">
              {successMessage}
            </div>
          )}
        </Container>
      </div>

      <Container maxWidth="lg" className="py-12">
        <Grid container spacing={6}>
          <Grid item xs={12} md={4}>
            <div className="space-y-4 text-center sm:text-left">
              <Typography variant="h5" className="font-bold text-gray-800">
                Avinash Products
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                Crafting excellence since 1995. We specialize in delivering premium quality products that blend traditional craftsmanship with modern innovation.
              </Typography>
              <div className="flex gap-4 justify-center sm:justify-start">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 transition-colors duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" className="font-bold text-gray-800 mb-4 text-center sm:text-left">
              Quick Links
            </Typography>
            <ul className="space-y-2 text-center sm:text-left">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-green-600 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" className="font-bold text-gray-800 mb-4 text-center sm:text-left">
              Products
            </Typography>
            <ul className="space-y-2 text-center sm:text-left">
              {productCategories.map((category) => (
                <li key={category.name}>
                  <Link
                    href={category.href}
                    className="text-gray-600 hover:text-green-600 transition-colors duration-300"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" className="font-bold text-gray-800 mb-4 text-center sm:text-left">
              Contact Information
            </Typography>
            <div className="space-y-4">
              <Link href="https://maps.google.com/?q=Your+Address+Here" target="_blank" rel="noopener noreferrer">
                <div className="flex items-center gap-3 justify-center sm:justify-start hover:text-green-600">
                  <MapPin className="text-green-600" />
                  <Typography variant="body2" className="text-gray-600">
                    [Your Address Here], City, State, PIN
                  </Typography>
                </div>
              </Link>
              <Link href="mailto:info@avinashproducts.com">
                <div className="flex items-center gap-3 justify-center sm:justify-start hover:text-green-600">
                  <Mail className="text-green-600" />
                  <Typography variant="body2" className="text-gray-600">
                    info@avinashproducts.com
                  </Typography>
                </div>
              </Link>
              <Link href="tel:+91XXXXXXXXXX">
                <div className="flex items-center gap-3 justify-center sm:justify-start hover:text-green-600">
                  <Phone className="text-green-600" />
                  <Typography variant="body2" className="text-gray-600">
                    +91 XXXXX XXXXX
                  </Typography>
                </div>
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>

      <div className="border-t border-gray-200">
        <Container maxWidth="lg" className="py-6">
          <div className="flex flex-col gap-4 items-center sm:flex-row sm:justify-between">
            <Typography variant="body2" className="text-gray-600 text-center sm:text-left">
              © {currentYear} Avinash Products. All rights reserved.
            </Typography>
            <div className="flex flex-wrap gap-6 justify-center">
              {[
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Shipping Policy", href: "/shipping" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-green-600 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}