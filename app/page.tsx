// dashboard/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="section">
      <div className="container-narrow">
        {/* Profile Image */}
        <div className="hero-image-wrapper">
          <Image
            src="/Headshot.jpg"
            alt="Victoria Lima De Carvalho"
            width={220}
            height={220}
            className="hero-image"
            priority
          />
        </div>

        <h1 className="hero-title">
          Hi, I’m Victoria Lima De Carvalho
        </h1>

        <p className="hero-subtitle muted">
          Junior Software Engineer | Full-Stack Developer | React &amp; Python Enthusiast | Lifelong Learner
        </p>

        <div className="button-group">
          <Link href="/about" className="button-primary">
            About Me
          </Link>

          <Link href="/dashboard" className="button-secondary">
            View Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
