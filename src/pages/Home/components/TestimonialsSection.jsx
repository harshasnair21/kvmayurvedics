import React from "react";

const TestimonialsSection = ({ testimonials }) => (
  <section className="home-testimonials" id="testimonials">
    <div className="home-testimonials__intro">
      <p className="eyebrow">What Customers Say</p>
      <h2>Trusted stories from our wellness community</h2>
      <p>
        Hear from customers who found healthier hair and calmer daily rituals
        with our herbal oils.
      </p>
    </div>

    <div className="home-testimonials__grid">
      {testimonials.map((item) => (
        <article key={item.name} className="testimonial-card">
          <p className="testimonial-card__quote">“{item.quote}”</p>
          <div className="testimonial-card__meta">
            <strong>{item.name}</strong>
            <span>{item.role}</span>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default TestimonialsSection;
