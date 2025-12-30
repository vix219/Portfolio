"use client";

type ImageCarouselProps = {
  images: string[]; // array of image URLs or paths
  title: string;    // title of the carousel
};


import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "NextGen Pediatrics — Full-Stack Scheduling Platform",
    tech: "React • Flask • SQLite • SQLAlchemy",
    images: ["/NextGen1.png", "/NextGen2.png", "/NextGen3.png", "/NextGen4.png"],
    link: "https://github.com/KerissaGit/Project-NextGen-Pediatric",
    features: [
      "Role: Team project (full-stack contributor)",
      "Architected and implemented an end-to-end appointment scheduling system supporting patients and providers.",
      "Designed secure Flask APIs and relational database schemas enabling full CRUD operations across multiple entities.",
      "Built a responsive React interface using reusable components and centralized state for real-time updates.",
      "Implemented authentication and role-based access control to support multiple user types.",
    ],
  },
  {
    title: "Fruitful — Geolocation-Based Tree Tracking App",
    tech: "React • Flask • SQLAlchemy • Google Maps API",
    images: ["/Fruitful1.png", "/Fruitful2.png", "/Fruitful3.png"],
    link: "https://github.com/vix219/Phase-5-Project-Fruitful",
    features: [
      "Role: Solo developer",
      "Designed and built RESTful APIs to manage users, geospatial locations, and shared content.",
      "Integrated Google Maps API to display, add, and interact with geolocated fruit tree data.",
      "Implemented authentication, image uploads, and user profile management.",
      "Built mobile-first UI components optimized for map-based interaction.",
    ],
  },
  {
    title: "The Thirsty Python Bar — Command-Line Application",
    tech: "Python • SQLite",
    images: ["/Thirsty-Python1.png", "/Thirsty-Python2.png", "/Thirsty-Python3.png"],
    link: "https://github.com/Ketchuso/Thirsty-Python-Bar",
    features: [
      "Role: Team project (full-stack contributor)",
      "Developed a Python-based CLI application simulating a bar ordering and tab management system.",
      "Modeled persistent relational data with SQLite to track users, orders, and transactions.",
      "Structured application logic using reusable classes and clear separation of concerns.",
    ],
  },
];


function ImageCarousel({ images, title }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = () =>
    setCurrent((prev) => (prev + 1) % images.length);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="carousel">
      <div className="image-wrapper" onClick={next}>
        <Image
          src={images[current]}
          alt={`${title} screenshot ${current + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="project-image"
          data-orientation="wide"
          priority={current === 0}
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            className="carousel-btn left"
            onClick={prev}
            aria-label="Previous image"
          >
            ‹
          </button>

          <button
            className="carousel-btn right"
            onClick={next}
            aria-label="Next image"
          >
            ›
          </button>

          <div className="carousel-dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${
                  index === current ? "active" : ""
                }`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section className="section">
      <div className="container stack-lg">
        <h2 className="section-title">Projects</h2>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div key={index} className="card">
              <ImageCarousel
                images={project.images}
                title={project.title}
              />

              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="project-tech">{project.tech}</p>

                <ul className="project-features">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
