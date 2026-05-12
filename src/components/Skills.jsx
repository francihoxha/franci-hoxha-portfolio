function Skills({ skillGroups, languages }) {
  return (
    <section id="skills" className="section">
      <div className="section-intro">
        <p className="eyebrow">Technical Toolkit</p>
        <h2>Skills</h2>
        <p>
          My strongest areas are full-stack JavaScript development, responsive
          interfaces, backend logic, and database-driven applications.
        </p>
      </div>

      <div className="skills-layout">
        <div className="panel skill-panel">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-group">
              <h3>{group.title}</h3>
              <div className="chip-list">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="panel language-panel">
          <h3>Languages</h3>
          <p>
            Clear communication matters as much as clean code when working on
            teams and client-facing products.
          </p>

          <div className="chip-list">
            {languages.map((language) => (
              <span key={language} className="chip">
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
