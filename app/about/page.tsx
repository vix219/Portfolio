// about/page.tsx
export default function AboutPage() {
  return (
    <section className="section">
      <div className="container stack-lg">
        <h2 className="section-title">About Me</h2>

        <div className="card">
          <h3 className="card-title">Summary</h3>
          <p className="card-content">
            I’m a Junior Software Engineer with full-stack training from Flatiron School, experienced in building responsive 
            React frontends and RESTful APIs using Python and Flask. Strong foundation in JavaScript, SQL, and clean, 
            maintainable code, with hands-on experience delivering end-to-end features from concept to deployment. 
            Brings 6+ years of leadership and operations experience, enabling clear communication, ownership, and effective 
            collaboration in engineering teams.
          </p>
        </div>

        <div className="card">
          <h3 className="card-title">Technical Skills</h3>
          <ul className="skill-list">
            {[
              "JavaScript (ES6+)",
              "React.js",
              "HTML",
              "CSS",
              "Python",
              "Flask",
              "SQL/SQLAlchemy",
              "REST APIs",
              "Git/GitHub",
              "Google Maps API",
            ].map((skill) => (
              <li key={skill} className="skill-pill">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h3 className="card-title">Education</h3>
          <p>
            <strong>
              Flatiron School — Software Engineering Immersive (Certificate)
            </strong>
            <br />
            Graduating May 2025 | 500+ hours of full-stack programming,
            algorithms, and project-based development
          </p>
        </div>

        <div className="card">
          <h3 className="card-title">Work Experience</h3>

          <h4>Lazarus Brewing Company — Taproom Manager</h4>
          <p className="muted">Austin, TX | May 2018 – July 2024</p>

          <ul>
            <li>Led a 20+ person team managing daily operations and schedules.</li>
            <li>Improved processes and efficiency under pressure.</li>
            <li>Collaborated cross-functionally with vendors and leadership.</li>
            <li>Built strong leadership, communication, and project-management skills.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
