import React from "react";
import "./index.css";
import BlogSection from "../Home/components/BlogSection";
import herbs from "../../images/herbs.png";
import oil from "../../images/oil.png";
import natural from "../../images/natural.png";
// import indukanthi from "../../images/indukanthi.png";

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

const Blog = () => (
  <main className="blog-page">
    <section className="blog-hero">
      <div className="blog-hero__content">
        <h1 className="blog-hero__title">From Our Blog</h1>
        <p className="blog-hero__subtitle">
          Stories and tips for natural self-care
        </p>
      </div>
    </section>
    <BlogSection posts={blogPosts} showIntro={false} />
  </main>
);

export default Blog;
