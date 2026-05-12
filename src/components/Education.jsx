function Education({ education, experience, courses }) {
  return (
    <section id="education" className="section">
      <div className="section-intro">
        <p className="eyebrow">Background</p>
        <h2>Education & Experience</h2>
        <p>
          My academic path and hands-on technical background shape the way I
          approach software delivery, product reliability, and practical
          problem-solving.
        </p>
      </div>

      <div className="timeline-grid">
        <div className="panel">
          <h3>Education</h3>
          {education.map((item) => (
            <article key={item.title} className="timeline-item">
              <span className="timeline-period">{item.period}</span>
              <h4>{item.title}</h4>
              <p>{item.organization}</p>
              <p>{item.location}</p>
            </article>
          ))}
        </div>

        <div className="panel">
          <h3>Experience</h3>
          {experience.map((item) => (
            <article key={item.title} className="timeline-item">
              <span className="timeline-period">{item.period}</span>
              <h4>{item.title}</h4>
              <p>{item.organization}</p>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="panel course-panel">
        <h3>Courses & Training</h3>
        <div className="chip-list">
          {courses.map((course) => (
            <span key={course} className="chip">
              {course}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
