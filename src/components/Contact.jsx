function Contact({ profile }) {
  return (
    <section id="contact" className="section contact-section">
      <div className="section-intro">
        <p className="eyebrow">Get In Touch</p>
        <h2>Contact</h2>
        <p>
          I am open to collaboration, freelance work, and new full-stack
          development opportunities.
        </p>
      </div>

      <div className="contact-grid">
        <div className="panel contact-info-panel">
          <h3>Contact Info</h3>
          <ul className="contact-list detailed">
            <li>
              <span>Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <span>Phone</span>
              <a href="tel:+355692538842">{profile.phone}</a>
            </li>
            <li>
              <span>Location</span>
              <strong>{profile.location}</strong>
            </li>
            <li>
              <span>LinkedIn</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                View Profile
              </a>
            </li>
            {profile.github && (
              <li>
                <span>GitHub</span>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  View GitHub
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact
