import React, { useEffect } from "react";
import "./index.css";
import indukanti from "../../images/indukanti.png";
import indukanthi from "../../images/indukanthi.png";
import indu from "../../images/indu-product.png";
import oil from "../../images/oil.png";
// import indukanthiabt from "../../images/indukanthi-abt.png";
import nidraplus from "../../images/nidraplus.png";
import hairdye from "../../images/hairdye.png";
import painbalms from "../../images/painbalm.png";
import herbs from "../../images/herbs.png";
import natural from "../../images/natural.png";
import HomeBanner from "./components/HomeBanner";
import ProductSection from "./components/ProductSection";
import IndukanthiSection from "./components/IndukanthiSection";
import TrustSection from "./components/TrustSection";
import BlogSection from "./components/BlogSection";
import TestimonialsSection from "./components/TestimonialsSection";
const productList = [
  {
    title: "Indukanthi Oil",
    subtitle: "Nourish skin with herbal goodness",
    image: indu,
    price: "Rs. 499",
  },
  {
    title: "Nidra Plus Oil",
    subtitle: "Keep your glow natural and gentle",
    image: nidraplus,
    price: "Rs. 300",
  },
  {
    title: "Hairdye",
    subtitle: "Revitalize body and mind with herbs",
    image: hairdye,
    price: "Rs. 350",
  },
  {
    title: "Pain Balm",
    subtitle: "A calming routine crafted from healing leaves",
    image: painbalms,
    price: "Rs. 80",
  } /*
  {
    title: "Soothe Blend",
    subtitle: "Lightweight oil for daily comfort",
    image: herbs,
    price: "$19",
  },
  {
    title: "Daily Serum",
    subtitle: "Brightening herbal facial serum",
    image: indukanthi,
    price: "$24",
  },
  {
    title: "Calm Night Oil",
    subtitle: "Nightly ritual for deep restoration",
    image: herbs,
    price: "$28",
  },
  {
    title: "Herbal Travel Kit",
    subtitle: "Mini formulations for wellness on the go",
    image: indukanthi,
    price: "$34",
  },*/,
];

const blogPosts = [
  {
    title: "How Ayurvedic Oils Support Daily Calm",
    date: "June 1, 2026",
    excerpt:
      "Discover the ritual behind our herbal blends and why they help restore balance.",
    image: oil,
  },
  {
    title: "Herbs That Nourish Skin From Within",
    date: "May 28, 2026",
    excerpt:
      "Learn about the botanicals in our formulations and how they support radiant skin.",
    image: herbs,
  },
  {
    title: "Choosing Natural Care for Everyday Wellness",
    date: "May 20, 2026",
    excerpt:
      "Simple ways to bring Ayurvedic self-care into your daily routine with confidence.",
    image: natural,
  },
];

const testimonials = [
  {
    name: "Sruthi Menon",
    role: "Wellness Enthusiast",
    quote:
      "The Indukanthi oil transformed my hair routine. It feels stronger, smoother, and deeply nourished.",
  },
  {
    name: "Arjun",
    role: "Customer",
    quote:
      "I love how gentle and effective these oils are. The herbal scent is calming and the results are real.",
  },
  {
    name: "Sneha",
    role: "Customer",
    quote:
      "Beautiful texture, fast absorption, and my scalp feels healthier every day. Highly recommend!",
  },
];

const Home = () => {
  useEffect(() => {
    const banner = document.querySelector(".home-banner");
    const header = document.querySelector(".header-container");
    if (!banner || !header) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            header.classList.remove("header-solid");
          } else {
            header.classList.add("header-solid");
          }
        });
      },
      { threshold: 0 },
    );

    io.observe(banner);
    return () => io.disconnect();
  }, []);

  return (
    <main className="home-page">
      <HomeBanner />
      <ProductSection products={productList} />
      <IndukanthiSection image={indukanthi} />
      <TrustSection />
      <BlogSection posts={blogPosts} />
      <TestimonialsSection testimonials={testimonials} />
    </main>
  );
};

export default Home;
