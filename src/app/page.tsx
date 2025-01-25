"use client";

//import { useAuth } from '@/contexts/AuthContext';
import Header from "./components/header/Header";
import MegaNav from "./components/header/SubHeader";
import { Suspense } from "react";
import HeroCarousel from "./components/hero/Hero";
import Categories from "./components/categories/categories";
import NewLaunches from "./components/categories/newLaunches";
import Footer from "./components/Footer/footer";
const LoadingSpinner = () => (
  <div className="spinner"></div> // Display the spinner
);
export default function Home() {
  // const { user } = useAuth();

  return (
    <>
      <Header />
      <MegaNav />
      <HeroCarousel />
      <Suspense fallback={<LoadingSpinner />}>
        <Categories />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <NewLaunches />{" "}
      </Suspense>
      <Footer/>
    </>
  );
}
