import Link from "next/link";
import { projects } from "@/lib/data/projects";

export function ProjectsGrid() {
  if (!projects.length) {
    return (
      <ul className="projects-grid" role="list" aria-live="polite">
        <li className="showcase-card showcase-card--empty">
          <p>
            No projects yet. Add entries in{" "}
            <code>lib/data/projects.ts</code>.
          </p>
        </li>
      </ul>
    );
  }

  return (
    <ul className="projects-grid" role="list" aria-live="polite">
      {projects.map((project) => (
        <li key={project.id} className="showcase-card">
          <article aria-labelledby={`project-${project.id}`}>
            <header className="showcase-card__header">
              <h2
                id={`project-${project.id}`}
                className="showcase-card__title"
              >
                {project.title}
              </h2>
              <span className="showcase-card__badge" aria-hidden="true">
                Live
              </span>
            </header>
            <p className="showcase-card__desc">{project.description}</p>
            {project.tags.length > 0 && (
              <ul className="showcase-card__tags" aria-label="Tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            )}
            {project.url.startsWith("/") ? (
              <Link
                className="showcase-card__link btn btn--card"
                href={project.url}
              >
                Open project <span aria-hidden="true">→</span>
              </Link>
            ) : (
              <a
                className="showcase-card__link btn btn--card"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open project <span aria-hidden="true">→</span>
              </a>
            )}
          </article>
        </li>
      ))}
    </ul>
  );
}
