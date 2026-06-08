import React from "react";
import BlogCard from "./BlogCard";

const BlogSection = ({ posts, showIntro = true }) => (
  <section className="home-blog" id="blog">
    {showIntro && (
      <div className="home-blog__intro">
        <p className="eyebrow">From Our Blog</p>
        <h2>Stories and tips for natural self-care</h2>
        <p className="home-blog__description">
          Read about Ayurvedic rituals, herbal wellness, and simple routines to
          support your daily calm.
        </p>
      </div>
    )}

    <div className="home-blog__grid">
      {posts.map((post) => (
        <BlogCard key={post.title} post={post} />
      ))}
    </div>
  </section>
);

export default BlogSection;
