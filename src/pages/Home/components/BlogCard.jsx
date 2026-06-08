import React from "react";

const BlogCard = ({ post }) => (
  <article className="blog-card">
    <div className="blog-card__image">
      <img src={post.image} alt={post.title} />
    </div>
    <div className="blog-card__body">
      <p className="blog-card__meta">{post.date}</p>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <div className="blog-card__footer">
        <button type="button" className="btn btn-blog">
          Read Article
        </button>
      </div>
    </div>
  </article>
);

export default BlogCard;
