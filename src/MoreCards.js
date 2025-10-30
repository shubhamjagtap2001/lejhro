import React, { useRef } from "react";
import "./style/MoreCards.css";
import { Eye, Clock } from "lucide-react";
import sear from "./Image/SERP.png";
import decision from "./Image/decision.png";
import ai from "./Image/ai_power.png";
import analytical from "./Image/analytics_world.png";
import ghost from "./Image/ghost.png";
import management from "./Image/management.png";

const blogData = [
  {
    id: 1,
    image: sear,
    title: "Master SERP Analysis for Superior SEO Results",
    date: "21th July, 2024",
    views: "190k",
    readTime: "10 min",
  },
  {
    id: 2,
    image: decision,
    title: "Enhance Decision-Making with Data Visualization",
    date: "20th July, 2024",
    views: "111k",
    readTime: "10 min",
  },
  {
    id: 3,
    image: ai,
    title: "AI-Powered Transformation: Revolutionizing SEM Strategies",
    date: "21th July, 2024",
    views: "190k",
    readTime: "10 min",
  },
  {
    id: 4,
    image: analytical,
    title: "Mastering the Future: Navigating Predictive Analytics World",
    date: "21th July, 2024",
    views: "190k",
    readTime: "10 min",
  },
  {
    id: 5,
    image: ghost,
    title: "Ghost v/s Guest Posting",
    date: "21th July, 2024",
    views: "190k",
    readTime: "10 min",
  },
  {
    id: 6,
    image: management,
    title: "What is online reputation management",
    date: "21th July, 2024",
    views: "190k",
    readTime: "10 min",
  }
];

const MoreCards = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="more-blogs">
      <h2>More Blogs</h2>

      <div className="blog-carousel" ref={carouselRef}>
        {blogData.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p className="date">Updated on {blog.date}</p>
            <div className="meta">
              <span><Eye size={16} /> {blog.views} views</span>
              <span><Clock size={16} /> {blog.readTime} Read</span>
            </div>
            <button className="read-btn">Read More</button>
          </div>
        ))}
      </div>

      <div className="nav prev" onClick={() => scroll("left")}> &#10094; </div>
      <div className="nav next" onClick={() => scroll("right")}> &#10095; </div>
    </section>
  );
};

export default MoreCards;
