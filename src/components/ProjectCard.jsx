function ProjectCard({
  title,
  description,
  link,
  category,
  stack,
  featured = false,
  highlights = [],
  previewImage,
  previewAlt,
  previewPosition,
}) {
  const isExternal = link.startsWith('http')
  const linkLabel = isExternal ? 'Visit Project' : 'Ask for Demo'

  return (
    <article className={`project-card ${featured ? 'project-card-featured' : ''}`}>
      <div className="project-preview" aria-label={`${title} preview`}>
        {previewImage ? (
          <img
            src={previewImage}
            alt={previewAlt || `${title} screenshot`}
            style={previewPosition ? { objectPosition: previewPosition } : undefined}
          />
        ) : (
          <div className="project-preview-placeholder">
            <span>{title}</span>
          </div>
        )}
      </div>

      <div className="project-top">
        <span className="project-category">{category}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      {highlights.length > 0 && (
        <ul className="project-highlights">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      )}

      <div className="tag-list">
        {stack.map((item) => (
          <span key={item} className="tag">
            {item}
          </span>
        ))}
      </div>

      <a
        className="project-link"
        href={link}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noreferrer' : undefined}
      >
        {linkLabel}
      </a>
    </article>
  )
}

export default ProjectCard
