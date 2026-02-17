import React from "react";
import "../App.css";

export function TestimonialCard({ author, text, href }) {
  return (
    <div className="testimonial-card">
      <img className="avatar" src={author.avatar} alt={author.name} />
      <p className="text">"{text}"</p>
      {href && (
        <a className="author-name" href={href} target="_blank" rel="noreferrer">
          {author.name} {author.handle}
        </a>
      )}
    </div>
  );
}
