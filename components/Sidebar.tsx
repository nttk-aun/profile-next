import { CopyEmailButton } from "./CopyEmailButton";
import { profile } from "@/lib/data/profile";

export function Sidebar() {
  const { contact, languages, name, role } = profile;

  return (
    <aside className="sidebar" aria-label="Contact information">
      <div className="sidebar-card">
        <h2 className="sidebar-name">{name}</h2>
        <p className="sidebar-role">{role}</p>

        <ul className="contact-list">
          <li>
            <span className="contact-label">Phone</span>
            <a href={contact.phoneHref}>{contact.phone}</a>
          </li>
          <li>
            <span className="contact-label">Email</span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <CopyEmailButton />
          </li>
          <li>
            <span className="contact-label">GitHub</span>
            <a
              href={contact.github.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.github.label}
            </a>
          </li>
          <li>
            <span className="contact-label">LinkedIn</span>
            <a
              href={contact.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.linkedin.label}
            </a>
          </li>
        </ul>

        <section className="sidebar-block" aria-labelledby="languages-heading">
          <h3 id="languages-heading" className="sidebar-heading">
            Languages
          </h3>
          <ul className="lang-list">
            {languages.map((lang) => (
              <li key={lang.name}>
                <strong>{lang.name}</strong> — {lang.level}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </aside>
  );
}
