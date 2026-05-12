function Hero({ profile }) {
  return (
    <section id="about" className="section hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Personal Portfolio</p>
        <h1>{profile.name}</h1>
        <p className="hero-role">{profile.title}</p>
        <p className="hero-summary">{profile.summary}</p>
        <p className="hero-about">{profile.about}</p>

        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            View Projects
          </a>
          <a className="button button-secondary" href={profile.cvPath} download>
            Download CV
          </a>
          <a className="button button-secondary" href="#contact">
            Contact Me
          </a>
        </div>
      </div>

      <aside className="hero-panel">
        <div className="hero-card">
          <p className="card-label">Quick Info</p>
          <ul className="contact-list">
            <li>
              <span>Location</span>
              <strong>{profile.location}</strong>
            </li>
            <li>
              <span>Email</span>
              <strong>{profile.email}</strong>
            </li>
            <li>
              <span>Phone</span>
              <strong>{profile.phone}</strong>
            </li>
          </ul>
        </div>

        <div className="hero-highlights">
          <article className="stat-card">
            <strong>2</strong>
            <span>Live Web Platforms</span>
          </article>
          <article className="stat-card">
            <strong>Full-Stack</strong>
            <span>Product Development</span>
          </article>
          <article className="stat-card">
            <strong>MSc</strong>
            <span>Software Engineering</span>
          </article>
        </div>
      </aside>
    </section>
  )
}

export default Hero
