import { profile } from "@/lib/data/profile";
import { RevealSection } from "./RevealSection";

export function CvMain() {
  const { professionalProfile, skills, employer, education } = profile;

  return (
    <main className="main" id="main">
      <RevealSection
        className="section section--profile reveal"
        id="profile"
        aria-labelledby="profile-heading"
      >
        <h2 id="profile-heading" className="section-title">
          Professional Profile
        </h2>
        <p className="lead">{professionalProfile}</p>
      </RevealSection>

      <RevealSection
        className="section section--skills reveal"
        id="skills"
        aria-labelledby="skills-heading"
      >
        <h2 id="skills-heading" className="section-title">
          Core Skills
        </h2>
        <ul className="skill-tags" role="list">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </RevealSection>

      <RevealSection
        className="section section--career reveal"
        id="career"
        aria-labelledby="career-heading"
      >
        <h2 id="career-heading" className="section-title">
          Career Summary
        </h2>

        <article className="employer">
          <header className="employer-header">
            <div>
              <h3 className="employer-name">{employer.name}</h3>
              <p className="employer-role">{employer.role}</p>
            </div>
            <time className="employer-period" dateTime={employer.periodDatetime}>
              {employer.period}
            </time>
          </header>
          <p className="employer-summary">{employer.summary}</p>

          <ul className="project-list">
            {employer.projects.map((project) => (
              <li key={project.name} className="project-card">
                <header className="project-header">
                  <h4 className="project-name">{project.name}</h4>
                  <time
                    className="project-period"
                    dateTime={project.periodDatetime}
                  >
                    {project.period}
                  </time>
                </header>
                <ul className="tech-tags" aria-label="Technologies">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <h5 className="project-subtitle">Key Responsibilities</h5>
                <ul className="project-duties">
                  {project.duties.map((duty) => (
                    <li key={duty}>{duty}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </article>
      </RevealSection>

      <RevealSection
        className="section section--education reveal"
        id="education"
        aria-labelledby="education-heading"
      >
        <h2 id="education-heading" className="section-title">
          Education
        </h2>
        <article className="education-card">
          <header className="education-header">
            <div>
              <h3 className="education-degree">{education.degree}</h3>
              <p className="education-school">{education.school}</p>
            </div>
            <div className="education-meta">
              <span className="education-gpa">{education.gpa}</span>
              <time
                className="education-period"
                dateTime={education.periodDatetime}
              >
                {education.period}
              </time>
            </div>
          </header>
          <p className="education-coursework">
            <strong>Relevant coursework:</strong> {education.coursework}
          </p>
        </article>
      </RevealSection>
    </main>
  );
}
