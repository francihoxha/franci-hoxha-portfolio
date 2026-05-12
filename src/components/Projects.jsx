import { useState } from 'react'
import ProjectCard from './ProjectCard'

function Projects({ projects }) {
  const categories = ['All', ...new Set(projects.map((project) => project.category))]
  const [activeCategory, setActiveCategory] = useState('All')

  const visibleProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="projects" className="section">
      <div className="section-intro">
        <p className="eyebrow">Selected Work</p>
        <h2>Projects</h2>
        <p>
          These projects show my focus on practical business platforms, booking
          systems, and scalable web experiences.
        </p>
      </div>

      <div className="filter-group" role="tablist" aria-label="Project categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-button ${
              activeCategory === category ? 'active' : ''
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            link={project.link}
            category={project.category}
            stack={project.stack}
            featured={project.featured}
            highlights={project.highlights}
            previewImage={project.previewImage}
            previewAlt={project.previewAlt}
            previewPosition={project.previewPosition}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects
