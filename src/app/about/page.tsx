"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/app/components/header/Header";
import MegaNav from "@/app/components/header/SubHeader";
import {
  Check,
  Gift,
  Calendar,
  Book,
  ArrowRight,
  ChevronRight,
  LucideIcon,
} from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  stats: string;
}

interface Value {
  title: string;
  description: string;
}

interface Developer {
  name: string;
  role: string;
  linkedin: string;
  github: string;
  instagram: string;
  email: string;
}

// Services data
const services: Service[] = [
  {
    title: "Diaries & Notebooks",
    description:
      "Premium quality diaries and notebooks crafted with precision for both personal and professional use.",
    icon: Book,
    stats: "5000+ Products",
  },
  {
    title: "Custom Calendars",
    description:
      "Beautifully designed calendars that blend aesthetics with functionality, tailored to your preferences.",
    icon: Calendar,
    stats: "2000+ Designs",
  },
  {
    title: "Gift Solutions",
    description:
      "Thoughtfully curated gift items that make every occasion memorable and special.",
    icon: Gift,
    stats: "3000+ Options",
  },
];

const values: Value[] = [
  {
    title: "Quality First",
    description:
      "We maintain unwavering commitment to excellence in every product we create.",
  },
  {
    title: "Customer Satisfaction",
    description:
      "Your happiness drives our innovation and commitment to continuous improvement.",
  },
  {
    title: "Innovation",
    description:
      "Embracing modern trends while maintaining our core values and quality standards.",
  },
];

const developers: Developer[] = [
  {
    name: "J.Hanish",
    role: "Fullstack Developer",
    linkedin: "https://linkedin.com/in/hanish",
    github: "https://github.com/hanish",
    instagram: "https://instagram.com/hanish",
    email: "hanish@example.com",
  },
  {
    name: "I.Chandra Virat",
    role: "Fullstack Developer",
    linkedin: "https://linkedin.com/in/virat",
    github: "https://github.com/virat",
    instagram: "https://instagram.com/virat",
    email: "virat@example.com",
  },
];

export default function AboutUs() {
  //const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <MegaNav />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[90vh] overflow-hidden px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/30 to-green-700/30" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-500/10 transform rotate-45 translate-x-1/2" />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              className="text-white z-10 p-4 sm:p-6 lg:p-8"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-white/15 rounded-full mb-6 sm:mb-8 backdrop-blur-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-white/90 text-sm sm:text-base font-medium">
                  Established 1995
                </span>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
                Crafting Excellence in Every Detail
              </h1>
              <p className="text-lg sm:text-xl opacity-90 leading-relaxed mb-8 sm:mb-10">
                At Avinash Products, we blend artisanal craftsmanship with modern
                innovation to create products that elevate your daily experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link
                  href="#services"
                  className="group px-6 sm:px-8 py-3 sm:py-4 bg-white text-green-600 rounded-xl font-semibold inline-flex items-center justify-center gap-2 shadow-lg shadow-green-700/10 text-sm sm:text-base transition-transform hover:-translate-y-1"
                >
                  Explore Our Services
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-xl font-semibold inline-flex items-center justify-center gap-2 text-sm sm:text-base transition-all hover:bg-white/10 hover:-translate-y-1"
                >
                  Get in Touch
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </motion.div>

            <div className="relative aspect-square max-w-lg mx-auto lg:max-w-none">
              <div className="relative w-full h-full rounded-full bg-white/10 backdrop-blur-xl p-8 sm:p-12">
                <div className="relative w-full h-full">
                  <Image
                    src="/logo.svg"
                    alt="Avinash Products Logo"
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section
        id="services"
        className="py-16 sm:py-24 lg:py-32 relative bg-white px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <span className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-green-100 text-green-600 rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
              Our Premium Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              What We Offer
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our curated collection of premium products and services.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative p-6 sm:p-8 lg:p-10 bg-white rounded-2xl shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 bg-green-50 rounded-2xl mb-6 sm:mb-8 transition-transform group-hover:scale-110">
                  <service.icon className="w-8 sm:w-10 h-8 sm:h-10 text-green-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-green-600">
                  {service.stats}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 lg:py-32 relative bg-green-50/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <span className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-green-100 text-green-600 rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
              Our Core Values
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Our values shape everything we do.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="group relative p-6 sm:p-8 lg:p-10 bg-white rounded-2xl shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-green-50/50"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-green-50 rounded-2xl mb-8 transition-transform group-hover:scale-110">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    


      {/* Developers Section */}
      <motion.section
        className="py-32 relative bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Developers content remains the same but with updated color classes */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 to-transparent" />
        <motion.div
          className="max-w-7xl mx-auto px-6 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-6 py-3 bg-green-100 text-green-600 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Meet Our Team
            </motion.span>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              The Minds Behind the Magic
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our talented developers bring innovation and expertise to every
              project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {developers.map((developer, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <motion.div
                  className="group relative p-10 bg-white rounded-2xl shadow-xl border border-gray-100"
                  whileHover={{
                    y: -10,
                    backgroundColor: "rgba(240, 253, 244, 0.8)",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    {developer.name}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8">{developer.role}</p>

                  <div className="flex gap-6 justify-center">
                    <motion.a
                      href={developer.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700"
                      whileHover={{ scale: 1.2, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaLinkedin size={24} />
                    </motion.a>
                    <motion.a
                      href={developer.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 hover:text-gray-700"
                      whileHover={{ scale: 1.2, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaGithub size={24} />
                    </motion.a>
                    <motion.a
                      href={developer.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-600 hover:text-pink-700"
                      whileHover={{ scale: 1.2, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaInstagram size={24} />
                    </motion.a>
                    <motion.a
                      href={`mailto:${developer.email}`}
                      className="text-red-600 hover:text-red-700"
                      whileHover={{ scale: 1.2, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaEnvelope size={24} />
                    </motion.a>
                  </div>

                  <motion.div
                    className="absolute -z-10 top-0 right-0 w-40 h-40 bg-red-500/5 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
